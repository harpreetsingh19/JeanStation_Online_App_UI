import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { TokeninterceptorService } from '../services/tokeninterceptor.service';
import { UserService } from '../services/user.service';

import { AddproductComponent } from './addproduct.component';

describe('AddproductComponent', () => {
  let component: AddproductComponent;
  let fixture: ComponentFixture<AddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductComponent,
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
    fixture = TestBed.createComponent(AddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    const fixture = TestBed.createComponent(AddproductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#a').textContent).toContain('Add product');
  });
});
