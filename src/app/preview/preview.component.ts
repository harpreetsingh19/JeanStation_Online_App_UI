import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  carts:Product;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.GetCart().subscribe(
      data => {
        this.carts = data;
      });
  }
}
