import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardService } from '../../services/card.service';

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
    
  }
}
