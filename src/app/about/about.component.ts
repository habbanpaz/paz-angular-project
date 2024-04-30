import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  value!:string;

  comp1Exist:boolean = true;

  @Input() message: any;

  constructor() { }

  
  submitValue(val:any){
    this.value = val.value
  }
  
  destroy(){
    this.comp1Exist = false
  }
  
  ngOnInit(): void {
  }

}
