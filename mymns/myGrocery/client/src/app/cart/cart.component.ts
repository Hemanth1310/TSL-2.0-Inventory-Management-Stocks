import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'
import { Grocery } from '../models/Grocery.model'
import { Item } from '../models/Item.model'
import { Item1 } from '../models/Item1.model'
import { first } from '../models/first.model'
import { secound } from '../models/secound.model'
import { third } from '../models/third.model'
import { fvar } from '../models/fvar.model'
import { svar } from '../models/svar.model'
import { tvar } from '../models/tvar.model'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ CommonService ]
})
export class CartComponent implements OnInit {

  private first: first
  private secound:secound
  private third:third
  
  
  num1:number
  num2:number
  num3:number


  constructor(private commonService:CommonService ) { 
    this.first= new first();
    this.secound= new secound();
    this.third= new third();
   
  }


  

  ngOnInit() {
    this.commonService.currentMessage.subscribe(message => this.num2 = message)
    //this.svar.counter.subscribe(message => this.num2 = message)
    //this.tvar.counter.subscribe(message => this.num3 = message)
  }

 
}
