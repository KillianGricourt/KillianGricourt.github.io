import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Killian Gricourt';
}
