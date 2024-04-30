import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit , AfterViewChecked, OnDestroy} from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges 
  , DoCheck , AfterContentInit , AfterContentChecked
  , AfterViewInit, AfterViewChecked, OnDestroy{


  @Input() myValue: string = "ex";

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges called ${changes['myValue'].currentValue}`);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');

  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');

  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy called');
    
  }



  // userName:any;

  // constructor(private _designServices: DesignutilityService) {
  //   this._designServices.userName.subscribe((uname: any) => {
  //     this.userName = uname;
  //   });
  // }

  // ngOnInit(): void {
  // }

  // updateUserName(uname: any) {
  //   // this.userName = uname.value
  //   this._designServices.userName.next(uname.value)
  // }



}
