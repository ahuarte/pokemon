import { Injectable } from '@angular/core';
import { CombatPlayer } from '../model/combatPlayer';
import { Card } from '../model/card';
import { Combat } from '../model/combat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CombatList } from '../model/combatList';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  constructor(private http: HttpClient) { }
  route: string = 'https://localhost:7214/api/Combate'; 
  postCombat(combat: Combat): Observable<number> {
    return this.http.post<number>(this.route, combat);
  }
  getCombat(): Observable<CombatList[]> {
    return this.http.get<CombatList[]>(this.route);
  }
  combateAux: Combat | undefined;
  combatPlayers: CombatPlayer[] = [
    {
      id: 0,
      name: '',
      avatar: '',
      card: undefined,
    },
    {
      id: 0,
      name: '',
      avatar: '',
      card: undefined,
    }
  ]
  ganador: number | undefined;
  numTurno: number | undefined;
  finalizado: boolean=false;
  setPlayer1(player: CombatPlayer) {
    this.combatPlayers[0] = player;
  }

  setPlayer2(player: CombatPlayer) {
    this.combatPlayers[1] = player;
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
  }

  updateCardP2(card: Card){
    this.combatPlayers[1].card = card;
  }

  resetCombat(){
    this.combatPlayers = [
      {
        id: 0,
        name: '',
        avatar: '',
        card: undefined,
      },
      {
        id: 0,
        name: '',
        avatar: '',
        card: undefined,
      }
    ]
  }

  //Combat
  attack(turno: boolean){
    var ataque1 = this.combatPlayers[0].card!.attack;
    var ataque2 = this.combatPlayers[1].card!.attack;

    if(turno){
      if (this.combatPlayers[0].card!.ammo<=0) {
        return 'A la carta del J1 no le queda munición para atacar';
      }
      var resultadoCombate = ataque1 - this.combatPlayers[1].card!.block

      if(resultadoCombate <= 0){
        this.combatPlayers[1].card!.block -= ataque1
      }else{
        this.combatPlayers[1].card!.block = 0
        this.combatPlayers[1].card!.hp -= resultadoCombate
      }

      this.combatPlayers[0].card!.ammo -= 1
    }else{
      if (this.combatPlayers[1].card!.ammo<=0) {
        return 'A la carta del J2 no le queda munición para atacar';
      }
      var resultadoCombate = ataque2 - this.combatPlayers[0].card!.block

        if(resultadoCombate <= 0){
          this.combatPlayers[0].card!.block -= ataque2
        }else{
          this.combatPlayers[0].card!.block = 0
          this.combatPlayers[0].card!.hp -= resultadoCombate
        }

        this.combatPlayers[1].card!.ammo -= 1
    }
    if (this.combatPlayers[0].card != undefined && this.combatPlayers[0].card?.hp <= 0) {
      this.ganador = this.combatPlayers[1].id;
    }
    if (this.combatPlayers[1].card != undefined && this.combatPlayers[1].card?.hp <= 0) {
      this.ganador = this.combatPlayers[0].id;
    }
    if (this.ganador!=undefined) {
      this.finalizarCombate();
    }
    if (this.numTurno == undefined) {
      this.numTurno = 1;
    }else{
      this.numTurno += 1;
    }
    return null;
  }

  defender(turno: boolean){
    if (turno) {
      this.combatPlayers[0].card!.block +=1;
    }else{
      this.combatPlayers[1].card!.block +=1;
    }
    if (this.numTurno == undefined) {
      this.numTurno = 1;
    }else{
      this.numTurno += 1;
    }
  }
  recargar(turno: boolean){
    if (turno) {
      this.combatPlayers[0].card!.ammo +=1;
    }else{
      this.combatPlayers[1].card!.ammo +=1;
    }
    if (this.numTurno == undefined) {
      this.numTurno = 1;
    }else{
      this.numTurno += 1;
    }
  }
  //TODO
  finalizarCombate() {
    if (this.ganador != undefined) {
      if (this.combateAux == undefined) {
        if (this.numTurno!=undefined) {
          this.combateAux = {
            id:0,
            turno: this.numTurno,
            jugadores: [{
              ganador: this.ganador == this.combatPlayers[0].id,
              idJugador: this.combatPlayers[0].id
            },
            {
              ganador: this.ganador == this.combatPlayers[1].id,
              idJugador: this.combatPlayers[1].id
                }]
          };
        }
      }

      if (this.combateAux != undefined) {
        this.postCombat(this.combateAux).subscribe((response: number) => {});
      }

      this.resetCombat();
      this.ganador = undefined;
      this.combateAux = undefined;
      this.numTurno = undefined;
      this.finalizado = true;
      return true;
    }
    this.ganador=undefined;
    return false;
  }
}
