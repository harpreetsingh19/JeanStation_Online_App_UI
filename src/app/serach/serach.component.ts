import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

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

}
