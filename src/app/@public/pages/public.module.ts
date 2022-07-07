import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { TitleComponent } from '../core/components/title/title.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    TitleComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
