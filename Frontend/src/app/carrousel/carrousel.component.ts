import { Component, Input } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-carrousel',
  imports: [ExperienceComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent {
  @Input() elements!: any[];
  currentElement: number = 0;

  public next(n: number = -1): number {
    if (n < 0) {
      n = this.currentElement;
    }
    if (n < this.elements.length - 1) {
      return n + 1;
    }
    return 0;
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

  onRightArrowClick() {
    this.setCurrentElement(this.next());
  }

  onLeftArrowClick() {
    this.setCurrentElement(this.previous());
  }
}
