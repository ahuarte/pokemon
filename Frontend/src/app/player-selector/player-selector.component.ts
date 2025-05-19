import { Component } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgModel } from '@angular/forms';
import { CombatService } from '../services/combat.service';
import { CombatPlayer } from '../model/combatPlayer';

@Component({
  selector: 'app-player-selector',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './player-selector.component.html',
  styleUrl: './player-selector.component.css'
})
export class PlayerSelectorComponent {
  playerList: Player[] = [];
  selectedPlayer1: number = 0;
  selectedPlayer2: number = 0;
  


  constructor(private playerService: PlayerService, private combatService: CombatService) {  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.playerList = data;
    });
  }

  onPlayer1Change() {
    console.log('Player 1 selected:', this.selectedPlayer1);
    this.playerService.getPlayerByid(this.selectedPlayer1).subscribe((data: Player) => {
      const player1: CombatPlayer = {
        name: data.name,
        avatar: data.avatar,
        card: null
      }
      
      this.combatService.setPlayer1(player1);
    });
  }
  onPlayer2Change() {
    console.log('Player 2 selected:', this.selectedPlayer2);
    this.playerService.getPlayerByid(this.selectedPlayer2).subscribe((data: Player) => {
      const player2: CombatPlayer = {
        name: data.name,
        avatar: data.avatar,
        card: null
      }
      
      this.combatService.setPlayer2(player2);
    });
  }
}
