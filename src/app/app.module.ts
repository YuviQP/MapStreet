import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EjemploLeafletComponent } from './ejemplo-leaflet/ejemplo-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploLeafletComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
