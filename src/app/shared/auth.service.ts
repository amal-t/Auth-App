import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Login, Register, Login_Response } from '../shared/auth.model';
const baseUrl = `http://technical.test.prvak.co.in/api/`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  __login(user: Login) {
    return this.http.post<any>(`${baseUrl}login`, user);
  }

  __logout(){
    return this.http.post<any>(`${baseUrl}logout`,{
      username:localStorage.getItem('accesskey'),authkey:localStorage.getItem('username')
    } );

  }

  __Register(register: Register) {
    console.log(register);
    return this.http.post(`${baseUrl}employeeregister`, register);
  }

  get accessKey(){
    return localStorage.getItem('accesskey')
  }
}
