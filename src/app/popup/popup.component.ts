import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  private state: 'opened' | 'closed' = 'closed';
  public _message:string;

  @Input() set message(message : string){
    this._message = message;
    this.state = 'opened';
  }

  get message():string { return this._message;}
  
  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}


