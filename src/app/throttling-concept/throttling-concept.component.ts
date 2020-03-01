import { Component, OnInit, NgZone } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-throttling-concept',
  templateUrl: './throttling-concept.component.html',
  styleUrls: ['./throttling-concept.component.css']
 
})
export class ThrottlingConceptComponent implements OnInit {

 

  ngOnInit() {
    
  }

  constructor(private ngZone: NgZone) {
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            console.log(window.innerWidth);
            console.log(window.innerHeight);
              console.count('Resize the browser');
              this.betterLoggerFunction();
        });
    };
}

loggerFunc = () => {
  console.count("Throttled Function");
}

throttle = (fn, limit) => {
let flag =true;
return function(){
  let context = this;
  let args = arguments;
  if(flag){
    fn.apply(context, args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, limit)
  }
}
}

betterLoggerFunction = this.throttle(this.loggerFunc, 1000)
 

}
