import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http: HttpClient) { }

  messageAlert() {
    alert("Thanks for Subscribe. We will get in touch with you shortly")
  }

  product(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  //   product = [
  //   {name:"laptop", id:"i5"},
  //   {name:"mobile", id:"c3"},
  //   {name:"tv", id:"s1"},
  //   {name:"wm", id:"py"},
  // ]

  // product=[]
}
