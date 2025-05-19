import { Component } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-selector',
  imports: [],
  templateUrl: './player-selector.component.html',
  styleUrl: './player-selector.component.css'
})
export class PlayerSelectorComponent {
  playerList: Player[] = [];
  

  constructor(private playerService: PlayerService) {  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.playerList = data;
    });
  }
}
