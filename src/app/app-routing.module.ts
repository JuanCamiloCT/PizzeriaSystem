import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasInsumosComponent } from './components/entradas-insumos/entradas-insumos.component';
import { SalidasInsumosComponent } from './components/salidas-insumos/salidas-insumos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes =[
  {path:'entradas-insumos', component: EntradasInsumosComponent},
  {path:'salidas-insumos', component: SalidasInsumosComponent},
  {path:'login', component: LoginComponent}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
