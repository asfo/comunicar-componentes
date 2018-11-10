import { Component, OnInit } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-first',
  template: `
    <h1>Primer componente:</h1>
    {{ message }} <br />
    <input type="text" placeholder="Introduce un nombre" [(ngModel)]="editMessage">
    <button (click)="changeMessage()">Cambiar</button>
  `
})
export class FirstComponent implements OnInit {

  message: string;
  editMessage: string;

  constructor(private helper: HelperService) { }

  ngOnInit() {
    this.helper.customMessage.subscribe(msg => this.message = msg);
  }

  changeMessage() {
    this.helper.changeMessage(this.editMessage);
  }

}
