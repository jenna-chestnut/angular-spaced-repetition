import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/services/auth-api-service/auth-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string | null = null;

  submitLogin(f: NgForm) {
    const user = f.value;
    this.authService.postLogin(user)
    .subscribe(() => {
      this.router.navigate(['/dashboard'])
    });
  }

  constructor(
    private authService: AuthApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
