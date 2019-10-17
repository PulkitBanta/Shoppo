import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // public Num = cartLen();
  constructor() { }

  ngOnInit() {
  }

}
