import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json',
    })
};

@Injectable()
export class HomeService {
    private URL_home = '/home/dashboard';

    constructor(private http: HttpClient) {}

    getTransactionList(homeQuery):Observable<any> {
        return this.http.post(this.URL_home, homeQuery, httpOptions);
    } 
}