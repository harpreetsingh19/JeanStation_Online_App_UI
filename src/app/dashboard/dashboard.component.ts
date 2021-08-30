import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Model/Cart';
import { Product } from '../Model/Product';
import { User } from '../Model/User';
import { Activateuser } from '../Model/Activateuser';


import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carts:Product;
  products:Array<Product> = [];
  cart:any={};
  user:User;
  message : any;
  productid:number;
  stringid:string;
  activeuser:Activateuser;
  activationid:number;
  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.GetCart().subscribe(
      data => {
        this.carts = data;
      });
  }

  AddToCart(c:any){
    this.service.getActiveUser().subscribe(
      data => {
        this.cart = Object.assign({}, c,data);
        this.service.UserCart(this.cart).subscribe();
      });
      alert(c.productname+" added to the cart");
  }

  BuyNow(c:any){
    localStorage.setItem('currentproduct',c.productid);
  }
}
