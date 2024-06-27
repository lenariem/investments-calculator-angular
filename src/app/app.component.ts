import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
