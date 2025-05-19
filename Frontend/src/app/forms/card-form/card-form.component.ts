import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { Card } from '../../model/card';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm: FormGroup = new FormGroup({});
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private cardService: CardService, private imageService: ImageService, private route: Router) { }

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
    this.addCard();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  addCard() {
    //Creamos una carta auxiliar 
    if(this.cardForm.valid){
      const card: Card = {
        id: 0,
        name: this.cardForm.value.pokemonName,
        pokemonType: this.cardForm.value.pokemonType,
        hp: this.cardForm.value.hp,
        attack: this.cardForm.value.damage,
        block: this.cardForm.value.defense,
        ammo: this.cardForm.value.ammo,
        image: this.cardForm.value.img,
      };

      // Enviamos la carta al servicio
      this.cardService.postCard(card).subscribe((response: number) => {
        
        this.uploadImage(response);

      }, error => {
        console.error('Error creating card', error);
      });
    }
  }

  uploadImage(response: number){
    const formData = new FormData();
        
    // Si se ha añadido una imagen, la subimos y asociamos a la carta creada
    if (this.selectedFile) {
      formData.append('Imagen', this.selectedFile); // nombre exacto 'Imagen' (case-sensitive)
      formData.append('IdPokemon', response.toString());

      this.imageService.uploadImage(formData).subscribe(response => {
        console.log('Image uploaded successfully', response);

        this.route.navigate(['/']);
      }, error => {
        console.error('Error uploading image', error);
      });
    }
  }
}

