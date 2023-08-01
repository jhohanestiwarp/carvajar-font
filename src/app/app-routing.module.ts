import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//cargo

import { AddevidenciaComponent } from './componente/add-evidencia/add-evidencia.component';
import { EditevidenciaComponent } from './componente/edit-evidencia/edit-evidencia.component';
import { ListevidenciaComponent } from './componente/list-evidencia/list-formato.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'evidencia' },
  //evidencia
  { path: 'add-evidencia', component: AddevidenciaComponent },
  { path: 'edit-evidencia', component: EditevidenciaComponent },
  { path: 'list-evidencia', component: ListevidenciaComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
