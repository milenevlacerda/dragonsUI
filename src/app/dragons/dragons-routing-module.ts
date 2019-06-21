import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { DragonsComponent } from './dragons.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { AuthenticationGuard } from '../core/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: DragonsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'cadastrar',
    component: CreateComponent,
    outlet: 'modal',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'editar/:slug',
    component: EditComponent,
    outlet: 'modal',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'excluir/:slug',
    component: ModalDeleteComponent,
    outlet: 'modal',
    canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule {}
