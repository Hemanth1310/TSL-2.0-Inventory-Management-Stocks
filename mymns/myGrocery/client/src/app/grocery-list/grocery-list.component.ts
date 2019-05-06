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
import { Router } from '@angular/router';
@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
  providers: [ CommonService ]
})
export class GroceryListComponent implements OnInit {

  private groceryList:Grocery[]
  private groceryList1:Grocery[]
  private groceryList2:Grocery[]
  private item: Item
  private item1: Item1
  private first: first
  private secound:secound
  private third:third
  private fvar:fvar
  private svar:svar
  private tvar:tvar

  qua:String ="toy";
  qua1:number;
  show: boolean = false
  count:number=2;
  countit1:number;
  counter1:number=10;
  counter2:number=10;
  counter3:number=10;
  countit3:number;
  countit2:number;
  ctr1:number=0;
  ctr2:number=0;
  ctr3:number=0;
  cost1:number=50;
  totalcost1:number;
  cost2:number=50;
  totalcost2:number;
  cost3:number=50;
  totalcost3:number;
  bill:number=0;
  itemListResponse:Array<String>;
    constructor(private commonService:CommonService, private router: Router){
      this.item = new Item();
      this.item1= new Item1();
      this.first= new first();
      this.secound= new secound();
      this.third= new third();
      this.fvar= new fvar();
     this.svar= new svar();
     this.tvar= new tvar();
    }

    ngOnInit(){

      this.getAllGrocery()
      this.getAllGrocery1()
      this.getAllGrocery2()
     // this.commonService.add_subject.subscribe(response => {
       //   this.getAllGrocery()
      //})

  }

  getAllGrocery(){
    //this.count-=1;
      this.commonService.getGrocery().subscribe(res =>{
       this.groceryList  = res['data']
       this.countit1=this. groceryList[1]['quantity']
       this.first.itemname=this. groceryList[1]['itemname']
       this.counter1=this. groceryList[1]['quantity']
       this.first.quantity=this. groceryList[1]['quantity']
      
      
    })

  }
 // )}
 getAllGrocery1(){
  //this.count-=1;
    this.commonService.getGrocery().subscribe(res =>{
     this.groceryList1  = res['data']
     this.countit2=this. groceryList1[2]['quantity']
     this.secound.itemname=this. groceryList1[2]['itemname']
     this.counter2=this. groceryList1[2]['quantity']
     this.secound.quantity=this. groceryList1[2]['quantity']
    
    
  })

}

getAllGrocery2(){
  //this.count-=1;
    this.commonService.getGrocery().subscribe(res =>{
     this.groceryList2  = res['data']
     this.countit3=this. groceryList2[0]['quantity']
     this.third.itemname=this. groceryList2[0]['itemname']
     this.counter3=this. groceryList2[0]['quantity']
     this.third.quantity=this. groceryList2[0]['quantity']
    
    
  })

}


  updateTable(event){
   if(this.first.quantity==0)
   {
     alert("Sorry for inconvience .....this Item is not available")
   }
   else
   {
   this.countit1-=1;
   this.ctr1+=1;
   this.fvar.counter=this.ctr1;
   this.first.quantity=this.countit1
   this.totalcost1=this.cost1*this.ctr1
   this.counter1-=1;
   this.bill=this.bill+this.cost1;
   }
}

updateTable1(event){
  if(this.secound.quantity==0)
  {
    alert("Sorry for inconvience .....this Item is not available")
  }
  else
  {
  this.countit2-=1;
  this.ctr2+=1;
  this.svar.counter=this.ctr2;
  this.secound.quantity=this.countit2
  this.totalcost2=this.cost2*this.ctr2
  this.counter2-=1;
  this.bill=this.bill+this.cost2
}
}

updateTable2(event){
  if(this.third.quantity==0)
  {
    alert("Sorry for inconvience .....this Item is not available")
  }
  else
  {
  this.countit3-=1;
  this.ctr3+=1;
  this.tvar.counter=this.ctr3;
  this.third.quantity=this.countit3
  this.totalcost3=this.cost3*this.ctr3
  this.counter3-=1;
  this.bill=this.bill+this.cost3;
 
}
}

buy(event){

  this.buy1()
  this.buy2()
  this.buy3()
  alert("Thanks FOR Shoping with US!!!! BILL AMOUNT ="+this.bill+"" )
}

buy1(){

  this.commonService.updateGrocery(this.first).subscribe(res =>{

   
    if(res['status'] === 'success'){

    //alert("successful buy")
   }else{
       alert("some error") 
    }
  
   }

   )
  


}





buy2(){


  this.commonService.updateGrocery1(this.secound).subscribe(res =>{
   
  
   if(res['status'] === 'success'){
//
   //alert("successful buy")
  }else{
      alert("some error") 
   }
 
  }

  )
 
}

buy3(){

  this.commonService.updateGrocery2(this.third).subscribe(res =>{

    if(res['status'] === 'success'){
 
    //alert("successful buy")
   }else{
       alert("some error") 
    }
  
   }
 
   )
}

log(){

  this.router.navigate(['/login']);
}


}
