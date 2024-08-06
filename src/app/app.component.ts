import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Animal = 'rana' | 'libelula' | 'grillo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  campecinoFrente = true;
  sonidos: { [key in Animal]: string[] } = {
    rana: ['brr', 'birip', 'brrah', 'croac'],
    libelula: ['fiu', 'plop', 'pep'],
    grillo: ['cric-cric', 'trri-trri', 'bri-bri']
  };
  canciones: { [key: string]: string[] } = {
    'brr': ['fiu', 'cric-cric', 'brrah'],
    'birip': ['trri-trri', 'croac'],
    'plop': ['cric-cric', 'brrah'],
    'croac': ['zzz'],
    'brrah': ['zzz']
  };
  currentSonidos: string[] = [];
  currentSonidoIndex = 0;
  mensaje = '';
  showMensaje = false;
  showOpciones = false;
  currentAnimal: Animal | null = null;

  constructor(private renderer: Renderer2) {}

  mostrarOpciones() {
    this.showOpciones = true;
  }

  reproducirSonido(sonido: string) {
    
    this.showOpciones = false;
    this.campecinoFrente = false;
    this.currentSonidos = this.canciones[sonido] || [];
    this.mensaje = sonido;
    this.showMensaje = true;
    this.currentSonidoIndex = 0;
    this.currentAnimal = null;
    this.animarSonidos();
  }

  animarSonidos() {
    if (this.currentSonidoIndex < this.currentSonidos.length) {
      const siguienteSonido = this.currentSonidos[this.currentSonidoIndex];
      this.mensaje = siguienteSonido;
      this.currentSonidoIndex++;

      if (this.sonidos.rana.includes(siguienteSonido)) {
        this.currentAnimal = 'rana';
      } else if (this.sonidos.libelula.includes(siguienteSonido)) {
        this.currentAnimal = 'libelula';
      } else if (this.sonidos.grillo.includes(siguienteSonido)) {
        this.currentAnimal = 'grillo';
      }

      setTimeout(() => this.animarSonidos(), 1000);
    } else {
      this.campecinoFrente = true;
      this.mensaje = 'zzz'; // Mostrar zzz cuando termina la canción
      this.currentAnimal = null; // Ocultar mensaje en los animales
      setTimeout(() => {
        this.showMensaje = false; // Ocultar el mensaje después de un tiempo
      }, 1000);
    }
  }
}
