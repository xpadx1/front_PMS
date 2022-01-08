import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginSample = "Arsenii"
  pswSample = 1234

  constructor(
    public loginService: LoginService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe(res => console.log(res))
    this.loginService.isLoginPage.next(true)
  }

  ngOnDestroy(){
    this.loginService.isLoginPage.next(false)
  }

}
