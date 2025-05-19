import { Injectable } from '@angular/core';
import { CombatPlayer } from '../model/combatPlayer';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  combat: CombatPlayer[] = [
    {
      name: '',
      avatar: '',
      card: null,
    },
    {
      name: '',
      avatar: '',
      card: null,
    }
  ]

  constructor() { }

  setPlayer1(player: CombatPlayer) {
    this.combat[0] = player;
  }

  setPlayer2(player: CombatPlayer) {
    this.combat[1] = player;
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
}
