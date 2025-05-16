import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerFormComponent } from "./forms/player-form/player-form.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerFormComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon';
}
