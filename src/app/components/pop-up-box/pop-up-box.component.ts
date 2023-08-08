import { Component } from '@angular/core';

import { PopUpService } from 'src/app/service/pop-up.service';
import { ReservaService } from 'src/app/service/reserva.service';

import { HomeComponent } from '../pages/home/home.component';

import { Reserva } from 'src/app/models/Reserva';

@Component({
  selector: 'app-pop-up-box',
  templateUrl: './pop-up-box.component.html',
  styleUrls: ['./pop-up-box.component.css']
})
export class PopUpBoxComponent {

  constructor(public popUpService: PopUpService, public reservaService: ReservaService, public homeComponent: HomeComponent) {}

  public cancel(reserva: Reserva): void {
    this.reservaService.cancel(reserva).subscribe((res) => {
      this.popUpService.clear();
      this.reservaService.fetchReservas();
  })
 }  
} 

