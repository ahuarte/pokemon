import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CombatService } from '../services/combat.service';
import { CombatPlayer } from '../model/combatPlayer';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-combat',
  imports: [PokemonCardComponent, ConfirmationModalComponent],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.css'
})
export class CombatComponent {
  
  @ViewChild(ConfirmationModalComponent) confirmationModal!: ConfirmationModalComponent;
  player1!: CombatPlayer;
  player2!: CombatPlayer;

  finalizar: boolean=false;
  turno: boolean = true;

  constructor(public combatService: CombatService,private router: Router) { }

  ngOnInit() {
    this.setPlayers();
  }

  setPlayers() {
    this.player1 = this.combatService.combatPlayers[0];
    this.player2 = this.combatService.combatPlayers[1];
  }

  attack() {
    this.combatService.attack(this.turno)
    this.turno = !this.turno
    if (this.combatService.finalizado) {
      this.finalizar = true;
      this.combatService.finalizado=false;
      this.confirmationModal.open();
    }else{
      this.finalizar=false;
    }
  }
  reload() {
    this.combatService.recargar(this.turno)
    this.turno = !this.turno
  }
  defend() {
    this.combatService.defender(this.turno)
    this.turno = !this.turno
  }

  finalizarCombate() {
    this.confirmationModal.cerrarModal();
    this.router.navigate(['/']);
  }
}
