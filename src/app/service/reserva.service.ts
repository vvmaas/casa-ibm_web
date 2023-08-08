import { Injectable } from '@angular/core';

import { Reserva } from '../models/Reserva';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseApiUrl = environment.baseApiUrl;

  private reservas = new BehaviorSubject<any[]>([]);
  currentReservas = this.reservas.asObservable()

  constructor(private http: HttpClient) { }

  fetchReservas(){
    this.findAll().subscribe((res) => {
      this.reservas.next(res)
    })
  }

  create(reserva: Reserva): Observable<any> {
    const url = `${this.baseApiUrl}/reservas`
    return this.http.post<FormData>(url, reserva)
  }

  findById(reserva: Reserva): Observable<Reserva> {  
    const id = reserva.id; 
    const url = `${this.baseApiUrl}/reservas/${id}`;
    return this.http.get<Reserva>(url);
  }

  findAll(): Observable<Reserva[]> {
    const url = `${this.baseApiUrl}/reservas`;
    return this.http.get<Reserva[]>(url);
  }

  edit(reserva: Reserva): Observable<any> {  
    const id = reserva.id; 
    const url = `${this.baseApiUrl}/reservas/${id}`;
    return this.http.put<FormData>(url, reserva);
  }

  cancel(reserva: Reserva): Observable<any> {  
    const id = reserva.id; 
    const url = `${this.baseApiUrl}/reservas/${id}/cancelar`;
    return this.http.delete<Reserva>(url);
  }
}
