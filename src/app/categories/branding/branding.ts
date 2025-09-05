import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branding.html',
  styleUrls: ['./branding.css']
})
export class Branding {

  selectedImage: string | null = null;

  brandingItems = [
    {
      src: 'brand1.jpg',
      title: 'Logo Design',
      description: 'Creative branding for a tech startup.'
    },
    {
      src: 'brand2.jpg',
      title: 'Poster Campaign',
      description: 'Eye-catching promotional materials for an event.'
    },
    {
      src: 'brand3.jpg',
      title: 'Brand Identity',
      description: 'Complete visual identity for a small business.'
    },
    {
      src: 'assets/branding-project4.jpg',
      title: 'Social Media Graphics',
      description: 'Creative assets for digital marketing campaigns.'
    }
  ];

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
