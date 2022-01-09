import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(name: string, email: string, password: string){
    return this.http.post('http://localhost:3000/login', {
      name,
      email,
      password,
    })
    //HTTP return user info
  }

  getRegisteredUser(name: string, email: string, password: string, role: string){
    return this.http.post('http://localhost:3000/registration', {
      name,
      email,
      password,
      role
    })
  }
}
