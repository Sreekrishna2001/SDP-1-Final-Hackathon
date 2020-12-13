import { Restaurant } from './../models/Restaurant';
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, ParamMap} from '@angular/router';
import { WebRequestService } from '../web-request.service';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  public list;
  public review;
  public name;
  public maps={
  o:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2865191031533!2d80.64408442152953!3d16.50080974278647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faba84253e17%3A0x5d12182b8cd75748!2sRasoie!5e0!3m2!1sen!2sin!4v1607848647864!5m2!1sen!2sin"}
  constructor(private web:WebRequestService,private rout:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.review=localStorage.getItem('review');
    // console.log(this.review);
    this.aroute.paramMap.subscribe((params : ParamMap) => {
      this.name = params.get('name');
      console.log(this.name);
    });
    this.web.getOne(this.name)
    .subscribe((data) => {console.log(data); 
      this.list=data[0];
    });
  }
  // map(){
  //   this.name=this.aroute.snapshot.paramMap.get(name)
  // }


}
