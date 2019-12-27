import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-daily-needs',
  templateUrl: './daily-needs.component.html',
  styleUrls: ['./daily-needs.component.css']
})

export class DailyNeedsComponent implements OnInit {

  constructor(private mainService: MainService) { }
  data;
  sort = 'dailyNeeds'

  ngOnInit() {
    this.data = this.mainService.getAll()
  }

  add(a){
    this.mainService.addToCart(a)
  }

}
export var cart2 = []