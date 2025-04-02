import {Routes} from '@angular/router';
import {BookingsComponent} from './components/bookings/bookings.component';
import {TrainingsComponent} from './components/trainings/trainings.component';

export const routes: Routes = [
  {
    path: 'bookings', component: BookingsComponent,
  },
  {
    path: 'trainings', component: TrainingsComponent
  },
  {
    path: 'trainings/:id', component: TrainingsComponent
  }
];
