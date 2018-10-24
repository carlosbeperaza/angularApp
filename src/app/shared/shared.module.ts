import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';

@NgModule({
  imports: [],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  providers: [],
})
export class SharedModule { }
