import { Component } from '@angular/core';
// ⬅️ Se eliminó la importación de RouterLink ya que no se usa en el HTML

@Component({
  selector: 'app-footer',
  standalone: true,
  // ⬅️ Dejamos imports como un array vacío o lo eliminamos si no hay nada más
  imports: [], 
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  whatsappNumber: string = '524432067922';
  
  // Method to open WhatsApp link
  openWhatsApp() {
    const url = `https://wa.me/${this.whatsappNumber}`;
    window.open(url, '_blank');
  }
}
