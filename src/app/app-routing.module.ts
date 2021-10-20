import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  },
  {
    path: "charts",
    component: ChartsComponent,
  },
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path:"user-list",
    component:UserListComponent,
  
  },
  {
    path:"user-create",
    component:UserCreateComponent
    
  },
  {
    path:"user-edit/:id",
    component:UserEditComponent
  },
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
