import { Component } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})

export class ClothesComponent {

  constructor(private mainService: MainService) { }
  data;
  sort = 'clothes'

  ngOnInit() {
    this.data = this.mainService.getAll()
  }

  add(a) {
    this.mainService.addToCart(a)
  }
}