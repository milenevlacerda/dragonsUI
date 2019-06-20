import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { DragonsModule } from './dragons/dragons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
