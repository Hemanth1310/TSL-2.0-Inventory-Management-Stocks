import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery.model'
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Item.model'
import { Item1 } from '../models/Item1.model'
import { first } from '../models/first.model'
import { secound } from '../models/secound.model'
import { third } from '../models/third.model'
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class CommonService {
	public groceryList: Grocery[]
	public add_subject=new Subject<String>()
	num1:number;
	num2:number;
	private messageSource = new BehaviorSubject(0);
	currentMessage = this.messageSource.asObservable();
	constructor(private http: HttpClient){
		this.groceryList = []
	}

    getGrocery(){
        return this.http.post('/api/getGrocery',{
		
	})
	}
	updateGrocery(first:first){
        return this.http.post('/api/updateGrocery',{
		itemname:first.itemname,
		quantity:first.quantity
	})
	}
	updateGrocery1(secound:secound){
        return this.http.post('/api/updateGrocery',{
		itemname:secound.itemname,
		quantity:secound.quantity
	})
	}
	updateGrocery2(third:third){
        return this.http.post('/api/updateGrocery',{
		itemname:third.itemname,
		quantity:third.quantity
	})
	}
	changeMessage(num:number) {
		this.messageSource.next(num)
	  }


}