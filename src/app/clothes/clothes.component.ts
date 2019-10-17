import { Component } from '@angular/core';
import { clothes_data } from '../clothes';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent{

  cloth = clothes_data;
  
}
