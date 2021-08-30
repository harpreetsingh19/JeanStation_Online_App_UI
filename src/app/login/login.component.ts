import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error;
  msg:any;
  u:any={};

  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.route.navigate(['/dashboard']);
    }
  }

  Val(activeuser){
    this.service.Validate(this.u).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      console.log(this.u.userid);
      this.route.navigateByUrl('/dashboard');
      ()=>this.msg="Valid";
    },
    error => this.msg="Not Valid!!!"
    );
    this.service.addActiveUser(activeuser).subscribe();
  }

  register(){
    this.route.navigate(['register']);
  }
  
  login(){
    this.route.navigate(['login']);
  }
}
