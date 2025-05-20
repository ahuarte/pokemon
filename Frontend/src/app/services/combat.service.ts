import { Injectable } from '@angular/core';
import { CombatPlayer } from '../model/combatPlayer';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  combatPlayers: CombatPlayer[] = [
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
    this.combatPlayers[0] = player;
    console.log('Player 1 set:', player);
  }

  setPlayer2(player: CombatPlayer) {
    this.combatPlayers[1] = player;
    console.log('Player 2 set:', player);
  }

  setPlayer1Card(card: Card) {
    if(this.combatPlayers[0]) {
      this.combatPlayers[0].card = card;
    }
  }

  setPlayer2Card(card: Card) {
    if(this.combatPlayers[1]) {
      this.combatPlayers[1].card = card;
    }
  }

  updateCardP1(card: Card){
    this.combatPlayers[0].card = card;
    console.log('Player 1 updated:', this.combatPlayers[0]);
  }

  updateCardP2(card: Card){
    this.combatPlayers[1].card = card;
    console.log('Player 2 updated:', this.combatPlayers[1]);
  }

  resetCombat(){
    this.combatPlayers = [
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

  //Combat
  attack(turno: boolean){
    if(turno){
        var resultadoCombate = this.combatPlayers[0].card!.attack - this.combatPlayers[1].card!.block

        if(resultadoCombate >= 0){
          this.combatPlayers[1].card!.block -= resultadoCombate
        }else{
          this.combatPlayers[1].card!.block = 0
          this.combatPlayers[1].card!.hp += resultadoCombate
        }

        this.combatPlayers[0].card!.ammo -= 1
    }else{
      var resultadoCombate = this.combatPlayers[1].card!.attack - this.combatPlayers[0].card!.block

        if(resultadoCombate >= 0){
          this.combatPlayers[0].card!.block -= resultadoCombate
        }else{
          this.combatPlayers[0].card!.block = 0
          this.combatPlayers[0].card!.hp += resultadoCombate
        }

        this.combatPlayers[0].card!.ammo -= 1
    }
    console.log("Jugador 1: ", this.combatPlayers[0].card!)
    console.log("Jugador 2: ", this.combatPlayers[1].card!)
  }
}
