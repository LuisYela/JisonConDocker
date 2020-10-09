import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import{ entrada } from '../models/entrada'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const address2 = 'http://35.232.2.115:8080/';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private http: HttpClient) { }

  getSaludo(): Observable<any>{
    return this.http.get<any>(address2+'saludo',httpOptions);
  }

  PostRequest(texto:entrada): Observable<any> {
    return this.http.post<any>(address2 + 'analizar', texto , httpOptions);
  }
}
