import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:8000/api/'

  constructor( public http: HttpClient ) { }

  httpHeaders: any = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

  public register(form): Observable<any> {
    return this.http.post(this.apiUrl + 'register',  form, this.httpHeaders);
  }

  public login(form): Observable<any> {
    return this.http.post(this.apiUrl + 'login',  form, this.httpHeaders);
  }

  public createRepublic(form): Observable<any> {
    this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
    console.log(this.httpHeaders);

    return this.http.post(this.apiUrl + 'createRepublic',  form, this.httpHeaders);
  }

}
