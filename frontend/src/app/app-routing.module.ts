import { GastoDeleteComponent } from './components/gasto/gasto-delete/gasto-delete.component';
import { GastoUpdateComponent } from './components/gasto/gasto-update/gasto-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { GastoCrudComponent } from "./views/gasto-crud/gasto-crud.component";
import { GastoCreateComponent } from './components/gasto/gasto-create/gasto-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "gastos",
    component: GastoCrudComponent
  },
  {
    path: "gastos/create",
    component: GastoCreateComponent
  },
  {
    path: "gastos/update/:id",
    component: GastoUpdateComponent
  },
  {
    path: "gastos/delete/:id",
    component: GastoDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
