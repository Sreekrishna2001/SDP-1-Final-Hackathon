import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
adminst=true
  constructor() { }

  ngOnInit(): void 
  {
    let a=JSON.parse(localStorage.getItem('user'))
      this.adminst=a.adminstatus
   
  }
}
