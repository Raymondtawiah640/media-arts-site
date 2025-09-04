import { Routes } from '@angular/router';
import { Home} from './home/home';

export const routes: Routes = [
  { path: '', component: Home },  // default route
  { path: 'home', component: Home}, 
  { path: '**', redirectTo: '', pathMatch: 'full' }
// optional, same as default
  // Add other routes here if needed, e.g. about, services, contact
];
