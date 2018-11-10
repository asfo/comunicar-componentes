import { Component, OnInit } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-second',
  template: `
    <h1>Segundo componente:</h1>
    {{ message }}
  `
})
export class SecondComponent implements OnInit {

  message: string;
  editMessage: string;

  constructor(private helper: HelperService) {}

  ngOnInit() {
    this.helper.customMessage.subscribe(msg => this.message = msg);
  }

}
