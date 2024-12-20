import { Component, Input, OnInit } from '@angular/core';
import { Experience } from './experience.model';
import { ExperienceService } from '../services/experience.service';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-experiences',
  imports: [CarouselComponent],
  templateUrl: `experiences.component.html`,
  styleUrls: [`experience.component.css`],
})
export class ExperienceListComponent implements OnInit {
  @Input() experiences: Experience[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  currentExperience: number = 0;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.loadExperiences();
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

  public nextExperience(): void {
    this.currentExperience++;
    if (this.currentExperience >= this.experiences.length) {
      this.currentExperience = 0;
    }
  }

  public previousExperience(): void {
    this.currentExperience--;
    if (this.currentExperience < 0) {
      this.currentExperience = this.experiences.length - 1;
    }
  }
}
