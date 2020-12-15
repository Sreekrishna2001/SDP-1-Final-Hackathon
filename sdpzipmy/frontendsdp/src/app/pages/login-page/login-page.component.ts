import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  logstat=false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.adminstatus=false;
  }

  onLoginButtonClicked(email: string, password: string) {
    this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res)
      localStorage.setItem('user',JSON.stringify(res.body));

      if (res.status === 200) {
        // we have logged in successfully
        localStorage.setItem('adminstatus',res.body.adminstatus);
        this.logstat=true;
        this.router.navigate(['/home']);
      }

    }, (err)=>{alert('Email or Password are invalid')});
    // if(this.logstat==false){alert()}

     
    console.log(this.logstat)
  }

}
