import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceListComponent } from './experience/experiences.component';
import { HomeComponent } from './home/home.component';
import { EasterEggComponent } from './easter-egg/easter-egg.component';

export const routes: Routes = [
  { path: 'experiences', component: ExperienceListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'easter-egg', component: EasterEggComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/home' }, // Gestion des routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
