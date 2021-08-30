import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Model/Cart';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

  LogOut(){
    this.service.getActiveUser().subscribe(
      data => {
        this.activationid = data.activationid;
        this.activeuser = data;
      });
    this.service.deleteActiveUser(this.activationid).subscribe();
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
