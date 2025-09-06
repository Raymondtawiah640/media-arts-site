import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motion-graphics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motion-graphics.html',
  styleUrls: ['./motion-graphics.css']
})
export class MotionGraphics {

  selectedImage: string | null = null;

  mediaItems = [
    {
      type: 'video',
      src: 'motion6.mp4',
      title: 'Product Promo Animation',
      description: 'A dynamic animation showcasing a product launch.'
    },
    {
      type: 'image',
      src: 'motion1.jpg',
      title: 'Branding Mockup',
      description: 'Creative branding visuals for client campaigns.'
    },
    {
      type: 'image',
      src: 'motion2.jpg',
      title: 'Social Media Design',
      description: 'Eye-catching designs for social media platforms.'
    },
    {
      type: 'video',
      src: 'motion5.mp4',
      title: 'Social Media Animation',
      description: 'Engaging visuals created for digital marketing campaigns.'
    },
    {
      type: 'video',
      src: 'motion4.mp4',
      title: 'Logo Animation',
      description: 'Animated brand logos that leave a lasting impression.'
    },
    {
      type: 'image',
      src: 'motion3.jpg',
      title: 'Event Promotion Graphic',
      description: 'Visual graphics promoting events and launches.'
    },
    {
      type: 'image',
      src: 'motion4.jpg',
      title: 'Event Promotion Graphic',
      description: 'Visual graphics promoting events and launches.'
    },
    {
      type: 'image',
      src: 'motion5.jpg',
      title: 'Event Promotion Graphic',
      description: 'Visual graphics promoting events and launches.'
    },
    {
      type: 'image',
      src: 'assets/motion7.jpg',
      title: 'Event Promotion Graphic',
      description: 'Visual graphics promoting events and launches.'
    }
  ];

  eventItems = [
  { src: 'event1.jpg', title: 'Event 1', description: 'Highlights from Event 1' },
  { src: 'event2.jpg', title: 'Event 2', description: 'Highlights from Event 2' },
  { src: 'assets/event3.jpg', title: 'Event 3', description: 'Highlights from Event 3' },
  // add more events here
];

  labelItems = [
  { src: 'label1.jpg', title: 'Label 1', description: 'Custom Label Design 1' },
  { src: 'assets/label2.jpg', title: 'Label 2', description: 'Custom Label Design 2' },
  { src: 'assets/label3.jpg', title: 'Label 3', description: 'Custom Label Design 3' },
  // Add more labels here
];

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
