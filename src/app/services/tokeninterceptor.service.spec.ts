import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { TokeninterceptorService } from './tokeninterceptor.service';
import { UserService } from './user.service';

describe('TokeninterceptorService', () => {
  let service: TokeninterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    service = TestBed.inject(TokeninterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
