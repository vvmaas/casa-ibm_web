import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/service/reserva.service';
import { MessagesService } from 'src/app/service/message.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {

  public body: Reserva = {};
    
  applyForm = new FormGroup({
    nomeHospede: new FormControl(''),
    dataInicio: new FormControl(null),
    dataFim: new FormControl(null),
    quantidadePessoas: new FormControl('')
  })

  constructor(public service: ReservaService, private router: Router, private messagesService: MessagesService) {}

  submitApplication() {
    this.body = {
      nomeHospede: this.applyForm.value.nomeHospede ?? '',
      dataInicio: this.applyForm.value.dataInicio ?? undefined,
      dataFim: this.applyForm.value.dataFim ?? undefined,
      quantidadePessoas: Number(this.applyForm.value.quantidadePessoas) ?? 1
    }
    console.log(this.body);
    
    this.service.create(this.body).subscribe({
      next: (res) => {
        console.log(res);
        
        this.router.navigate(['/home'])
        this.messagesService.add("id: " + res.id, "Reserva criada com sucesso!");
      },
      error: (error) => {
        this.messagesService.add(error.error.message, "Não foi possível criar reserva");
      }
    })
  }
}
