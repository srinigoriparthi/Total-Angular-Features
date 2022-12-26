import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  
  title:string = "Angular Title";
  special:string = "special";
  pecial:string = "pecial";
  currentDate:Date =  new Date();
  normalDate:string =  new Date().toLocaleDateString();
  normalTime:string =  new Date().toLocaleTimeString();

  timeId  = setInterval(() => {
    this.normalTime=new Date().toLocaleTimeString();
  },1000)
 
}
