import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent {
  //public item : Item;
  //constructor(private HomeService: HomeService, private router: Router) {
   // this.item = new Item();
}


  

