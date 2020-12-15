import { List } from 'src/app/models/list.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebRequestService } from './../web-request.service';
import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


 interface review {
  username:String,
  review:String
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() public List ;
test=[1,2,3,4,5,6,7,8,9]
  rev={
    Username:"frontend user",
    Review:""
  };
constructor(private web:WebRequestService,private http: HttpClient){}

  ngOnInit(): void {
    
    const details=JSON.parse(localStorage.getItem('user'));
    this.rev.Username=details.email.split('@')[0];
  }
/* pushtest(){
  for( let i=0,i<15; i++){
    this.test.push(i)
  }
  console.log(this.test)
} */
onPost(review:string){
  // this.web.putRev('/home/Sweet Magic',this.tes).subscribe((res)=>{console.log(res)})
  console.log('in onpost')
  console.log(review);
  this.rev.Review=review;

  
  this.http.put(`http://localhost:3000/home/${this.List.Name}`,this.rev).subscribe((res)=>console.log(res));

}
}


