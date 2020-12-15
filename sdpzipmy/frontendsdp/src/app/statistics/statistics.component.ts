import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Statistics Of Website Traffic"
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
