import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Booking} from '../../model/booking';
import {BookingService} from '../../services/booking.service';
import {Router} from '@angular/router';
import {AsyncPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-bookings',
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings$: Observable<Booking[]>;

  constructor(bookingService: BookingService, private router: Router ) {
    this.bookings$ = bookingService.loadAllBookings();
  }

  showHomepage() {
    this.router.navigate(['/']);
  }
}
