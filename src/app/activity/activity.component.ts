import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activitiesLst:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://demo0968531.mockable.io/getActivities");
    response.subscribe((data) => this.activitiesLst = data);
  }

}
