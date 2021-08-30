import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any={}
  msg;
  
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  Reg(){
    return this.service.RegisterUser(this.user).subscribe(msg=>this.msg="Done");
  }
}
