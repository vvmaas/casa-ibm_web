import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  public params: Reserva = {};

  applyForm = new FormGroup  ({
    nomeHospede: new FormControl(null, [Validators.required]),
    dataInicio: new FormControl(null, [Validators.required]),
    dataFim: new FormControl(null, [Validators.required]),
    quantidadePessoas: new FormControl(null, [Validators.required]),
    status: new FormControl('Selecione uma opção', [Validators.required])
  });

  constructor(private route: ActivatedRoute, private service: ReservaService,  private router: Router,  private messagesService: MessagesService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.body.id = params['id'];
      this.params.nomeHospede = params['nomeHospede'];
      this.params.dataInicio = params['dataInicio'];
      this.params.dataFim = params['dataFim'];
      this.params.quantidadePessoas = params['quantidadePessoas'];
      this.params.status = params['status'];
      })
    }
  

  submitApplication() {
    this.body = {
      id: this.body.id,
      nomeHospede: this.applyForm.value.nomeHospede ?? this.params.nomeHospede,
      dataInicio: this.applyForm.value.dataInicio ?? this.params.dataInicio,
      dataFim: this.applyForm.value.dataFim ?? this.params.dataFim,
      quantidadePessoas: this.applyForm.value.quantidadePessoas ?? Number(this.params.quantidadePessoas),
      status: this.applyForm.value.status ?? this.params.status
    }

    if(this.body.status == 'Selecione uma opção') this.body.status = this.params.status;
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
