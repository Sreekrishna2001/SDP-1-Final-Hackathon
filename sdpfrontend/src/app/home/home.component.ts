// import { StatService } from './../stat.service';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../models/Restaurant'
import { WebRequestService } from '../web-request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
 public list;
 public serres;

  constructor(private s:TaskService, private web: WebRequestService, private router:Router) { }

  ngOnInit(): void {
    this.web.get("home")
    .subscribe((data) => { this.list=data;console.log(data)});    
  }

  Review(list)
  {
    // console.log(list);
    
    // console.log(list.Name);
    // localStorage.setItem('review',list.Review);
    this.router.navigate([`/viewdetails/${list.Name}`]);
  }
  // tab2(){
  //   this.stat.getdata()
  // }
  onsearch(key){
    console.log(key);
    this.web.getOne(key)
    .subscribe((data) => {this.list=data;console.log(data); 
      this.serres=data[0];})
    
  }
  onbook(val){
    this.s.rest=val.Name
    console.log(this.s.rest);
    
  }
}
