import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- ¡IMPORTA ESTO!

@Component({
  selector: 'app-inicio',
  standalone: true, // Asumiendo que es standalone
  imports: [CommonModule, RouterModule], // <-- AÑÁDELO A LA LISTA DE IMPORTS
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // ...
}