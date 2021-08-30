import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  u:any={};

  constructor(private service :UserService) { }

  ngOnInit() {

  }

  Val() {
    //replacing fakepath of image input to a actual path
    this.u.image = (this.u.image).replace('C:\\fakepath', "..\\..\\assets");  
    //adding the products details to the database  
    this.service.AdminAddProduct(this.u).subscribe();
  }
}
