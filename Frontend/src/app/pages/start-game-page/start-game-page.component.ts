import { Component } from '@angular/core';
import { PlayerSelectorComponent } from "../../player-selector/player-selector.component";
import { CombatComponent } from '../../combat/combat.component';

@Component({
  selector: 'app-start-game-page',
  imports: [PlayerSelectorComponent, CombatComponent],
  templateUrl: './start-game-page.component.html',
  styleUrl: './start-game-page.component.css'
})
export class StartGamePageComponent {
  combatStarted: boolean = false;

  startGame() {
    this.combatStarted = true;
  }
}
