import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable()
export class HomeService {

	constructor(private http: HttpClient){

	}
	
	
		display(item: Item) {


		this.http.post('/api/item/home',{
		//	itemname : item.itemname,
		//	quantity : item.quantity
		})
		
		
		
	} 
	
}