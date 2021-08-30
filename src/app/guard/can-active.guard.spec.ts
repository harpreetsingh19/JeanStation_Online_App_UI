import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { TokeninterceptorService } from '../services/tokeninterceptor.service';
import { UserService } from '../services/user.service';

import { CanActiveGuard } from './can-active.guard';

describe('CanActiveGuard', () => {
  let guard: CanActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
      HeaderComponent ],
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
    }]});
    guard = TestBed.inject(CanActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
