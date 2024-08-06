import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  currentSonidos: string[] = [];
  currentSonidoIndex = 0;
  mensaje = '';
  showMensaje = false;
  currentAnimal: Animal | null = null;

  constructor(private renderer: Renderer2) {}

  mostrarSonidos(animal: Animal) {
    this.currentSonidos = this.sonidos[animal];
    this.currentSonidoIndex = 0;
    this.campecinoFrente = true;
    this.currentAnimal = animal;
  }

  ocultarSonidos() {
    this.currentSonidos = [];
    this.currentAnimal = null;
  }

  reproducirSonido(sonido: string) {
    this.campecinoFrente = false;
    this.mensaje = sonido;
    this.showMensaje = true;
    this.currentSonidoIndex = 0;
    this.animarSonidos();
  }

  animarSonidos() {
    if (this.currentSonidoIndex < this.currentSonidos.length) {
      this.mensaje = this.currentSonidos[this.currentSonidoIndex];
      this.currentSonidoIndex++;
      setTimeout(() => this.animarSonidos(), 1000);
    } else {
      this.campecinoFrente = true;
      this.showMensaje = false;
      this.ocultarSonidos();
    }
  }
}

type Animal = 'rana' | 'libelula' | 'grillo';
