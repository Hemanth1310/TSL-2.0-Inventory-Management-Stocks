import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'
import { Grocery } from '../models/Grocery.model'
import { Item } from '../models/Item.model'
import { Item1 } from '../models/Item1.model'
import { afirst } from '../models/afirst.model'
import { asecound } from '../models/asecound.model'
import { athird } from '../models/athird.model'
import { fvar } from '../models/fvar.model'
import { svar } from '../models/svar.model'
import { tvar } from '../models/tvar.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ CommonService ]
})
export class AdminComponent implements OnInit {

  
  private groceryList:Grocery[]
  private groceryList1:Grocery[]
  private groceryList2:Grocery[]
  private item: Item
  private item1: Item1
  private afirst: afirst
  private asecound:asecound
  private athird:athird
  private fvar:fvar
  private svar:svar
  private tvar:tvar

  qua:String ="toy";
  qua1:number;
  show: boolean = false
 // count:number=2;
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
      this.afirst= new afirst();
      this.asecound= new asecound();
      this.athird= new athird();
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
       this.afirst.itemname=this. groceryList[1]['itemname']
       this.counter1=this. groceryList[1]['quantity']
       this.afirst.quantity=this. groceryList[1]['quantity']
      
      
    })

  }
 // )}
 getAllGrocery1(){
  //this.count-=1;
    this.commonService.getGrocery().subscribe(res =>{
     this.groceryList1  = res['data']
     this.countit2=this. groceryList1[2]['quantity']
     this.asecound.itemname=this. groceryList1[2]['itemname']
     this.counter2=this. groceryList1[2]['quantity']
     this.asecound.quantity=this. groceryList1[2]['quantity']
    
    
  })

}

getAllGrocery2(){
  //this.count-=1;
    this.commonService.getGrocery().subscribe(res =>{
     this.groceryList2  = res['data']
     this.countit3=this. groceryList2[0]['quantity']
     this.athird.itemname=this. groceryList2[0]['itemname']
     this.counter3=this. groceryList2[0]['quantity']
     this.athird.quantity=this. groceryList2[0]['quantity']
    
    
  })

}


updateTable(event){
  if(this.afirst.quantity==0)
  {
    alert("This Item is not available........Order Fast")
  }
  else
  {
  this.countit1-=1;
  this.ctr1+=1;
  this.fvar.counter=this.ctr1;
  this.afirst.quantity=this.countit1
  this.totalcost1=this.cost1*this.ctr1
  this.counter1-=1;
  this.bill=this.bill+this.totalcost1;
  this.buy1()
  }
}

updateTable1(event){
 if(this.asecound.quantity==0)
 {
   alert("This Item is not available........Order Fast")
 }
 else
 {
 this.countit2-=1;
 this.ctr2+=1;
 this.tvar.counter=this.ctr2;
 this.asecound.quantity=this.countit2
 this.totalcost2=this.cost2*this.ctr2
 this.counter2-=1;
 this.bill=this.bill+this.totalcost2
  this.buy2()
}
}

updateTable2(event){
 if(this.athird.quantity==0)
 {
   alert("This Item is not available........Order Fast")
 }
 else
 {
 this.countit3-=1;
 this.ctr3+=1;
 this.tvar.counter=this.ctr3;
 this.athird.quantity=this.countit3
 this.totalcost3=this.cost3*this.ctr3
 this.counter3-=1;
 this.bill=this.bill+this.totalcost3;
 this.buy3()
}
}
upd(event){
  
  this.countit1+=1;
  this.ctr1+=1;
  this.fvar.counter=this.ctr1;
  this.afirst.quantity=this.countit1
  this.totalcost1=this.cost1*this.ctr1
  this.counter1-=1;
  this.bill=this.bill+this.totalcost1;
  this.buy1()
  this.refresh()
}

upd1(event){
 
 this.countit2+=1;
 this.ctr2+=1;
 this.tvar.counter=this.ctr2;
 this.asecound.quantity=this.countit2
 
 this.counter2-=1;
 this.buy2()
 this.refresh()
}

upd2(event){
 
 this.countit3+=1;
 this.ctr3+=1;
 this.tvar.counter=this.ctr3;
 this.athird.quantity=this.countit3
 
 this.counter3-=1;
 
  this.buy3()
this.refresh()
}


buy1(){

  this.commonService.updateGrocery(this.afirst).subscribe(res =>{

   
    if(res['status'] === 'success'){

    //alert("successful buy")
   }else{
       alert("some error") 
    }
  
   }

   )
  


}





buy2(){


  this.commonService.updateGrocery1(this.asecound).subscribe(res =>{
   
  
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

  this.commonService.updateGrocery2(this.athird).subscribe(res =>{

    if(res['status'] === 'success'){
 
    //alert("successful buy")
   }else{
       alert("some error") 
    }
  
   }
 
   )
}
refresh(): void {
  window.location.reload();
}
log(){

  this.router.navigate(['/login']);
}

}
