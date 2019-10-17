import { Component, OnInit } from '@angular/core';
import { DailyNeedsService } from './daily-needs.service';
import { HttpClient } from '@angular/common/http';

var x;

@Component({
  selector: 'app-daily-needs',
  templateUrl: './daily-needs.component.html',
  styleUrls: ['./daily-needs.component.css']
})



export class DailyNeedsComponent implements OnInit{

  constructor(private http: HttpClient) {}

  navItems: any;

  ngOnInit(){
    // this.navItems = this.http.get("http://localhost:3001/assets/main.json")
    x = this.http.get('http://localhost:3001/assets/main.json');
    console.log(x)
    console.log(JSON.stringify(x.source.value))
  }

  // showConfig() {
  //   this.dailyNeedsService.getConfig()
  //     .subscribe((data: JSON) => {
  //       title = data.dailyNeeds[0].title;
  //     });
  // }

}