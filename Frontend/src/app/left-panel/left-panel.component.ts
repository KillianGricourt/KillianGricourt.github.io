import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-left-panel',
  imports: [MenuComponent],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css',
})
export class LeftPanelComponent {
  title = 'Killian Gricourt';
  urlCV = 'https://killiangricourt-github-io.onrender.com/cv';
  stopInterval: (() => void) | undefined = undefined;

  constructor(private downloadService: DownloadService) {}

  downloadCV() {
    this.downloadService.download(this.urlCV, 'Killian_Gricourt_CV.pdf');
  }

  throwColor(event: MouseEvent) {
    const button = event.target as HTMLElement;
    if (this.stopInterval != undefined) {
      return;
    }

    let interval = setInterval(() => {
      this.stopInterval = undefined;
    }, 50);

    const particle = document.createElement('span');
    const x = event.clientX - button.getBoundingClientRect().left;
    const y = event.clientY - button.getBoundingClientRect().top;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const dx = (Math.random() - 0.5) * 100;
    const dy = (Math.random() - 0.5) * 100;
    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--dy', `${dy}px`);

    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '1';
    particle.style.animation = 'explosion 0.5s forwards';

    this.addAnimationToParticle(particle);
    button.appendChild(particle);

    console.log('particule created');

    setTimeout(() => {
      particle.remove();
    }, 1000);

    this.stopInterval = () => {
      clearInterval(interval);
    };
  }

  private addAnimationToParticle(particle: HTMLElement) {
    const animationId = `explosion`;
    const styleSheet = document.createElement('style');

    styleSheet.innerText = `
      @keyframes ${animationId} {
        0% {
          opacity: 1;
          transform: translate(0, 0);
        }
        100% {
          opacity: 0;
          transform: translate(var(--dx), var(--dy));
        }
      }
    `;

    document.head.appendChild(styleSheet);
    particle.style.animation = `${animationId} 0.5s forwards`;
  }
}
