import { Component } from '@angular/core';
import { AuthServiceService } from './service/authService/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = false;

  constructor(private authService: AuthServiceService) {
  }

  ngOnInit() {
    this.authService.refreshAuthStatus();
    this.authService.authStatus$.subscribe((status) => {
      this.isAuthenticated = status;
    });

  }
}
