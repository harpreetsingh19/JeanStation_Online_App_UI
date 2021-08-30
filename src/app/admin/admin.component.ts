import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  u:any={};
  error;
  msg:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  //function for verifing admin username and password and logging in
  Val(){
    if(this.u.userid=="admin" && this.u.password=="admin")
    {
      this.route.navigateByUrl('/admindashboard');
      ()=>this.msg="Valid";
      localStorage.setItem("admin","logedin");
    }
    else{
      err=>this.msg="Not Valid !!!"
    }
  }
    

}
