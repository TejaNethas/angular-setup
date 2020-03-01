import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debounce-concept',
  templateUrl: './debounce-concept.component.html',
  styleUrls: ['./debounce-concept.component.css']
})
export class DebounceConceptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public counter = 0;
  searchQurey = () => {
    console.log("featching search", this.counter++);
  }
  dobounceFun = function(fn, d){
    let timer;
    return function(){
      let context = this,
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.searchQurey.apply(context, arguments);
      }, d);
    }
  }
  
betterFun = this.dobounceFun(this.searchQurey, 300);

}

