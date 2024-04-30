import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

    //   product = [
  //   {name:"laptop", id:"i5"},
  //   {name:"mobile", id:"c3"},
  //   {name:"tv", id:"s1"},
  //   {name:"wm", id:"py"},
  // ]

  // product=[]


  // userName = new Subject<any>()
    userName = new BehaviorSubject('John')
  constructor(private http: HttpClient) { }

  messageAlert() {
    alert("Thanks for Subscribe. We will get in touch with you shortly")
  }

  product(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }



}
