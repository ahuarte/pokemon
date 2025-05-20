import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgModel } from '@angular/forms';
import { CombatService } from '../services/combat.service';
import { CombatPlayer } from '../model/combatPlayer';
import { CardService } from '../services/card.service';
import { Card } from '../model/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-selector',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './player-selector.component.html',
  styleUrl: './player-selector.component.css'
})
export class PlayerSelectorComponent {
  @Output() startCombatEmitter: EventEmitter<boolean> = new EventEmitter();
  playerList: Player[] = [];
  cardList: Card[] = [];
  selectedPlayer1: number = 0;
  selectedPlayer2: number = 0;
  selectedCard1: number = 0;
  selectedCard2: number = 0;
  
  areBothCardsSelected: boolean = false;

  constructor(private playerService: PlayerService, private combatService: CombatService, private cardService: CardService) {  }

  ngOnInit() {
    this.combatService.resetCombat();
    this.loadPlayers();
    this.loadCards();
  }

  loadPlayers() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.playerList = data;
    });
  }

  loadCards() {
    this.cardService.getCards().subscribe((data: any) => {
      this.cardList = data;
    });
  }

  onPlayer1Change() {
    console.log('Player 1 selected:', this.selectedPlayer1);
    this.playerService.getPlayerByid(this.selectedPlayer1).subscribe((data: Player) => {
      const player1: CombatPlayer = {
        id: data.id,
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
        id: data.id,
        name: data.name,
        avatar: data.avatar,
        card: null
      }
      
      this.combatService.setPlayer2(player2);
    });
  }

  onCard1Change() {
    this.cardService.getCardById(this.selectedCard1).subscribe((data: Card) => {
      this.combatService.updateCardP1(data);
    } );
  }

  onCard2Change() {
    this.cardService.getCardById(this.selectedCard2).subscribe((data: Card) => {
      this.combatService.updateCardP2(data);
    });
  }

  onBothCardsSelected(){
    if(this.combatService.combat[0].card && this.combatService.combat[1].card) {
      return true;
    }
    return;
  }

  startGameEmitter(){
    if(this.onBothCardsSelected()){
      console.log('en emisor')
      this.startCombatEmitter.emit(true);
    }else{
      console.log('No has seleccionado ambas cartas');
    }
    
  }
}
