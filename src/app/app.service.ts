import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class MainService implements OnInit{

    constructor(private http: HttpClient) {}

    public data: any = []
    // public Maindata

    ngOnInit() {
    this.http.get('./assets/main.json')
      .subscribe(
        (data) => {
          this.data = data;
          console.log(this.data)
        }
      );
  }

  getAll(){
      return this.data
  }

}