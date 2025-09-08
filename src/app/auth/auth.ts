import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class Auth {
  activeTab: 'login' | 'signup' = 'login';

  loginEmail = '';
  loginPassword = '';
  signupUsername = '';
  signupEmail = '';
  signupPassword = '';

  private baseUrl = 'https://207.180.192.46/'; // replace with your PHP server

  constructor(private http: HttpClient) {}

  selectTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }

  onLogin() {
    const body = new HttpParams()
      .set('email', this.loginEmail)
      .set('password', this.loginPassword);
    
    this.http.post(`${this.baseUrl}login.php`, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe({
      next: res => console.log('Login success', res),
      error: err => console.error('Login error', err)
    });
  }

  onSignup() {
    const body = new HttpParams()
      .set('username', this.signupUsername)
      .set('email', this.signupEmail)
      .set('password', this.signupPassword);

    this.http.post(`${this.baseUrl}signup.php`, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe({
      next: res => console.log('Signup success', res),
      error: err => console.error('Signup error', err)
    });
  }
}
