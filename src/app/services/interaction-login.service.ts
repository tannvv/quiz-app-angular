import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionLoginService {
  private _messLoginRepository = new Subject<string>();
  messLogin$ = this._messLoginRepository.asObservable()
  constructor() { }

  sendStateLogin(message : string):void{
    console.log('send state login', message)
    this._messLoginRepository.next(message)
  }
}
