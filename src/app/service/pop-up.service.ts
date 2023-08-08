import { Injectable } from '@angular/core';
import { Reserva } from '../models/Reserva';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  title: string = '';
  message: string = '';
  reserva: any = null;

  constructor() {}

  add(reserva: Reserva, title: string, message: string){
    this.title = title;
    this.message = message;
    this.reserva = reserva;
  }

  clear(){
    this.reserva = null;
  }
}
