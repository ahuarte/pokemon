import { Component } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-list',
  imports: [],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {
  players: Player[] = [];
  
  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }
}
