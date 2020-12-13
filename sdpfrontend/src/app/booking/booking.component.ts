import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
date;
nopeople;
time;
table;
res=this.r.rest;
useremail=JSON.parse(localStorage.getItem("user"));
  constructor(private http:HttpClient,private r:TaskService,private rou:Router) { }

  ngOnInit(): void {
    console.log(this.useremail.email);
    
  }

  onSubmit(){ 
    console.log("in submit");
    
    let formdata={
      userName:this.useremail.email,
      RestaurantName:this.res,
      TableNo:this.table,
      date:this.date,
      time:this.time
    }
    console.log(formdata)
    this.http.post('http://localhost:3000/home/book',formdata).subscribe((data)=>{
      console.log(data)
    })
    alert('your booking has been successfully done check your email for confiramation')
    this.rou.navigate(['home'])
  }
}
