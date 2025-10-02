import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Este componente es Standalone (independiente)
@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {
  
  // Variables
  citaForm!: FormGroup;
  tratamientos: string[] = [
    'MICROBLADING',
    'MICROSHADING',
    'LATIN BROWS',
    'POWDER BROWS',
    'NANOBLADING',
    'FULL LIPS',
    'BABY LIPS',
    'DELINEADO DE OJOS',
    'APLICACION DE UÑAS',
    'PESTAÑAS CLASICAS',
    'PESTAÑAS HIBRIDAS',
    'LIFFTING DE PESTAÑAS',
    'PESTAÑAS EFECTOS'
];

  horasDisponibles: string[] = this.generarHoras();
  whatsappNumber: string = '524432067922'; // Número de WhatsApp para contacto

  // Inyectar FormBuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.citaForm = this.fb.group({
      // ⬅️ CAMBIO 1: Validar que solo contenga letras, espacios, y caracteres acentuados comunes en español.
      nombreCompleto: ['', [
        Validators.required, 
        Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\\s]+$') 
      ]],
      // ⬅️ CAMBIO 2: Validar exactamente 10 dígitos.
      numeroTelefono: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]{10}$') 
      ]],
      tratamiento: ['', Validators.required],
      fecha: ['', [Validators.required, this.diaValidoValidator.bind(this)]], 
      hora: ['', Validators.required]
    });
  }

  /**
   * Obtiene la fecha actual en formato YYYY-MM-DD para usarla como valor 'min' en el input[type="date"].
   * Esto impide seleccionar fechas pasadas.
   */
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    // getMonth() es base 0, por eso sumamos 1. padStart asegura el '0' inicial (ej: 03).
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  /**
   * Validador personalizado para permitir solo Lunes a Sábado (Días 1 a 6).
   * Se utiliza Date.UTC para evitar problemas de zona horaria que desplacen el día.
   */
  diaValidoValidator(control: AbstractControl): { [key: string]: any } | null {
    const dateValue = control.value;
    if (!dateValue) {
      return null;
    }
    
    // 1. Parsear la cadena YYYY-MM-DD
    const parts = dateValue.split('-');
    
    if (parts.length === 3) {
      // 2. Crear un objeto Date usando Date.UTC para que no se vea afectado por la zona horaria local.
      // Los meses en JS son base 0, por eso restamos 1 al mes.
      const selectedDate = new Date(Date.UTC(
          parseInt(parts[0], 10), // Año
          parseInt(parts[1], 10) - 1, // Mes (0-11)
          parseInt(parts[2], 10) // Día
      ));

      // 3. Obtener el día de la semana (getUTCDay: 0=Domingo, 1=Lunes, ..., 6=Sábado)
      const dayOfWeek = selectedDate.getUTCDay(); 
      
      // Si es Domingo (0), es inválido
      if (dayOfWeek === 0) {
        return { 'domingoNoPermitido': true };
      }
    }
    
    return null; // Lunes a Sábado son válidos
  }

  // Genera el array de horas de inicio de cita (9am a 5pm)
  generarHoras(): string[] {
    const horas: string[] = [];
    // Las citas inician desde las 9 AM hasta las 5 PM (para terminar a las 6 PM)
    for (let h = 9; h <= 17; h++) { 
      const horaDisplay = h > 12 ? (h - 12) + ' PM' : (h === 12 ? '12 PM' : h + ' AM');
      horas.push(horaDisplay);
    }
    return horas;
  }
  
  // Función principal para enviar a WhatsApp
  onSubmit(): void {
    if (this.citaForm.valid) {
      const formValue = this.citaForm.value;
      
      // Usar la fecha tal como está en el formulario para el mensaje
      const dateParts = formValue.fecha.split('-');
      const dateToFormat = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      
      const fechaCita = dateToFormat.toLocaleDateString('es-ES', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
      });

      // 1. Crear el mensaje con los datos del formulario
      const mensaje = `
¡Hola! Me gustaría agendar una cita.
*Datos del Cliente:*
- Nombre: ${formValue.nombreCompleto}
- Teléfono: ${formValue.numeroTelefono}

*Detalles de la Cita:*
- Tratamiento: ${formValue.tratamiento}
- Fecha Solicitada: ${fechaCita}
- Hora Solicitada: ${formValue.hora}

Por favor, confirma la disponibilidad. ¡Gracias!
      `.trim(); 

      // 2. Codificar y crear el enlace de WhatsApp
      const mensajeCodificado = encodeURIComponent(mensaje);
      const urlWhatsapp = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${mensajeCodificado}`;

      // 3. Abrir la ventana de WhatsApp
      window.open(urlWhatsapp, '_blank');
      
      this.citaForm.reset(); 
    } else {
      this.citaForm.markAllAsTouched();
      console.error('El formulario es inválido. Revisa los campos con errores.');
    }
  }
}
