import { Component } from '@angular/core';
import { CombatService } from '../services/combat.service';
import { CombatPlayer } from '../model/combatPlayer';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-combat',
  imports: [PokemonCardComponent],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.css'
})
export class CombatComponent {
  player1!: CombatPlayer;
  player2!: CombatPlayer;

  constructor(private combatService: CombatService) {  }

  ngOnInit() {
    this.setPlayers();
  }

  setPlayers(){
    this.player1 = this.combatService.combat[0];
    this.player2 = this.combatService.combat[1];
  }
}
