import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { TransformationsComponent } from './characters/transformations/transformations.component';
import { InfoComponent } from './planets/info/info.component';

export const routes: Routes = [
    {path: 'characters', component: CharactersComponent},
    {path: 'planets', component: PlanetsComponent},
    {path: 'characters/:id', component: TransformationsComponent},
    {path: 'planets/:id', component: InfoComponent},
    {path: '**', redirectTo:'/characters', pathMatch: 'full'},

];
