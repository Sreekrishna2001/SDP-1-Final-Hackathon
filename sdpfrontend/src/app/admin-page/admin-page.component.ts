import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  resname;
  resrating;
  restime;
  resdes;
  resimage;
  ressite;
  constructor(private http:HttpClient, private r:Router)  { }

  ngOnInit(): void {
  }
  onsub(){
    let postres={
      Name:this.resname,
      Rating:this.resrating,
      Url:this.resimage,
      Info:this.resdes,
      LocationInfo:"vijayavada",
      Timings:this.restime+"AM - 10 PM",
      officialurl:this.ressite
    }
    this.http.post('http://localhost:3000/home',postres).subscribe((data)=>{
      console.log(data);
      
    })
    alert('Restaurant Added Successfully')
    this.r.navigate(['home'])
  }

}
