import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restclient',
  templateUrl: './restclient.component.html',
  styleUrls: ['./restclient.component.css']
})
export class RestclientComponent implements OnInit {

  restinfoList:any

  constructor(private http:HttpClient) { }
  

  ngOnInit() {
    let response = this.http.get("https://jsonplaceholder.typicode.com/users");
    //response.subscribe((data) => console.log(data))
    response.subscribe((data) => this.restinfoList=data)  // Rendering data to UI through the variable #restinfoList
    
  }

}
