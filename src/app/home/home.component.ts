import { Component, ElementRef, OnInit, AfterViewInit , ViewChild, Renderer2 } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
// import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit {

  // constructor(private _designServices: DesignutilityService) {
  //   this._designServices.userName.subscribe((uname: any) => {
  //     this.userName = uname;
  //   });
  // }
  // updateUserName(uname: any) {
  //   // this.userName = uname.value
  //   this._designServices.userName.next(uname.value)
  // }

  userName: any = 'anup';
  
  @ViewChild('box') box:ElementRef | any;

  @ViewChild(Comp2Component) child: Comp2Component | any;
  constructor(private renderer:Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // view child method:
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor='blue'

    // renderer 2 method:
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green')
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white')
  }

}
