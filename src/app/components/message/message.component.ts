import { Component } from '@angular/core';

import { MessagesService } from 'src/app/service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(public service: MessagesService) {}

}
