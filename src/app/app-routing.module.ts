import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './page/casas/listar/listar.component';

const routes: Routes = [
  { path: '', component: ListarComponent},
  { path: "casas/list", component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
