import { Component } from '@angular/core';
import { Reserva } from 'src/app/models/Reserva';
import { FormControl, FormGroup } from '@angular/forms';

import { ReservaService } from 'src/app/service/reserva.service';
import { PopUpService } from 'src/app/service/pop-up.service';
import { MessagesService } from 'src/app/service/message.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  public list: Reserva[] = []

  public body: Reserva = {};

  public showAll: boolean = true;
  
  public cancelada: string = 'CANCELADA'

  setShowAll(bool: boolean){
    this.showAll = bool;
  }

  applyForm = new FormGroup({
    id: new FormControl(null),
  })

  constructor(public service: ReservaService, public popUpService: PopUpService, private router: Router,  private messagesService: MessagesService){}

  ngOnInit(): void {
    this.service.fetchReservas();
    this.service.currentReservas.subscribe((res) => this.list = res);
  }

  submitApplication() {
    this.body = {
      id: this.applyForm.value.id ?? 0,
    }
    
    this.service.findById(this.body).subscribe({
      next: (res) => {
        this.list = [res]
        this.setShowAll(false)
        this.messagesService.add("Reserva de " + res.nomeHospede, "Reserva encontrada");
      },
      error: (error) => {
        this.messagesService.add(error.error.message, "Não foi possível encontrar reserva.");
      }
    })
  }

  goToEdit(item: Reserva = {}) {
    const queryParams = { 
      id: item.id,
      nomeHospede: item.nomeHospede,
      dataInicio: item.dataInicio,
      dataFim: item.dataFim,
      quantidadePessoas: item.quantidadePessoas,
      status: item.status
     }
    this.router.navigate(['/editar'], { queryParams })
  }
}
