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
