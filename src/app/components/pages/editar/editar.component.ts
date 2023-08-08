import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/service/reserva.service';
import { MessagesService } from 'src/app/service/message.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  public body: Reserva = {};

  applyForm = new FormGroup({
    nomeHospede: new FormControl(''),
    dataInicio: new FormControl(new Date()),
    dataFim: new FormControl(new Date()),
    quantidadePessoas: new FormControl(0),
    status: new FormControl('CONFIRMADA')
  })

  constructor(private route: ActivatedRoute, private service: ReservaService,  private router: Router,  private messagesService: MessagesService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.body.id = params['id'];
      this.body.nomeHospede = params['nomeHospede'];
      this.body.dataInicio = params['dataInicio'];
      this.body.dataFim = params['dataFim'];
      this.body.quantidadePessoas = params['quantidadePessoas'];
      this.body.status = params['status'];
    })
  }

  submitApplication() {
    this.body = {
      id: this.body.id,
      nomeHospede: this.applyForm.value.nomeHospede ?? '',
      dataInicio: this.applyForm.value.dataInicio ?? new Date(),
      dataFim: this.applyForm.value.dataFim ?? new Date(),
      quantidadePessoas: this.applyForm.value.quantidadePessoas ?? 1,
      status: this.applyForm.value.status ?? 'CONFIRMADA'
    }
    console.log(this.body);
    
    this.service.edit(this.body).subscribe({
      next: () => {
        this.router.navigate(['/home'])
        this.messagesService.add("Reserva atualizada com sucesso !", "Mudanças salvas");
      },
      error: (error) => {
        this.messagesService.add(error.error.message, "Não foi possível atualizar reserva");
      }
    })
  }

}
