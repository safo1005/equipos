import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPcComponent } from './add-pc.component';

const routes: Routes = [
  {
    path: '', component: AddPcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPcRoutingModule { }
