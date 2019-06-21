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
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DragonsRoutingModule,
    FormsModule,
  ],
  declarations: [DragonsComponent, ListComponent, CardComponent, HeaderComponent, TitleComponent, PrimaryButtonComponent, SecondaryButtonComponent, ModalComponent, CreateComponent, EditComponent]
})
export class DragonsModule { }
