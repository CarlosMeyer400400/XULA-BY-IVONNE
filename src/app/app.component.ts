import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // ⬅️ 1. Importa la clase del componente

@Component({
  selector: 'app-root',
  standalone: true, // Esto es implícito o debes agregarlo si no está ya
  imports: [
    RouterOutlet,
    HeaderComponent // ⬅️ 2. Añade el componente a los imports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'XULA-by-ivonne';
}