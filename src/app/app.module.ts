import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ ReactiveFormsModule} from '@angular/forms';

//evidencia
import { AddevidenciaComponent } from './componente/add-evidencia/add-evidencia.component';
import { EditevidenciaComponent } from './componente/edit-evidencia/edit-evidencia.component';
import { ListevidenciaComponent } from './componente/list-evidencia/list-formato.component';

@NgModule({
  declarations: [
  AppComponent,
  AddevidenciaComponent,
  EditevidenciaComponent,
  ListevidenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
