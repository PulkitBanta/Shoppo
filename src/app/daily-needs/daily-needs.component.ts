import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-daily-needs',
  templateUrl: './daily-needs.component.html',
  styleUrls: ['./daily-needs.component.css']
})

export class DailyNeedsComponent implements OnInit {

  constructor(private mainService: MainService) { }
  products;
  sort = 'dailyNeeds'

  ngOnInit() {
    this.products = this.mainService.getAll()
  }

  add(product) {
    this.mainService.addToCart(product)
  }
}