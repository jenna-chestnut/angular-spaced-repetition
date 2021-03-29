import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApiService } from 'src/services/auth-api-service/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor () {};

  ngOnInit(): void {
  }

}
