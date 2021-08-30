import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-edit-details',
  templateUrl: './admin-edit-details.component.html',
  styleUrls: ['./admin-edit-details.component.css']
})
export class AdminEditDetailsComponent implements OnInit {

  u:any={};
  carts:any={};
  order:any={};
  customer:any={};
  constructor(private route:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.GetCart().subscribe(
      data => {
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if(data[index].productid==localStorage.getItem("edit")) //geting stored data from localstorage 
            {
              this.carts = element;
            }            
          }     
      });
  }
  
  //funcction for updating the product details
  Val() {
    this.u.productid=this.carts.productid;
    this.u.image = (this.u.image).replace('C:\\fakepath', "..\\..\\assets"); //replacing the "fakepath" to a real path
    this.service.AdminUpdateDetails(this.carts.productid,this.u).subscribe();
    this.route.navigate(['/admindashboard']);  //redirection to admindashboard
  }
  

}
