import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
<<<<<<< HEAD
    this.authService.adminstatus=false;
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
  }

  onLoginButtonClicked(email: string, password: string) {
    this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        // we have logged in successfully
<<<<<<< HEAD
<<<<<<< HEAD
        localStorage.setItem('adminstatus',res.body.adminstatus);
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
        this.router.navigate(['/lists']);
      }
      console.log(res);
      
    });
  }

}
