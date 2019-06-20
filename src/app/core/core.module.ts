import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonsService } from './services/dragons/dragons.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DragonsService],
  declarations: []
})
export class CoreModule { }
