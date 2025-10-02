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
  cuidado: string; 
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
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
    },
    {
      id: 'microshading',
      menuLabel: 'MICROSHADING', 
      title: 'MICROSHADING',
      description: 'El microshading es una técnica de micropigmentación que consiste en aplicar un sombreado suave en las cejas, y vellos en las áreas faltantes. El resultado es un acabado definido y difuminado, ideal para quienes buscan cejas más definidas y naturales.',
      duration: 'Su duración aproximada es de 12 a 24 meses',
      imagePath: 'microshading.png',
      bgColor: '#ffffff' ,
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
    },
    {
      id: 'latinbrows',
      menuLabel: 'LATIN BROWS', 
      title: 'LATIN BROWS',
      description: 'El Latin Brows es una técnica de micropigmentación que combina trazos finos pelo a pelo con sombreado degradado, logrando cejas definidas pero al mismo tiempo naturales.',
      duration: 'Su duración es de 18 a 24 meses',
      imagePath: 'latin_brows.png',
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
 
    },
    {
      id: 'powderbrows',
      menuLabel: 'POWDER BROWS',
      title: 'POWDER BROWS',
      description: 'El Powder Brows es una técnica de micropigmentación semipermanente que crea un efecto de sombra en polvo, similar al maquillaje aplicado con sombra para cejas. Su acabado es suave, definido y natural.',
      duration: 'Duración aproximada de 18 a 24 meses',
      imagePath: 'powder_brows.png',
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
    },
    {
      id: 'nanoblading',
      menuLabel: 'NANOBLADING',
      title: 'NANOBLADING',
      description: 'El nanoblading es una técnica avanzada de micropigmentación que utiliza agujas ultrafinas para crear trazos aún más precisos y delgados que en el microblading, logrando un acabado sutil, realista y delicado.',
      duration: 'Su duración es de 12 a 24 meses',
      imagePath: 'nanoblading.png',
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
 
    },
    {
      id: 'FULL LIPS',
      menuLabel: 'FULL LIPS',
      title: 'FULL LIPS',
      description: 'La técnica de micropigmentación que brinda un color intenso y uniforme en todo el labio. Perfecta para quienes buscan definición, corrección de asimetrías y un efecto de maquillaje permanente con mayor volumen y profundidad.',
      duration: 'Duración: entre 2 a 3 años, con retoques de mantenimiento recomendados para conservar la intensidad.',
      imagePath: 'fulllips.png',
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
 
    },
     {
      id: 'BABY LIPS',
      menuLabel: 'BABY LIPS',
      title: 'BABY LIPS',
      description: 'Un procedimiento más delicado y sutil que aporta un tono ligero y natural, similar a un bálsamo con color. Ideal para resaltar la frescura y juventud de los labios sin perder su naturalidad.',
      duration: 'Duración: entre 1 a 2 años.',
      imagePath: 'babylips.png',
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)' 
    }, {
      id: 'DELINEADO DE OJOS',
      menuLabel: 'DELINEADO DE OJOS',
      title: 'DELINEADO DE OJOS',
      description: 'Es una técnica de maquillaje semipermanente que deposita pigmentos en la capa superficial de la piel del párpado con una aguja fina para crear una línea definida a lo largo de la base de las pestañas. Este método mejora la mirada creando un efecto de pestañas más densas y reales, no requiere maquillaje diario. ',
      duration: 'Duración: entre 2 a 5 años.',
      imagePath: 'delineadoDeOjos.png',
      bgColor: '#ffffff',
      cuidado: '(dependiendo del tipo de piel y cuidados posteriores)'
    }, {
      id: 'APLICACION DE UÑAS',
      menuLabel: 'APLICACION DE UÑAS',
      title: 'APLICACION DE UÑAS',
      description: 'La aplicación de uñas es un servicio diseñado para embellecer tus manos y realzar tu estilo personal. Consiste en la colocación de extensiones o recubrimientos en tus uñas naturales utilizando técnicas profesionales y productos de alta calidad.',
      duration: '',
      imagePath: 'unas.png',
      bgColor: '#ffffff',
      cuidado: '' 
    }, {
      id: 'PESTAÑAS CLASICAS',
      menuLabel: 'PESTAÑAS CLASICAS',
      title: 'PESTAÑAS CLASICAS',
      description: 'La técnica más natural, donde se coloca una extensión por cada pestaña natural. Ideal para quienes buscan un efecto discreto, elegante y definido sin perder naturalidad.',
      duration: '',
      imagePath: 'pestanas clasicas.png',
      bgColor: '#ffffff',
      cuidado: '' 
    }, {
      id: 'PESTAÑAS HIBRIDAS',
      menuLabel: 'PESTAÑAS HIBRIDAS',
      title: 'PESTAÑAS HIBRIDAS',
      description: 'Una combinación entre pestañas clásicas y de volumen. Se logra un efecto más llamativo y con textura, perfecto para clientas que desean algo intermedio entre lo natural y lo glamuroso.',
      duration: '',
      imagePath: 'pestanas hibridas.png',
      bgColor: '#ffffff',
      cuidado: '' 
    }, {
      id: 'LIFFTING DE PESTAÑAS',
      menuLabel: 'LIFFTING DE PESTAÑAS',
      title: 'LIFFTING DE PESTAÑAS',
      description: 'Un tratamiento que eleva y curva tus pestañas naturales desde la raíz, logrando una mirada más abierta y expresiva sin necesidad de extensiones. Es ideal para quienes desean mantener un efecto natural con bajo mantenimiento.',
      duration: '',
      imagePath: 'LIFFTING.png',
      bgColor: '#ffffff',
      cuidado: '' 
    }, {
      id: 'PESTAÑAS EFECTOS',
      menuLabel: 'PESTAÑAS EFECTOS',
      title: 'PESTAÑAS EFECTOS',
      description: 'Aplicaciones personalizadas que crean acabados únicos como “ojos de gato”, “fox eyes” o efecto kim k. Son ideales para quienes quieren resaltar la forma de sus ojos con un estilo más artístico y moderno.',
      duration: '',
      imagePath: 'pestanas efectos.png',
      bgColor: '#ffffff',
      cuidado: '' 
    }
  ];
  
 cambiarTrabajo(id: string) {
  this.trabajoActivoId = id;

  // Espera un poco para que Angular pinte el nuevo contenido
  setTimeout(() => {
    const content = document.getElementById("trabajo-content");
    if (content) {
      content.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}
  
  getActiveTrabajo(): Trabajo | undefined {
    return this.trabajosData.find(t => t.id === this.trabajoActivoId);
  }

  
}