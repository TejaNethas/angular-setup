import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:4000';
  private url2 = 'http://localhost:4001';

  // api call
  getCharacters(){return this.http.get(`${this.url}/characters`)}
  getCharacters2(){return this.http.get(`${this.url2}/characters2`)}

  getRohit(){
    return this.http.get(`${this.url}/characters`)
  }

}

