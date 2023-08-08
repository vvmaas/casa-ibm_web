import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/service/reserva.service';

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
    dataInicio: new FormControl(new Date()),
    dataFim: new FormControl(new Date()),
    quantidadePessoas: new FormControl(0)
  })

  constructor(public service: ReservaService, private router: Router) {}

  submitApplication() {
    this.body = {
      nomeHospede: this.applyForm.value.nomeHospede ?? '',
      dataInicio: this.applyForm.value.dataInicio ?? new Date(),
      dataFim: this.applyForm.value.dataFim ?? new Date(),
      quantidadePessoas: this.applyForm.value.quantidadePessoas ?? 1
    }
    console.log(this.body);
    
    this.service.create(this.body).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: (error) => {
        
      }
    })
  }
}
