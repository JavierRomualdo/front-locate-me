import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from "@angular/router";
import { InicioComponent } from './modulos/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  // { path: '404', component: Error404Component },
  // { path: '500', component: Error505Component },
  // { path: '501', component: Error501Component },
  // { path: '0', component: Error0Component },
  // { path: "**", component: Error404Component }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  relativeLinkResolution: "corrected",
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash: true
};


@NgModule({
  imports: [
    RouterModule.forRoot( routes, routerOptions)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
