import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { DragonsComponent } from './dragons.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: DragonsComponent,
  },
  {
    path: 'cadastrar',
    component: CreateComponent,
    outlet: 'modal',
  },
  {
    path: 'editar/:slug',
    component: EditComponent,
    outlet: 'modal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule {}
