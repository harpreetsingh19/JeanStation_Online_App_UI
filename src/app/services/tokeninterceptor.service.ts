import { Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req,next){
    let tokenreq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })

    return next.handle(tokenreq)
  }
}
