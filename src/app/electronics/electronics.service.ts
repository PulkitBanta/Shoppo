import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ElectronicsService {

  constructor(private http: HttpClient) { }

  data: any

  getAll() {
    this.http.get('../../assets/main.json')
      .subscribe(
        (data) => {
          this.data = data;
        }
      );
    return this.data
  }

}