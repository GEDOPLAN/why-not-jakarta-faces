import {Component} from '@angular/core';
import {TitleBarComponent} from './components/title-bar/title-bar.component';
import {TrainingsComponent} from './components/trainings/trainings.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {Router, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    TitleBarComponent,
    TrainingsComponent,
    DialogComponent,
    RouterOutlet,
    NgIf
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  selection: string = "";
  viewTrainings: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.router.url.startsWith('/bookings') ? this.viewTrainings = false : this.viewTrainings = true;
    })
  }

  onSelection(event: string) {
    this.selection = event;
  }

  showBookings() {
    this.router.navigate(['/bookings']);
  }
}
