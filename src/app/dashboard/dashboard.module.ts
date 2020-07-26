import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { InboxComponent } from './inbox/inbox.component';
import { SpanComponent } from './span/span.component';
import { TashComponent } from './tash/tash.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { InfoDetailsComponent } from './info-details/info-details.component';



@NgModule({
  declarations: [LayoutComponent, InboxComponent, SpanComponent, TashComponent, InfoDetailsComponent],
  imports: [
    CommonModule, DashboardRoutingModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
