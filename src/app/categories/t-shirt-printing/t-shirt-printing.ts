import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-t-shirt-printing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './t-shirt-printing.html',
  styleUrls: ['./t-shirt-printing.css']
})
export class TShirtPrinting {

  selectedImage: string | null = null;

  tshirtItems = [
    {
      src: 't-shirt.jpg',
      title: 'Custom Designs',
      description: 'Print your own artwork, logos, or slogans on high-quality t-shirts.'
    },
    {
      src: 'assets/team-shirts.jpg',
      title: 'Team & Event Shirts',
      description: 'Custom t-shirts for corporate teams, sports, or school events.'
    },
    {
      src: 'assets/promotional-shirts.jpg',
      title: 'Promotional Shirts',
      description: 'High-quality prints for marketing campaigns and brand promotions.'
    },
    {
      src: 'assets/eco-tshirts.jpg',
      title: 'Eco-Friendly Shirts',
      description: 'Printed on sustainable fabrics, perfect for conscious brands and events.'
    }
  ];

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
