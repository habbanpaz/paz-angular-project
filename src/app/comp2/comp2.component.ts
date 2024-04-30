import { Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName:any;

  // constructor(private _designServices: DesignutilityService) {
  //   this._designServices.userName.subscribe((uname: any) => {
  //     this.userName = uname;
  //   });
  // }
  
  // ngOnInit(): void {
  // }

  // updateUserName(uname: any) {
  //   this._designServices.userName.next(uname.value)
  // }

  @ContentChild('childCon') childparagraph: ElementRef | any

  constructor (private renderer:Renderer2){

  }

  ngOnInit(): void {
  }

  clickMe(){
    var text = this.renderer.createText('this text is created by render')
  this.renderer.appendChild(this.childparagraph.nativeElement , text)
  }

  ngAfterContentInit(){
    console.log(this.childparagraph);
    this.renderer.setStyle(this.childparagraph.nativeElement, 'color', 'red')
    
  }


}
