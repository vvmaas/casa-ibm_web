import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ReservarComponent } from './components/pages/reservar/reservar.component';
import { EditarComponent } from './components/pages/editar/editar.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpBoxComponent } from './components/pop-up-box/pop-up-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ReservarComponent,
    EditarComponent,
    PopUpBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
