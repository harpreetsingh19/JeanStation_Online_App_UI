import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
import{Cart} from '../Model/Cart';
import { Product } from '../Model/Product';
import { Order } from '../Model/Order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  RegisterUser(User): Observable<User> {
    return this.http.post<User>('http://localhost:58503/api/Auth/register',User);
  }

  Validate(User:string):Observable<User>{
    return this.http.post<User>('http://localhost:58503/api/Auth/validate',User);
  }

  GetCart(): Observable<any> {
     //this.http.get<Product>("http://localhost:54140/api/admins/getproducts");

    return this.http
      .get<any>("http://localhost:54140/api/admins/getproducts", {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      });
  }

  getCarts(userid): Observable<any> {
    return this.http.post<any>("http://localhost:52560/api/Carts/getcartsbyuserid",userid);
  }
  
  token:string=localStorage.getItem('token');

  private get _authHeader(): string {
    return `Bearer ${this.token}`;
  }

  AddOrder(order:Order): Observable<Order> {
    return this.http.post<Order>("http://localhost:54151/api/orders",order);
  }

  UserCart(product:Product): Observable<Product> {
    // const headerhttp=new HttpHeaders({
    //   'Authorization':'bearer'+this.token
    // });
    return this.http.post<Product>("http://localhost:52560/api/carts",product);

    
    

    //return this.http.post<Cart>("http://localhost:52560/api/carts",product,{headers:headerhttp});
    //return this.http.post<any>("http://localhost:52560/api/carts",product,new HttpHeaders(){"Authorization":"bearer"+this.token});

  }
  
  ViewUserCart(): Observable<Cart> {
    return this.http.get<Cart>("http://localhost:52560/api/carts");
  }
  deleteIssue(id: any): Observable<any> {
    return this.http.delete<any>("http://localhost:52560/api/carts/"+id);
  }

  ViewOrder(): Observable<Order> {
    return this.http.get<Order>("http://localhost:54151/api/orders");
  }

  ViewOrderById(id): Observable<Order> {
    return this.http.post<Order>("http://localhost:54151/api/orders/getordersbyuserid",id);
  }
  
  RemoveOrder(id: any): Observable<any> {
    return this.http.delete<any>("http://localhost:54151/api/orders/"+id);
  }

  AdminRemoveProduct(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:54140/api/admins/"+id);
  }

  AdminAddProduct(product:Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:54140/api/admins",product);
  }

  AdminPlacedOrders():Observable<any>{
    return this.http.get<any>("http://localhost:54151/api/orders");
  }

  AdminUpdateDetails(id:number,p:Product):Observable<any>{
    return this.http.put<any>("http://localhost:54140/api/admins/"+id,p)
  }

  AdminUpdateStatus(id:number,p:Order):Observable<any>{
    return this.http.put<any>("http://localhost:54151/api/orders/"+id,p)
  }


  addActiveUser(activeuser):Observable<any>{
    return this.http.post<any>('http://localhost:58503/api/Auth/addactiveuser',activeuser);
  }
  getActiveUser():Observable<any>{
    return this.http.get<any>('http://localhost:58503/api/Auth/lastuser');
  }
  deleteActiveUser(activeuserid):Observable<any>{
    return this.http.post<any>('http://localhost:58503/api/Auth/deleteactiveuser',activeuserid);
  }

  IsLogedIn(){
    return !!localStorage.getItem('token');
  }  

  AdminLogedIn(){
    return !!localStorage.getItem('admin');
  }
}
