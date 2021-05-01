import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { WelcomeComponent } from 'src/app/components/sections/welcome/welcome.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
