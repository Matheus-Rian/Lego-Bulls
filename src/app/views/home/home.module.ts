import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { WelcomeComponent } from 'src/app/components/sections/welcome/welcome.component';
import { ProjectsComponent } from 'src/app/components/sections/projects/projects.component';
import { AwardsComponent } from 'src/app/components/sections/awards/awards.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    WelcomeComponent,
    ProjectsComponent,
    AwardsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
