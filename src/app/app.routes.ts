import { Routes } from '@angular/router';

export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // Asegúrate de importar CommonModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
