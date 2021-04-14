import { Component, OnInit } from '@angular/core';
import { ErrorHandlingService } from 'src/services/error-handling-service/error-handling.service';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  error: string = '';

  constructor(
    private errorHandling: ErrorHandlingService
  ) {
    this.errorHandling.error.subscribe(e => this.error = e.error);
   }

  ngOnInit(): void {
  }

}
