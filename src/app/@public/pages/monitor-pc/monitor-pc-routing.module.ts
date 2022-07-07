import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorPcComponent } from './monitor-pc.component';

const routes: Routes = [
  {
    path: '', component: MonitorPcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorPcRoutingModule { }
