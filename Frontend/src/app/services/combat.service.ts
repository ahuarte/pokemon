import { Injectable } from '@angular/core';
import { CombatPlayer } from '../model/combatPlayer';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  combat: CombatPlayer[] = [
    {
      id: 0,
      name: '',
      avatar: '',
      card: null,
    },
    {
      id: 0,
      name: '',
      avatar: '',
      card: null,
    }
  ]

  constructor() { }

  setPlayer1(player: CombatPlayer) {
    this.combat[0] = player;
    console.log('Player 1 set:', player);
  }

  setPlayer2(player: CombatPlayer) {
    this.combat[1] = player;
    console.log('Player 2 set:', player);
  }

  setPlayer1Card(card: Card) {
    if(this.combat[0]) {
      this.combat[0].card = card;
    }
  }

  setPlayer2Card(card: Card) {
    if(this.combat[1]) {
      this.combat[1].card = card;
    }
  }

  updateCardP1(card: Card){
    this.combat[0].card = card;
    console.log('Player 1 updated:', this.combat[0]);
  }

  updateCardP2(card: Card){
    this.combat[1].card = card;
    console.log('Player 2 updated:', this.combat[1]);
  }

  resetCombat(){
    this.combat = [
      {
        id: 0,
        name: '',
        avatar: '',
        card: null,
      },
      {
        id: 0,
        name: '',
        avatar: '',
        card: null,
      }
    ]
  }
}
