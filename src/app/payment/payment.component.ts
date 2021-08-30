import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carts:any={};
  order:any={};
  customer:any={};
  msg:string;
  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.GetCart().subscribe(
      data => {
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if(data[index].productid==localStorage.getItem("currentproduct"))
            {
              this.carts = element;
              if(this.carts.productid>=1 || this.carts.productid<=3){
                this.carts.price=this.carts.price*0.9;
                this.msg="Congrats You Got 10% Discount";
              }
              else if(this.carts.productid>=4 || this.carts.productid<=5){
                this.carts.price=this.carts.price*0.95;
                this.msg="Congrats You Got 5% Discount";
              }
              else if(this.carts.productid>=6 || this.carts.productid<=7){
                this.carts.price=this.carts.price*0.85;
                this.msg="Congrats You Got 15% Discount";
              }
              else if(this.carts.productid>=8|| this.carts.productid<=10){
                this.carts.price=this.carts.price*0.7;
                this.msg="Congrats You Got 30% Discount";
              }
              else if(this.carts.productid>=10|| this.carts.productid<=12){
                this.carts.price=this.carts.price*0.75;
                this.msg="Congrats You Got 25% Discount";
              }
              else{
                this.carts.price=this.carts.price-100;
              }
            }            
          }      
      });
  }

  onSubmit(customer){
    this.service.GetCart().subscribe(
      data => {
        for (let index = 0; index < data.length; index++) {
          if(data[index].productid==localStorage.getItem("currentproduct"))
          {
            this.service.getActiveUser().subscribe(
              data2 => {
                this.order = Object.assign({}, customer,data[index],data2);
                this.service.AddOrder(this.order).subscribe();
            });
          }
        }
      });     
  }

}
