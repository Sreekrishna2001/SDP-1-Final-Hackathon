import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
devs=[
 { name:"M SREE KRISHNA",
       info:"190031020",
       contact:"8106136242"
      },
{
   name:"V JURENDRA CHOWDARY",
   info:"190031671",
   contact:"8985399966"
 },

   {
     name:"G SAI SRIHARSHA",
     info:"190030545",
     contact:"8247372662"
   }


]
  constructor() { }

  ngOnInit(): void {
  }

}
