import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Model/Order';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-placedorders',
  templateUrl: './placedorders.component.html',
  styleUrls: ['./placedorders.component.css']
})
export class PlacedordersComponent implements OnInit {
  orders:Order;
  u:any={};
  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.AdminPlacedOrders().subscribe(
      data => {
        this.orders = data;
      });    
  }
  
  ProductId(order){
    localStorage.setItem('changestatus',order.orderid);
  }

  onClick(order) {
    this.service.AdminUpdateStatus(order.orderid,order).subscribe();
  }

  ChangeStatus(o){
    console.log(o.orderid);
    this.service.AdminUpdateStatus(o.orderid,o).subscribe();
  }
}
