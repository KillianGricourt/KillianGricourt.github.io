import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent
  implements AfterViewInit, OnChanges, AfterViewChecked
{
  @Input() experience!: Experience;
  @Input() maxHeight: number = 300;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef, // Injecter ChangeDetectorRef pour forcer la détection des changements
  ) {}

  ngAfterViewInit(): void {
    this.adjustContentSize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['firstChange']) {
      this.adjustContentSize();
    }
  }

  ngAfterViewChecked(): void {
    // Si l'élément a changé et que le contenu est prêt, ajuster la taille de la police
    this.adjustContentSize();
  }

  public adjustContentSize(): void {
    const element = this.el.nativeElement;
    const contentElement = element.children[0]; // Assurez-vous qu'il y a bien un enfant

    if (!contentElement) {
      return; // Si l'élément enfant n'existe pas, on ne fait rien
    }

    let scale = 16; // Taille de police initiale

    this.renderer.setStyle(contentElement, 'font-size', `${scale}px`);
    // Ajuster la taille de la police jusqu'à ce que le contenu rentre dans la hauteur maximale
    while (contentElement.scrollHeight > this.maxHeight && scale > 10) {
      scale -= 1;
      this.renderer.setStyle(contentElement, 'font-size', `${scale}px`);
    }

    // Forcer Angular à détecter les changements après l'ajustement de la taille de la police
    this.cdr.detectChanges();

    // Log pour le débogage
    console.log(
      contentElement,
      contentElement.scrollHeight,
      this.maxHeight,
      scale,
    );
  }
}
