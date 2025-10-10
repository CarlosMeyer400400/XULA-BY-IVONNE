import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Papa from 'papaparse'; // Asegúrate de instalar papaparse

interface Trabajo {
  id: string;
  menuLabel: string;
  title: string;
  description: string;
  duration: string;
  imagePath: string;
  bgColor: string;
  cuidado: string;
}

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajoActivoId: string = 'uno';
  trabajosData: Trabajo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarTrabajosDesdeCSV();
  }

  cargarTrabajosDesdeCSV() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnYYbO0E6-1Z19qv-9Go6x4z9rbxBsXHwnqYq1gCCOBx9PrECazMtx5B-yFMpNZxvahMjci1T-pWn5/pub?gid=0&single=true&output=csv';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (data) => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (results: any) => {
            this.trabajosData = [
              {
                id: 'uno',
                menuLabel: '',
                title: '',
                description: '',
                duration: '',
                imagePath: 'https://res.cloudinary.com/duyyo5yeg/image/upload/v1760114668/trabajo_iuzehj.png',
                bgColor: '#ffffff',
                cuidado: ''
              },
              ...results.data.map((row: any, index: number) => ({
                id: `trabajo${index}`,
                menuLabel: row.NOMBRE,
                title: row.NOMBRE,
                description: row.DESCRIPCION || '',
                duration: row.DURACION || '',
                cuidado: row.CUIDADO || '',
                imagePath: row.IMAGEN_URL || '',
                bgColor: '#ffffff'
              }))
            ];
          }
        });
      },
      error: (err) => console.error('Error cargando CSV:', err)
    });
  }

  getMenuTrabajos(): Trabajo[] {
    return this.trabajosData.filter(t => t.id !== 'uno');
  }

  getActiveTrabajo(): Trabajo | undefined {
    return this.trabajosData.find(t => t.id === this.trabajoActivoId);
  }

  isEstadoInicial(): boolean {
    return this.trabajoActivoId === 'uno';
  }

  cambiarTrabajo(id: string) {
    this.trabajoActivoId = id;
    setTimeout(() => {
      const content = document.getElementById('trabajo-content');
      if (content) content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}
