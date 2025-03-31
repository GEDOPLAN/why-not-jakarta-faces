import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../model/training';
import {Booking} from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private httpClient: HttpClient) {
  }

  loadAllBookings() {
    return this.httpClient.get<Booking[]>('http://localhost:8080/booking');
  }

  book(trainingId: string, participant: string) {
    var booking: Booking = {} as Booking;
    booking.name = participant;
    this.httpClient.get<Training>('http://localhost:8080/training/' + trainingId).subscribe((training: Training) => {
      booking.training = training;
      console.log(booking);
      this.httpClient.post<Booking>('http://localhost:8080/booking', booking).subscribe(
        (error) => {
          console.error(error);
        }
      );
    })
  }
}
