import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userType = false;
  userRole = ''

  constructor(
    private loginService: LoginService,
    private auth: AuthService,
    private loginComponent: LoginPageComponent,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginService.isLoginPage.next(true)
  }

  ngOnDestroy(){
    this.loginService.isLoginPage.next(false)
  }

  registerUser(event: any){
    const target = event.target;
    const userName = target.querySelector('#userName').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const passwordRep = target.querySelector('#passwordRep').value
    const role = this.userRole;

    if(password != passwordRep){
      window.alert('The password does not match')
      return;
    }

    this.auth.getRegisteredUser(userName, email, password, role).subscribe(data => {
      if(data.hasOwnProperty('email')){
        this.loginComponent.userEmail.next(email);
        this.router.navigate(['/board'])
        return;
      }
      window.alert('Incorrect data')
    })
  }

  setUserType(){
    this.userType = !this.userType;
    if (this.userType) {
      this.userRole = 'TEAMLEAD';
      return;
    }
    this.userRole = 'EXECUTOR';
  }

}
