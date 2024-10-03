import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';

export const routes: Routes = [
    {path: 'characters', component: CharactersComponent},
    {path: 'planets', component: PlanetsComponent}

];
