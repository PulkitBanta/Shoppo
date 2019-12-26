import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})

export class ElectronicsComponent implements OnInit {

  constructor(private mainService: MainService) { }
  data;

  ngOnInit() {
    this.data = this.mainService.getAll()
  }

  add(a) {
    this.mainService.addToCart(a)
  }

}
export var cart4 = []