import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import {parseJson} from '@angular/cli/src/utilities/json-file';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Killian Gricourt';
  email = 'gricourt.killian@gmail.com'
  experiences = {};

}
