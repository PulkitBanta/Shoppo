import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class DailyNeedsService {
    constructor(private http: HttpClient) { }

    dailyUrl = '../../assets/main.json';

    getConfig() {
        return this.http.get(this.dailyUrl);
    }
}



