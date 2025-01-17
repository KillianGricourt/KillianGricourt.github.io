import { Component, Input, OnInit } from '@angular/core';
import { Experience } from './experience.model';
import { ExperienceService } from '../services/experience.service';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { ImageDisplayerComponent } from '../image-displayer/image-displayer.component';

@Component({
  selector: 'app-experiences',
  imports: [CarrouselComponent, ImageDisplayerComponent],
  templateUrl: `experiences.component.html`,
  styleUrls: [`experience.component.css`],
  host: { class: 'experiences' },
})
export class ExperienceListComponent implements OnInit {
  @Input() experiences: Experience[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  defaultImage: string =
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  backgroundImage: string = '';
  currentExperience: Experience | undefined;
  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.loadExperiences();
    this.backgroundImage = this.defaultImage;
  }

  private loadExperiences(): void {
    this.experienceService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }

  onElementChange(experience: Experience): void {
    this.backgroundImage =
      experience.image !== '' ? experience.image : this.defaultImage;
    this.currentExperience = experience;
  }
}
