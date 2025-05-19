import { Component, Input } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() cardId: number = 0;
  card: Card | undefined

  constructor(private cardService: CardService){}

  ngOnInit() {
    this.cardService.getCardById(this.cardId).subscribe({
      next: (card) => {
        this.card = card;
      },
      error: (error) => {
        console.error('Error fetching card:', error);
      }
    });
  }
}
