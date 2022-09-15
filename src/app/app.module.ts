import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploLeafletComponent } from './ejemplo-leaflet/ejemplo-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploLeafletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
