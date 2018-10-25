import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../config/config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  isAuth() {
    return (localStorage.getItem('X-AUTH-TOKEN')) ? true : false;
  }

  login(username: string, password: string): Observable<any> {
    const url = BASE_URL + 'login';
    // tslint:disable-next-line:prefer-const
    const params = {email: username, password: password, intentos: 0};
    return this.http.post(url, params, {headers: this.headers} );
  }

  logout() {
    localStorage.removeItem('X-AUTH-TOKEN');
    this.router.navigate(['/login']);
  }
}
