import {Component, EventEmitter, Output} from '@angular/core';
import {NgFor} from '@angular/common';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {Training} from '../../model/training';
import {TrainingService} from '../../services/training.service';
import {DialogComponent} from "../dialog/dialog.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-trainings',
    imports: [
        AsyncPipe, NgFor, DialogComponent
    ],
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css'
})
export class TrainingsComponent {
    @Output() selection = new EventEmitter<string>();

    trainings$: Observable<Training[]>;

    constructor(trainingService: TrainingService, private router: Router) {
        this.trainings$ = trainingService.loadAllTrainings();
    }

    bookTraining(training: Training) {
        this.router.navigate(['trainings', training.id]);
        this.selection.emit(training.id);
    }
}
