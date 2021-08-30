import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewComponent } from './preview/preview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SearchPipe } from './pipe/search.pipe';
import { OrderComponent } from './order/order.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditDetailsComponent } from './admin-edit-details/admin-edit-details.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PlacedordersComponent } from './placedorders/placedorders.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { UserService } from './services/user.service';
import { SerachComponent } from './serach/serach.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    PaymentComponent,
    DashboardComponent,
    AdminComponent,
    SearchPipe,
    OrderComponent,
    AdminDashboardComponent,
    AdminEditDetailsComponent,
    AddproductComponent,
    PlacedordersComponent,
    UpdatestatusComponent,
    SerachComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
