import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { TransformationsComponent } from './characters/transformations/transformations.component';

export const routes: Routes = [
    {path: 'characters', component: CharactersComponent},
    {path: 'planets', component: PlanetsComponent},
    {path: 'characters/:id', component: TransformationsComponent},
    {path: '**', redirectTo:'/characters', pathMatch: 'full'}

];
