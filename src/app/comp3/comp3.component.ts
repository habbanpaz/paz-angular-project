import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName:any;

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe((uname: any) => {
      this.userName = uname;
    });
  }

  ngOnInit(): void {
  }

  updateUserName(uname: any) {
    // this.userName = uname.value
    this._designServices.userName.next(uname.value)
  }

}
