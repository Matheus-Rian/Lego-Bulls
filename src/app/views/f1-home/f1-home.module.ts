import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { F1HomeRoutingModule } from './f1-home-routing.module';
import { F1HomeComponent } from './f1-home.component';


@NgModule({
  declarations: [
    F1HomeComponent
  ],
  imports: [
    CommonModule,
    F1HomeRoutingModule
  ]
})
export class F1HomeModule { }
