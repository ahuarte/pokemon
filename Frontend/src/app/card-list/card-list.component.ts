import { Component } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-list',
  imports: [],
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
