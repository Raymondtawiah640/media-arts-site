import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  quickLinksOpen = false;
  servicesFooterOpen = false;
  contactOpen = false;

  currentYear = new Date().getFullYear(); 
}
