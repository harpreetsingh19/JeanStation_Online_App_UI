import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  carts:Product;
  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.GetCart().subscribe(
      data => {
        this.carts = data;
      });
  }

  //passing id of product to delete it from databse
  Delete(id){   
    this.service.AdminRemoveProduct(id).subscribe();
  }

  //function for inserting product id in local storage "edit" variable
  Edit(c:any){
    localStorage.setItem('edit',c.productid);
  }

}
