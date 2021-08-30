import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Model/Cart';
import { Order } from '../Model/Order';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  Orders:Order;
  carts:any={};
  activeuser:any = {};
  activationid:number;
  toggle:boolean=true;

  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.getActiveUser().subscribe(
      data =>{
        console.log(data);
        this.service.ViewOrderById(data).subscribe(
          data => {
            this.Orders = data;
          });
        });
  }

  LogOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  Delete(o){
    console.log(o);
    this.service.RemoveOrder(o).subscribe();
    this.toggle=false
  }

}
