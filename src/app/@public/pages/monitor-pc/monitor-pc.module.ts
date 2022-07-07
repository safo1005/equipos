import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorPcRoutingModule } from './monitor-pc-routing.module';
import { MonitorPcComponent } from './monitor-pc.component';


@NgModule({
  declarations: [
    MonitorPcComponent
  ],
  imports: [
    CommonModule,
    MonitorPcRoutingModule
  ]
})
export class MonitorPcModule { }
