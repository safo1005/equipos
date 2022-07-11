import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorPcRoutingModule } from './monitor-pc-routing.module';
import { MonitorPcComponent } from './monitor-pc.component';
import { TablePaginationModule } from '@shared/table-pagination/table-pagination.module';


@NgModule({
  declarations: [
    MonitorPcComponent
  ],
  imports: [
    CommonModule,
    MonitorPcRoutingModule,
    TablePaginationModule
  ]
})
export class MonitorPcModule { }
