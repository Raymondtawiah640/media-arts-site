import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-online-advertisement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-advertisement.html',
  styleUrls: ['./online-advertisement.css']
})
export class OnlineAdvertisement {
  selectedImage: string | null = null;

  // Add as many images as you like here
  adImages = [
    'online1.jpg',
    'assets/ad1.jpg',
    'assets/ad2.jpg',
    'assets/ad3.jpg'
  ];

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
