import { Component } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // opcional

@Component({
  selector: 'app-player-selector',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule],
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
