import { Component } from '@angular/core';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';

@Component({
  selector: 'app-root',
  imports: [LeftPanelComponent, CenterPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  email = 'gricourt.killian@gmail.com';
  linkedin = 'https://www.linkedin.com/in/killian-gricourt-596021164';
}
