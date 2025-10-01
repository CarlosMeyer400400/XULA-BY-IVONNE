import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
// Eliminamos RouterLinkActive y NgClass

@Component({
  selector: 'app-header',
  standalone: true,
  // Solo necesitamos RouterLink aquí
  imports: [RouterLink], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}