import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookInfoList:any

  // constructor(private http:HttpClient) { }
  // ngOnInit() {
  //   let response = this.http.get("http://localhost:8080/getAllBooks");
  //   //response.subscribe((data) => console.log(data))
  //   response.subscribe((data) => this.bookInfoList=data)  // Rendering data to UI through the variable #bookInfoList    
  // }

  //By Injecting Service
  constructor(private service:BookService) { }
  ngOnInit(){
    this.service.getBooks().subscribe(data => this.bookInfoList=data)
  }

}
