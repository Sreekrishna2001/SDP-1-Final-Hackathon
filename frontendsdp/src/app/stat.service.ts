import { Injectable } from '@angular/core';
import CanvasJS from './canvasjs.min'
@Injectable({
  providedIn: 'root'
})
export class StatService{

  constructor() { }
  getdata(){
		let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Mon" },
          { y: 55, label: "Tue" },
          { y: 50, label: "Wed" },
          { y: 65, label: "Thu" },
          { y: 95, label: "Fri" },
          { y: 68, label: "Sat" },
          { y: 28, label: "Sun" }
        ]
      }]
    });
      
    chart.render();
  }
}
