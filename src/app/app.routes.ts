import { Routes } from '@angular/router';
import { Home} from './home/home';
import { About } from './about/about';
import { Branding } from './categories/branding/branding';
import { MotionGraphics } from './categories/motion-graphics/motion-graphics';
import { Printing } from './categories/printing/printing';
import { TShirtPrinting } from './categories/t-shirt-printing/t-shirt-printing';
import { VideoProductionAndPhotoEditing } from './categories/video-production-and-photo-editing/video-production-and-photo-editing';
import { PictureFraming } from './categories/others/picture-framing/picture-framing';
import { OnlineAdvertisement } from './categories/others/online-advertisement/online-advertisement';
import { SoundEngineering } from './categories/others/sound-engineering/sound-engineering';
import { Portfolio } from './categories/portfolio/portfolio';
import { Blog } from './categories/blog/blog';
import { Contact } from './categories/contact/contact';
import { Auth } from './auth/auth';

export const routes: Routes = [
  { path: '', component: Home },  // default route
  { path: 'home', component: Home}, 
  { path: 'about', component: About},
  {path: 'branding', component: Branding},
  {path: 'Graphics', component: MotionGraphics},
  {path: 'Printing', component: Printing},
  {path: 'T-ShirtPrinting', component: TShirtPrinting},
  {path: 'VideoProductionAndPhotoEditing', component: VideoProductionAndPhotoEditing},
  {path: 'PictureFraming', component: PictureFraming},
  {path: 'OnlineAdvertisement', component: OnlineAdvertisement},
  {path: 'SoundEngineering', component: SoundEngineering},
  {path: 'Portfolio', component: Portfolio},
  {path: 'Blog', component: Blog},
  {path: 'Contact', component: Contact},
  {path: 'auth', component: Auth},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];
