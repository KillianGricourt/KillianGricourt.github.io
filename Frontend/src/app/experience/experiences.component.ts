import { Component, Input, OnInit } from '@angular/core';
import { Experience } from './experience.model';
import { ExperienceService } from '../services/experience.service';
import { ExperienceComponent } from './experience.component';

@Component({
  selector: 'app-experiences',
  imports: [ExperienceComponent],
  templateUrl: `experiences.component.html`,
})
export class ExperienceListComponent implements OnInit {
  @Input() experiences: Experience[] = [];
  isLoading = true;
  errorMessage: string | null = null;

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
}
