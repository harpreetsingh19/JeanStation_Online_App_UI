import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  carts:Product;
  searchText:string;
  activeuser:any = {};
  activationid:number;
  constructor(public service:UserService,private route:Router) { }

  ngOnInit(): void {
    this.service.GetCart().subscribe(
      data => {
        this.carts = data;
    });
  }

  //function for admin logout
  ALOGOUT(){
    localStorage.removeItem("admin");
    this.route.navigate(['/adminlogin']);
  }

}
