import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CardFormComponent } from "./forms/card-form/card-form.component";
import { CardListComponent } from "./card-list/card-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardFormComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon';
}
