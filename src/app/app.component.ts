import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/services/auth-api-service/auth-api.service';
import { IdleService } from 'src/services/idle-service/idle.service';
import { TokenService } from 'src/services/token-service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ehl';

  fetchRefreshToken(): void {
    this.authService.refreshToken()
      .subscribe(res => {
        this.tokenService.saveAuthToken(res.authToken)
        this.tokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
  }

  sendToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  constructor(
    private tokenService: TokenService,
    private idleService: IdleService,
    private authService: AuthApiService,
    private router: Router
    ) {

    idleService.setIdleCallback(() => {
      tokenService.clearAuthToken()
      tokenService.clearCallbackBeforeExpiry()
      idleService.unRegisterIdleResets()
      this.sendToLoginPage();
    });

    if (tokenService.hasAuthToken()) {
      let user = tokenService.parseAuthToken();
      let now = Math.floor(new Date().getTime() / 1000);
      if (user.exp < now) this.sendToLoginPage();

      idleService.registerIdleTimerResets()
      tokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken()
        })
    }
  }
}
