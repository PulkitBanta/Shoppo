import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ClothesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('../../assets/main.json')
  }

}