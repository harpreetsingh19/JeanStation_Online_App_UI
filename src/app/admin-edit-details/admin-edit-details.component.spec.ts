import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { TokeninterceptorService } from '../services/tokeninterceptor.service';
import { UserService } from '../services/user.service';

import { AdminEditDetailsComponent } from './admin-edit-details.component';

describe('AdminEditDetailsComponent', () => {
  let component: AdminEditDetailsComponent;
  let fixture: ComponentFixture<AdminEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditDetailsComponent ,
        AdminHeaderComponent ],
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
    fixture = TestBed.createComponent(AdminEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
