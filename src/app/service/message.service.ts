import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  title : string = ''
  message: string = ''

  constructor() { }

  add(message: string, title : string = '') {
    this.title = title
    this.message = message

    setTimeout(() => {
      this.clear()
    }, 5000)
  }

  clear() {
    this.title = ''
    this.message = ''
  }
}
