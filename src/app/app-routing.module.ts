import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomicilioAlumnoComponent } from './domicilio-alumno/domicilio-alumno.component';
import { DatosAlumnoComponent } from './datos-alumno/datos-alumno.component';
import { DatosFamiliaresComponent } from './datos-familiares/datos-familiares.component';
import { DatosMadreComponent } from './datos-madre/datos-madre.component';
import { DatosHermanoComponent } from './datos-hermano/datos-hermano.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';



const routes: Routes = [
  {
    path: 'domicilio-alumno',
    component: DomicilioAlumnoComponent
  },
  {
    path: 'datos-alumno',
    component: DatosAlumnoComponent
  },
  {
    path: 'datos-familiares',
    component: DatosFamiliaresComponent
  },
  {
    path: 'datos-madre',
    component: DatosMadreComponent
  },
  {
    path: 'datos-hermano',
    component: DatosHermanoComponent
  },
  {
    path: 'datos-academicos',
    component: InformacionAcademicaComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
