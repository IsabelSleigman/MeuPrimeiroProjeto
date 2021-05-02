import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientRegisterComponent } from './components/client/client-register/client-register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
 {
  path: "clients",
  component: ClientCrudComponent
},
 {
  path: "clients/register",
  component: ClientRegisterComponent
},
 {
  path: "clients/update/:id",
  component: ClientUpdateComponent

},
 {
  path: "clients/delete/:id",
  component: ClientDeleteComponent

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
