import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  products : any

  user : User = {
    "id":100,
    "name":"Srini",
    "email":"srini.goriparthi@gmail.com",
    "mobile":3022876058

  }

  constructor(service : ProductService){ 
    this.products = service.getProducts(); // Getting product details from the Service
  }
  ngOnInit() { 
    
  }



}
