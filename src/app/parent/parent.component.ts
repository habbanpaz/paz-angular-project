import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  constructor() {

   }
  
  ngOnInit(): void {
  }

  selProduct: any;
  proSelected:boolean = false
  addedProduct:any;

  onSelectProduct(product: string ){
    this.proSelected = true;
    this.selProduct = product;
  }

  onAddedProduct(proData:string){
    this.addedProduct = proData

  }




}
