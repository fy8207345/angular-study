import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { AdminRoutingModule } from './admin.routing.module';
 
import { UserComponent } from './pages/user.component';
import { RightsComponent } from './pages/rights.component';
import { DashboardComponent } from './pages/dashboard.component';
 
@NgModule({
  declarations: [UserComponent,RightsComponent,DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }