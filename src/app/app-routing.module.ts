import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditDetailsComponent } from './admin-edit-details/admin-edit-details.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActiveGuard } from './guard/can-active.guard';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { PlacedordersComponent } from './placedorders/placedorders.component';
import { PreviewComponent } from './preview/preview.component';
import { RegisterComponent } from './register/register.component';
import { SerachComponent } from './serach/serach.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';

const routes: Routes = [
  {path:'',redirectTo:'/preview',pathMatch:'full'},
  {path:'preview',component:PreviewComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminComponent},
  {path:'search',component:SerachComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[CanActiveGuard]},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'admindashboard/placedorders/changestatus',component:UpdatestatusComponent},
  {path:'admindashboard/addproduct',component:AddproductComponent},
  {path:'admindashboard/placedorders',component:PlacedordersComponent},
  {path:'admindashboard/adminEditdetails',component:AdminEditDetailsComponent},
  {path:'order',component:OrderComponent},
  {path:'dashboard/cart',component:CartComponent,canActivate:[CanActiveGuard]},
  {path:'dashboard/payment',component:PaymentComponent,canActivate:[CanActiveGuard],pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
