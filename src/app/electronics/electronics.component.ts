import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})

export class ElectronicsComponent implements OnInit {

  constructor(private mainService: MainService) { }
  data;
  sort = 'electronics'

  ngOnInit() {
    this.data = this.mainService.getAll()
  }

  add(a) {
    this.mainService.addToCart(a)
  }

}
export var cart4 = []