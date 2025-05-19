import { Routes } from '@angular/router';
import { PlayerFormComponent } from './forms/player-form/player-form.component';
import { CardFormComponent } from './forms/card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';

export const routes: Routes = [
    { path: 'newCard', component: CardFormComponent },
    { path: 'newPlayer', component: PlayerFormComponent },    
    { path: '', component: CardListComponent },
];
