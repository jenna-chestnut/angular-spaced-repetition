import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token-service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Ehl';
  hasToken: boolean = this.tokenService.hasAuthToken();

  handleLogoutClick(): void {
    this.tokenService.clearAuthToken()
  }

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }
}
