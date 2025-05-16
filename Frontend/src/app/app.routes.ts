import { Routes } from '@angular/router';
import { PlayerFormComponent } from './forms/player-form/player-form.component';
import { CardFormComponent } from './forms/card-form/card-form.component';

export const routes: Routes = [
    { path: 'cards', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'newPlayer', component: PlayerFormComponent },
    { path: 'newCard', component: CardFormComponent },
];
