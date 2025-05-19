import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../model/player';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-player-form',
  imports: [ReactiveFormsModule],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.css'
})
export class PlayerFormComponent {
  playerForm: FormGroup = new FormGroup({});
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private playerService: PlayerService, private imageService: ImageService) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      avatar: [''],
    });
  }

  onSubmit() {
    this.addPlayer()
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  addPlayer() {
    //Creamos una carta auxiliar 
    if (this.playerForm.valid) {
      const player: Player = {
        id: 0,
        name: this.playerForm.value.name,
        avatar: this.playerForm.value.img,
        idCard: null
      };

      // Enviamos la carta al servicio
      this.playerService.postPlayer(player).subscribe((response: number) => {

        this.uploadAvatar(response);

      }, error => {
        console.error('Error creating player', error);
      });
    }
  }

  uploadAvatar(response: number) {
    const formData = new FormData();

    // Si se ha añadido una imagen, la subimos y asociamos a la carta creada
    if (this.selectedFile) {
      formData.append('Avatar', this.selectedFile); // nombre exacto 'Imagen' (case-sensitive)
      formData.append('IdPlayer', response.toString());

      this.imageService.uploadAvatar(formData).subscribe(response => {
        console.log('Avatar uploaded successfully', response);

      }, error => {
        console.error('Error uploading avatar', error);
      });
    }
  }

}
