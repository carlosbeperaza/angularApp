import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '1',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  });

  constructor(
    public http: HttpClient
  ) { }

  login(username: string, password: string) {
    const url = BASE_URL + 'api/login';
    // tslint:disable-next-line:prefer-const
    const params = {username: username, password: password, intentos: 0};
    return this.http.post(url, params, {headers: this.headers} );
  }
}
