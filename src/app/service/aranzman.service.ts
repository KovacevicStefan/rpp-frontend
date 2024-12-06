import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Aranzman } from '../model/aranzman.model';

@Injectable()
export class AranzmanService {

  private readonly API_URL = 'http://localhost:8082/aranzman/';

  private readonly API_URL_P = 'http://localhost:8082/aranzmaniZaHotel/';

  dataChange: BehaviorSubject<Aranzman[]> = new BehaviorSubject<Aranzman[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllAranzmans(): Observable<Aranzman[]> {
    this.httpClient.get<Aranzman[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public getAranzmaniZaHotel(id: number): Observable<Aranzman[]> {
    this.httpClient.get<Aranzman[]>(this.API_URL_P + id).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addAranzman(aranzman: Aranzman): void {
    this.httpClient.post(this.API_URL, aranzman).subscribe();
  }

  public updateAranzman(aranzman: Aranzman): void {
    this.httpClient.put(this.API_URL + aranzman.id, aranzman).subscribe();
  }

  public deleteAranzman(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}