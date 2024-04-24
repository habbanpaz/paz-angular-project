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

  selectedProduct: any;
  productSelected:boolean = true
  addedProduct:any;

  onSelectProduct(product: string ){
    this.productSelected = true;
    this.selectedProduct = product;
  }



}
