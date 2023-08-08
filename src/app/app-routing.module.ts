import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ReservarComponent } from './components/pages/reservar/reservar.component';
import { EditarComponent } from './components/pages/editar/editar.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"reservar", component: ReservarComponent},
  {path:"editar", component: EditarComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
