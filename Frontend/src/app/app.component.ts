import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceListComponent } from './experience/experiences.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Killian Gricourt';
  email = 'gricourt.killian@gmail.com';
}
