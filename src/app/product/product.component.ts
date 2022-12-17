import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any

  constructor(service : ProductService) { 
   
    this.products = service.getProducts(); // Getting product details from the Service

    /**this.products = [
      {
        "id":1,
        "name":"watch",
        "brand":"Timex",
        "price":7000
      },
      {
      "id":2,
      "name":"watch",
      "brand":"Fossil",
      "price":10000
    }
    ]*/

  }

  ngOnInit() {
  }

}
