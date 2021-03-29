import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/services/auth-api-service/auth-api.service';
import { TokenService } from '../../services/token-service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Ehl';
  hasToken: boolean = this.tokenService.hasAuthToken();
  username = this.authService.username ? this.authService.username : null;

  handleLogoutClick(): void {
    this.tokenService.clearAuthToken()
  }

  constructor(
    private tokenService: TokenService,
    private authService: AuthApiService
    ) {
      this.authService.getLoggedInName.subscribe(name => this.username = name);
      this.tokenService.hasToken.subscribe(token => this.hasToken = token);
    }

  ngOnInit(): void {
  }
}
