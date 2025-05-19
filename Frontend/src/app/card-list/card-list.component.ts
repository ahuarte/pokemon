import { Component } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../services/card.service';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-card-list',
  imports: [PokemonCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cards: Card[] = [];

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.getCards().subscribe((data: Card[]) => {
      this.cards = data;
    });
  }
}
