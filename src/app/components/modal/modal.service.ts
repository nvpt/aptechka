import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
opened:boolean = false;
  constructor() { }

  open(){
    this.opened = true;
  }

  close(){
    this.opened = false;
  }
}
