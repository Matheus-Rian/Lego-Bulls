import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F1HomeComponent } from './f1-home.component';

const routes: Routes = [{ path: '', component: F1HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class F1HomeRoutingModule { }
