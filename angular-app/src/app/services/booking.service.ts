import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../model/training';
import {Booking} from '../model/booking';
import {catchError, of, switchMap, tap} from "rxjs";

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

    return this.httpClient.get<Training>('http://localhost:8080/training/' + trainingId).pipe(
        tap(training => {
            booking.training = training;
            console.log(booking);
        }),
        switchMap(_ => this.httpClient.post<Booking>('http://localhost:8080/booking', booking)),
        catchError( e => {
            console.error(e);
            return of(e);
        })
    );
  }
}
