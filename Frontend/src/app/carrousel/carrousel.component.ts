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
  @ViewChild('carrousel', { read: ElementRef }) carrousel!: ElementRef;
  @Input() elements!: any[];
  currentElement: number = 0;
  isAnimating = false;
  isReversed = false;

  private touched = { x: 0, y: 0 };

  ngAfterViewInit() {
    const element = this.mainElement.nativeElement;
    const carrouselElement = this.carrousel.nativeElement;

    carrouselElement.addEventListener(
      'touchstart',
      (event: TouchEvent) =>
        (this.touched = {
          x: event.changedTouches[0].clientX,
          y: event.changedTouches[0].clientY,
        }),
    );
    carrouselElement.addEventListener('touchend', (event: TouchEvent) =>
      this.onSwipe(
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY,
      ),
    );
    element.addEventListener('animationend', () => this.onAnimationEnd());
  }

  onSwipe(x: number, y: number) {
    if (Math.abs(this.touched.x - x) < Math.abs(this.touched.y - y)) {
      return;
    }
    if (this.touched.x - x > 20) {
      this.onRightArrowClick();
    } else if (this.touched.x - x < -20) {
      this.onLeftArrowClick();
    }
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
