import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from '../popup.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-custom-element-example',
  templateUrl: './custom-element-example.component.html',
  styleUrls: ['./custom-element-example.component.css']
})
export class CustomElementExampleComponent implements OnInit {

  constructor(
    public popup: PopupService,
    injector: Injector,
    ) { 
      const PopupElement = createCustomElement(PopupComponent, {injector} );
      customElements.define('popup-element', PopupElement);
    }

   
 


  ngOnInit() {

  }

}
