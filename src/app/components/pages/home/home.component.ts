import { Component } from '@angular/core';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/service/reserva.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public list: Reserva[] = []

  public cancelada: string = 'CANCELADA'

  constructor(public service: ReservaService, public popUpService: PopUpService){}

  ngOnInit(): void {
    this.service.fetchReservas();
    this.service.currentReservas.subscribe((res) => this.list = res);
  }
}
