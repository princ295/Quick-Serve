import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpanComponent } from './span/span.component';
import { TashComponent } from './tash/tash.component';
import { InboxComponent } from './inbox/inbox.component';
import { LayoutComponent } from './layout/layout.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { GuardGuard } from '../guard/guard.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent , canActivate: [GuardGuard],
    children:
    [
      {
        path: 'inbox', component: InboxComponent
      },
      {
        path: 'tash', component: TashComponent
      },
      {
        path: 'sapn', component: SpanComponent
      },
    ]
  }, {
    path: 'detail/:id' ,component: InfoDetailsComponent, canActivate: [GuardGuard]
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
