import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Necesario para los [routerLink]

@Component({
  selector: 'app-header',
  standalone: true, // Debe ser 'true'
  imports: [RouterLink], // Importa RouterLink si es un componente Standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // ...
}