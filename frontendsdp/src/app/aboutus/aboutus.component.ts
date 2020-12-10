import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
devs=[
 { name:"M.sree krishna",
       info:"project member",
       contact:"999999999999"
      },
{
   name:"V.jurendra",
   info:"project Lead",
   contact:"99999999999"
 },
 
   {
     name:"harsha",
     info:"project member",
     contact:"99999999999"
   }
  

]
  constructor() { }

  ngOnInit(): void {
  }

}
