import { Component, OnInit } from '@angular/core';
// import { MessageService } from '../appServices/message.service';
import { DesignutilityService } from '../appServices/designutility.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
 
  product = [{
    name:"mobile", id: "00213", email: 'knckxncmkz', username: 'mxcmxm'
  }]
  
  ngOnInit(): void {
    // this.products = this._msgService.product
  this._msgService.product()
  .subscribe(productData => {this.product = productData})
  }

  btnClick(){
    // const msgService = new MessageService()
    // msgService.messageAlert()
    this._msgService.messageAlert();
  }


}
