import { Component, OnInit } from '@angular/core';
import { CustomElementExampleComponent } from '../custom-element-example/custom-element-example.component'
import { ConfigService } from '../config.service';
import { Observable, of } from 'rxjs';
import { AjaxCallService } from '../ajax-call.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  smartData: any = [];
  smartDataRohit: any =[];
  funData: any =[];
  mainData = [];
  dummyEmpDataAjacCall: any = [];
  arrFrom:any;

  public dataBoolean:boolean 
  public dataEmpBoolean:boolean 
  constructor(
    private conigApi : ConfigService,
    private ajaxApi : AjaxCallService
  ) { }

  ngOnInit() {

    this.conigApi.getCharacters().subscribe((data: any[])=>{
      this.smartData = data;
      
    }) 

    this.conigApi.getRohit().subscribe((data: any[])=>{
      this.smartDataRohit = data;
      
    }) 

  }

getDummyEmpDataAjax(){
  this.ajaxApi.dummyEmpData().subscribe(response =>{
  // this.dataEmpBoolean = this.showDatatable(this.dummyEmpDataAjacCall);
    console.log(this.dataEmpBoolean);
    this.dummyEmpDataAjacCall = response;
    console.log(this.dummyEmpDataAjacCall.data);
  })
}

  
  showDatatable(i){ return ((i.length) ? true : false)}

  getSmartphones() {
    this.conigApi.getCharacters2().subscribe(response => {
     this.dataBoolean = this.showDatatable(response);
        console.log(this.dataBoolean);
        this.funData = response;
        console.log(this.funData);
        //this.mainData = response.statusMessage;
        // if(this.funData){
        //   this.funData = response;
        //   this.dataBoolean = true;
        //   console.log(this.funData);
        // }
        // else{
        //   this.dataBoolean = false;
        // }

        // for (const d of (data as any)) {
        //   this.smartphone.push({
        //     id:d.id,
        //     name: d.name,
        //     age: d.age
        //   });
        // }
       
      });
  }

}

