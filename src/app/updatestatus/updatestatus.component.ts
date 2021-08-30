import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
  u:any={};
  id:number=Number(localStorage.getItem("changestatus"));
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  Val(u) {
    this.u.orderid=this.id;  
    this.service.AdminUpdateStatus(this.id,this.u).subscribe();
  }

}
