import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor(private httpClient: HttpClient) {
  }

  loadAllTrainings(): Observable<Training[]> {
    return this.httpClient.get<Training[]>('http://localhost:8080/training');
  }

  loadTraining(id: string): Observable<Training> {
    return this.httpClient.get<Training>(`http://localhost:8080/training/${id}`);
  }
}
