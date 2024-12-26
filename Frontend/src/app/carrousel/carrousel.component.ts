import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  imports: [ExperienceComponent, NgClass],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent implements AfterViewInit {
  @ViewChild('main_element', { read: ElementRef }) mainElement!: ElementRef;
  @Input() elements!: any[];
  currentElement: number = 0;
  isAnimating = false;
  isReversed = false;

  ngAfterViewInit() {
    const element = this.mainElement.nativeElement;

    element.addEventListener('animationend', () => this.onAnimationEnd());
  }

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
    this.isAnimating = true;
  }

  onLeftArrowClick() {
    this.setCurrentElement(this.previous());
    this.isAnimating = true;
    this.isReversed = true;
  }

  onAnimationEnd() {
    if (this.isAnimating && !this.isReversed) {
      this.setCurrentElement(this.next());
    }
    this.isAnimating = false;
    this.isReversed = false;
  }
}
