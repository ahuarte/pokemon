import { Routes } from '@angular/router';
import { PlayerFormComponent } from './forms/player-form/player-form.component';
import { CardFormComponent } from './forms/card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerSelectorComponent } from './player-selector/player-selector.component';

export const routes: Routes = [
    { path: 'players', component: PlayerListComponent },    
    { path: 'newCard', component: CardFormComponent },
    { path: 'newPlayer', component: PlayerFormComponent },    
    { path: 'playerSelector', component: PlayerSelectorComponent },    
    { path: '', component: CardListComponent },
];
