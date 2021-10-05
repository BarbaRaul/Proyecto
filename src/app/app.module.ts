import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DomicilioAlumnoComponent } from './domicilio-alumno/domicilio-alumno.component';
import { DatosAlumnoComponent } from './datos-alumno/datos-alumno.component';
import { DatosFamiliaresComponent } from './datos-familiares/datos-familiares.component';
import { DatosMadreComponent } from './datos-madre/datos-madre.component';
import { DatosHermanoComponent } from './datos-hermano/datos-hermano.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';

@NgModule({
  declarations: [
    AppComponent,
    
    DomicilioAlumnoComponent,
    
    DatosAlumnoComponent,
    
    DatosFamiliaresComponent,
    
    DatosMadreComponent,
    
    DatosHermanoComponent,
    
    InformacionAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
