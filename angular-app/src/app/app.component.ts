import {Component} from '@angular/core';
import {TitleBarComponent} from './components/title-bar/title-bar.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    TitleBarComponent,
    RouterOutlet,
    RouterLink
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {

}
