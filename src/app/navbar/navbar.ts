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
    
  }
}
