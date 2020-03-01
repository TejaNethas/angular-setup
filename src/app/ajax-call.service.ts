import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxCallService {

  public empData = 'https://reqres.in/api/unknown';
  
  constructor(
    private ajaxHttp : HttpClient
  ) { }

  dummyEmpData(){
    return this.ajaxHttp.get(this.empData);
  }
}
