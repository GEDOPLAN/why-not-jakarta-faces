import {Component} from '@angular/core';
import {Training} from '../../model/training';
import {TrainingService} from '../../services/training.service';
import {Observable, of} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';
import {BookingService} from '../../services/booking.service';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  imports: [
    AsyncPipe, NgIf, FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  visible = false;
  trainingId?: string;
  training$: Observable<Training | null> = of(null);
  participant?: string;

  constructor(private trainingService: TrainingService, private bookingService: BookingService, private router: Router, route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.trainingId = params.get("id") || undefined;
      if (this.trainingId) {
        this.training$ = this.trainingService.loadTraining(this.trainingId);
        this.viewDialog();
      }
    })
  }

  convertDate(inputDate: string): string {
    const [year, month, day] = inputDate.split('-');
    return `${day}.${month}.${year}`;
  }

  viewDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.router.navigate(["trainings"]);
  }

  buchen() {
    console.log(this.participant);
    this.bookingService.book(this.trainingId!, this.participant!).subscribe(() => this.hideDialog());
  }
}
