import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return [
      {
        "id":1,
        "name":"watch",
        "brand":"Timex",
        "price":6000
      },
      {
      "id":2,
      "name":"Shoe",
      "brand":"Nike",
      "price":8000
    }
    ];
  }
}
