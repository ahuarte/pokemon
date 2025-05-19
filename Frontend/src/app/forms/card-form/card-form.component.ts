import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private cardService: CardService) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      pokemonName: ['', Validators.required],
      pokemonType: ['', Validators.required],
      hp: [3, [Validators.required, Validators.min(3), Validators.max(10)]],
      damage: [3, [Validators.required, Validators.min(3), Validators.max(10)]],
      defense: [3, [Validators.required, Validators.min(3), Validators.max(10)]],
      ammo: [3, [Validators.required, Validators.min(3), Validators.max(10)]],
      img: [null]
    });
  }

  onSubmit() {
    if(this.cardForm.valid){
      const card: Card = {
        id: 0,
        name: this.cardForm.value.pokemonName,
        pokemonType: this.cardForm.value.pokemonType,
        hp: this.cardForm.value.hp,
        attack: this.cardForm.value.damage,
        block: this.cardForm.value.defense,
        ammo: this.cardForm.value.ammo,
        image: this.cardForm.value.img
      };

      this.cardService.postCard(card).subscribe(response => {
        console.log('Card created successfully', response);
      }, error => {
        console.error('Error creating card', error);
      });
    }
  }
}
