import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginToken: Object = {};
  userEmail = new BehaviorSubject("");

  constructor(
    public loginService: LoginService,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginService.isLoginPage.next(true)
  }

  ngOnDestroy(){
    this.loginService.isLoginPage.next(false)
  }

  loginUser(event: any){
    const target = event.target;
    const userName = target.querySelector('#userName').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    this.auth.getUserDetails(userName, email, password).subscribe(data => {
      const res: any = data;
      if(data.hasOwnProperty('token')){
        this.userEmail.next(email);
        localStorage.setItem('accountId', res.id)
        this.router.navigate(['/board'])
        return;
      }
      window.alert('Incorrect username or password')
    })
    
    }

}
