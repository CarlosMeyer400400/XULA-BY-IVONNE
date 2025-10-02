// trabajos.component.ts (Actualizado)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ¡IMPORTANTE!

interface Trabajo {
  id: string; 
  menuLabel: string; 
  title: string;
  description: string;
  duration: string;
  imagePath: string; 
  bgColor: string;  
}

@Component({
  selector: 'app-trabajos',
  // AÑADE CommonModule aquí para habilitar *ngFor, *ngIf, y [ngClass]
  imports: [CommonModule], 
  templateUrl: './trabajos.component.html',
  styleUrl: './trabajos.component.css'
})
export class TrabajosComponent {
  
  // ... (El resto de tu lógica de trabajosData y funciones se mantiene igual)

  trabajoActivoId: string = 'microblading';

  trabajosData: Trabajo[] = [
    {
      id: 'microblading',
      menuLabel: 'MICROBLADING',
      title: 'MICROBLADING',
      description: 'El microblading es una técnica de micropigmentación semipermanente que consiste en diseñar las cejas pelo a pelo con trazos finos, imitando el vello natural. Su resultado es natural y definido.',
      duration: 'Duración aproximada de 12 a 18 meses',
      imagePath: 'microblading.png', 
      bgColor: '#D1CEC7'
    },
    {
      id: 'microshading',
      menuLabel: 'MICROSHADING', 
      title: 'MICROSHADING',
      description: 'El microshading es una técnica de micropigmentación que consiste en aplicar un sombreado suave en las cejas, y vellos en las áreas faltantes. El resultado es un acabado definido y difuminado, ideal para quienes buscan cejas más definidas y naturales.',
      duration: 'Su duración aproximada es de 12 a 24 meses',
      imagePath: 'microshading.png',
      bgColor: '#AD9E96' 
    },
    {
      id: 'latinbrows',
      menuLabel: 'LATIN BROWS', 
      title: 'LATIN BROWS',
      description: 'El Latin Brows es una técnica de micropigmentación que combina trazos finos pelo a pelo con sombreado degradado, logrando cejas definidas pero al mismo tiempo naturales.',
      duration: 'Su duración es de 18 a 24 meses',
      imagePath: 'latin_brows.png',
      bgColor: '#AD9E96' 
    },
    {
      id: 'powderbrows',
      menuLabel: 'POWDER BROWS',
      title: 'POWDER BROWS',
      description: 'El Powder Brows es una técnica de micropigmentación semipermanente que crea un efecto de sombra en polvo, similar al maquillaje aplicado con sombra para cejas. Su acabado es suave, definido y natural.',
      duration: 'Duración aproximada de 18 a 24 meses',
      imagePath: 'powder_brows.png',
      bgColor: '#AD9E96' 
    },
    {
      id: 'nanoblading',
      menuLabel: 'NANOBLADING',
      title: 'NANOBLADING',
      description: 'El nanoblading es una técnica avanzada de micropigmentación que utiliza agujas ultrafinas para crear trazos aún más precisos y delgados que en el microblading, logrando un acabado sutil, realista y delicado.',
      duration: 'Su duración es de 12 a 24 meses',
      imagePath: 'nanoblading.png',
      bgColor: '#AD9E96' 
    },
    {
      id: 'FULL LIPS',
      menuLabel: 'FULL LIPS',
      title: 'FULL LIPS',
      description: '',
      duration: '',
      imagePath: '',
      bgColor: '' 
    },
     {
      id: '',
      menuLabel: '',
      title: '',
      description: '',
      duration: '',
      imagePath: '',
      bgColor: '' 
    }, {
      id: '',
      menuLabel: '',
      title: '',
      description: '',
      duration: '',
      imagePath: '',
      bgColor: '' 
    }
  ];
  
  cambiarTrabajo(id: string) {
    this.trabajoActivoId = id;
  }

  getActiveTrabajo(): Trabajo | undefined {
    return this.trabajosData.find(t => t.id === this.trabajoActivoId);
  }
}