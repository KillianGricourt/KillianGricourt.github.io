import { Component } from '@angular/core';
import { ExperienceListComponent } from '../experience/experiences.component';

@Component({
  selector: 'app-center-panel',
  imports: [ExperienceListComponent],
  templateUrl: './center-panel.component.html',
  styleUrl: './center-panel.component.css',
})
export class CenterPanelComponent {}
