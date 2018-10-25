import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutesModule } from './pages.routes';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutesModule,
    FormsModule,
    // LoginGuardGuard
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  providers: [
    // LoginGuardGuard
  ],
})
export class PagesModule { }
