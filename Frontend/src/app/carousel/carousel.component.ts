import { Component, Input } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-carousel',
  imports: [ExperienceComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() elements!: any[];
  currentElement: number = 0;

  public next(n: number = -1): number {
    if (n < 0) {
      n = this.currentElement;
    }
    if (n >= this.elements.length) {
      return 0;
    }
    return n + 1;
  }

  public previous(n: number = -1): number {
    if (n < 0) {
      n = this.currentElement;
    }
    if (n === 0) {
      return this.elements.length - 1;
    }
    return n - 1;
  }

  public getElement(n: number): any {
    return this.elements[n];
  }

  public setCurrentElement(n: number): void {
    this.currentElement = n;
  }
}
