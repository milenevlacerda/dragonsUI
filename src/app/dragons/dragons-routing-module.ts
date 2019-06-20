import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { DragonsComponent } from './dragons.component';

const routes: Routes = [
  {
    path: '',
    component: DragonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule {}
