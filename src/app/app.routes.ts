import { Routes } from '@angular/router';
import { Home} from './home/home';

export const routes: Routes = [
  { path: '', component: Home },  // default route
  { path: 'home', component: Home}, // optional, same as default
  // Add other routes here if needed, e.g. about, services, contact
];
