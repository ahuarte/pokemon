import { Routes } from '@angular/router';
import { PlayerFormComponent } from './forms/player-form/player-form.component';
import { CardFormComponent } from './forms/card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerSelectorComponent } from './player-selector/player-selector.component';
import { StartGamePageComponent } from './pages/start-game-page/start-game-page.component';
import { CombatHistoryComponent } from './combat-history/combat-history.component';

export const routes: Routes = [
    { path: 'players', component: PlayerListComponent },    
    { path: 'newCard', component: CardFormComponent },
    { path: 'newPlayer', component: PlayerFormComponent },    
    { path: 'startGame', component: StartGamePageComponent }, 
    { path: 'gameTimeline', component: CombatHistoryComponent },   
    { path: '', component: CardListComponent },
];
