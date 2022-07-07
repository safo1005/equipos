import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'add-pc',
        loadChildren: () => import ('./add-pc/add-pc.module').then(m => m.AddPcModule)
      },
      {
        path: 'monitor-pc',
        loadChildren: () => import ('./monitor-pc/monitor-pc.module').then(m => m.MonitorPcModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
