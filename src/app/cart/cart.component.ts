import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Model/Cart';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:Cart;
  activeuser:any = {};
  activationid:number;
  totalproduct:number;
  message:string;
  show:string;

  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.getActiveUser().subscribe(
      data =>{
        this.service.getCarts(data).subscribe(
          data => {
            this.carts = data;
            this.totalproduct=data.length;
          });
        });
  }

  //logout function
  LogOut(){
    this.service.getActiveUser().subscribe(
      data => {
        this.activationid = data.activationid;
        this.activeuser = data;
      });
    this.service.deleteActiveUser(this.activationid).subscribe();
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  PlaceOrder(c:any){
    console.log(c);
    console.log(c.productid);
    localStorage.setItem('cartp',c.productid); //storing product id to locastorage to use it in payment component
  }

  ///deleting the product
  Delete(id:number) {  
    this.service.deleteIssue(id).subscribe(
      ()=> this.message = "Removed Successfully"
    );
    this.show = 'show';
  }

  //For reloading page
  cross(){
    location.reload();
  }

}
