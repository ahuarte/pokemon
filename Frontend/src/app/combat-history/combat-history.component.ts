import { Component } from '@angular/core';
import { Combat } from '../model/combat';
import { CombatService } from '../services/combat.service';
import { CombatList } from '../model/combatList';

@Component({
  selector: 'app-combat-history',
  imports: [],
  templateUrl: './combat-history.component.html',
  styleUrl: './combat-history.component.css'
})
export class CombatHistoryComponent {
  combates: CombatList[] | undefined;
  constructor (private service: CombatService) {};
  ngOnInit(){
    this.service.getCombat().subscribe((response: CombatList[]) => {
      this.combates=response;
    })
  }
}
