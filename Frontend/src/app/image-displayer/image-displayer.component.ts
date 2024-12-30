import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-image-displayer',
  imports: [NgClass],
  templateUrl: './image-displayer.component.html',
  styleUrl: './image-displayer.component.css',
})
export class ImageDisplayerComponent {
  backgroundImage1 = '';
  backgroundImage2 = '';
  showImage1 = true;

  @Input()
  set src(_url: string) {
    if (this.showImage1) {
      this.backgroundImage2 = _url;
    } else {
      this.backgroundImage1 = _url;
    }
    this.showImage1 = !this.showImage1;
  }

  get src(): string {
    return this.showImage1 ? this.backgroundImage1 : this.backgroundImage2;
  }
}
