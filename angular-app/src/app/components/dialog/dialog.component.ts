import {Component, Input, input, SimpleChanges} from '@angular/core';
import {Training} from '../../model/training';
import {TrainingService} from '../../services/training.service';
import {Observable, of} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';
import {BookingService} from '../../services/booking.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  imports: [
    AsyncPipe, NgIf, FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  dialogClasses: string = "modal";
  @Input() trainingId: string = "";
  training$: Observable<Training | null> = of(null);
  participant: string = "";

  constructor(private trainingService: TrainingService, private bookingService: BookingService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['trainingId'] && changes['trainingId'].currentValue) {
      this.training$ = this.trainingService.loadTraining(changes['trainingId'].currentValue);
      this.viewDialog();
    }
  }

  viewDialog() {
    this.dialogClasses += " is-active";
  }

  hideDialog() {
    this.dialogClasses = "modal";
  }

  buchen() {
    console.log(this.participant);
    this.bookingService.book(this.trainingId, this.participant);
    this.hideDialog();
  }
}
