import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import {ExperienceService} from './services/experience.service';
import {Experience} from './experience/experience.model';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienceComponent, NgIf, NgForOf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Killian Gricourt'
  email = 'gricourt.killian@gmail.com'
  experiences: Experience[] = []; // Stocker les expériences récupérées
  loading = true; // Indique si les données sont en cours de chargement
  errorMessage: string | null = null; // Message en cas d'erreur

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.loadExperiences();
  }

  // Charger les expériences via le service
  private loadExperiences(): void {
    this.experienceService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false; // Fin du chargement
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.loading = false; // Fin du chargement
      },
    });
  }

}
