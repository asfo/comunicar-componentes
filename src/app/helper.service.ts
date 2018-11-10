/**
* helper.service.ts
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class HelperService {
  /**
  * Sharing the message between components
  * @var {Object} message
  */
  private message = new BehaviorSubject<string>('En espera de un nombre');
  /**
  * The custom message to set
  * @var {string} customMessage
  */
  public customMessage = this.message.asObservable();
  constructor() { }
  /**
  * Change the message between components
  * @function changeMessage
  * @param {string} msg
  * @return {void}
  */
  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
}
