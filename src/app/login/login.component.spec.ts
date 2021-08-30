import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';
import { TokeninterceptorService } from '../services/tokeninterceptor.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminEditDetailsComponent } from '../admin-edit-details/admin-edit-details.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminComponent } from '../admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CartComponent } from '../cart/cart.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { OrderComponent } from '../order/order.component';
import { PaymentComponent } from '../payment/payment.component';
import { SearchPipe } from '../pipe/search.pipe';
import { PlacedordersComponent } from '../placedorders/placedorders.component';
import { PreviewComponent } from '../preview/preview.component';
import { RegisterComponent } from '../register/register.component';
import { SerachComponent } from '../serach/serach.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        HeaderComponent
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
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
