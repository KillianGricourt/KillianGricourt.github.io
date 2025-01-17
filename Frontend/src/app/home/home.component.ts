import { Component } from '@angular/core';
import { ImageDisplayerComponent } from '../image-displayer/image-displayer.component';

@Component({
  selector: 'app-home',
  imports: [ImageDisplayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
