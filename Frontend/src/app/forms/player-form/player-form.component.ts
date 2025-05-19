import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  imports: [ReactiveFormsModule],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.css'
})
export class PlayerFormComponent {
  playerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      avatar: [''],
    });
  }

  onSubmit() {
    if (this.playerForm.valid) {
      const player = {
        id: 0,
        idCard: 0,
        name: this.playerForm.value.name,
        avatar: this.playerForm.value.avatar
      };

      console.log('Player created successfully', player);
    }
  }


}
