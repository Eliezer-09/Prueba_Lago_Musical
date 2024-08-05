import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
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

  constructor(private renderer: Renderer2) {}

  mostrarSonidos(animal: Animal) {
    this.currentSonidos = this.sonidos[animal];
    this.currentSonidoIndex = 0;
    this.campecinoFrente = true;
  }

  ocultarSonidos() {
    this.currentSonidos = [];
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
    }
  }
}

type Animal = 'rana' | 'libelula' | 'grillo';
