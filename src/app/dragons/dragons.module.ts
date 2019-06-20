import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsComponent } from './dragons.component';
import { DragonsRoutingModule } from './dragons-routing-module';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    DragonsRoutingModule,
  ],
  declarations: [DragonsComponent, ListComponent, CardComponent, HeaderComponent, TitleComponent, PrimaryButtonComponent, SecondaryButtonComponent, ModalComponent]
})
export class DragonsModule { }
