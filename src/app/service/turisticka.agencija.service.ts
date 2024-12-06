import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { TuristickaAgencija } from '../model/turisticka.agencija.model';

@Injectable()
export class TuristickaAgencijaService {

  private readonly API_URL = 'http://localhost:8082/turisticka_agencija/';

  dataChange: BehaviorSubject<TuristickaAgencija[]> = new BehaviorSubject<TuristickaAgencija[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllTuristickaAgencija(): Observable<TuristickaAgencija[]> {
    this.httpClient.get<TuristickaAgencija[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addTuristickaAgencija(turistickaAgencija: TuristickaAgencija): void {
    this.httpClient.post(this.API_URL, turistickaAgencija).subscribe();
  }

  public updateTuristickaAgencija(turistickaAgencija: TuristickaAgencija): void {
    this.httpClient.put(this.API_URL + turistickaAgencija.id, turistickaAgencija).subscribe();
  }

  public deleteTuristickaAgencija(turistickaAgencija: TuristickaAgencija): void {
    this.httpClient.delete(this.API_URL + turistickaAgencija.id).subscribe();
  }
}