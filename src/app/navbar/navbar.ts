import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [NgIf, RouterLink]
})
export class Navbar {
  toggle = false;        // Mobile menu toggle
  servicesOpen = false;  // Dropdown toggle

  constructor(private router: Router) {}

  closeMenu() {
    this.toggle = false;
    this.servicesOpen = false;
  }

  auth(event: Event, path?: string) {
    event.preventDefault();
    const isLoggedIn = !!localStorage.getItem('token');

    if (isLoggedIn && path) {
      this.router.navigate([path]);
      this.closeMenu();
    } else if (!isLoggedIn) {
      alert('You must log in first!');
      this.router.navigate(['/auth']); // ✅ Correct route from your config
      this.closeMenu();
    }
  }
}
