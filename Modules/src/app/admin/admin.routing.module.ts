import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { UserComponent } from './pages/user.component';
import { RightsComponent } from './pages/rights.component';
import { DashboardComponent } from './pages/dashboard.component';
 
const routes: Routes = [
  {   path: 'dashboard',   component: DashboardComponent   },
  {   path: 'user',   component: UserComponent   },
  {   path: 'rights',   component: RightsComponent   },
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }