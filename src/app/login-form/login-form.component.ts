import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/services/auth-api-service/auth-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginErrorService } from 'src/services/login-error-service/login-error-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string | null = null;
  loading: boolean = false;
  loadingImg: string = './assets/images/Preloader_8.gif';

  submitLogin(f: NgForm) {
    const user = f.value;
    this.loading = true;

    this.authService.postLogin(user)
    .subscribe((thing) => {
      if (!thing) { this.loading = false }
      else this.router.navigate(['/dashboard'])
    });
  }

  constructor(
    private authService: AuthApiService,
    private router: Router,
    private loginService: LoginErrorService
    ) {
      this.loginService.loginError.subscribe(error => this.error = error.error);
     }

  ngOnInit(): void {
  }

}
