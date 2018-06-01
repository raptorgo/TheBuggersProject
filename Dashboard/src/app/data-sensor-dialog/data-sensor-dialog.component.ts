import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-data-sensor-dialog',
  templateUrl: './data-sensor-dialog.component.html',
  styleUrls: ['./data-sensor-dialog.component.css']
})
export class DataSensorDialogComponent implements OnInit {
  @Input() id: number;
  selected = 'Line Chart';
  lineData = new Array();
  lineChartData: any;
  constructor(private api: ApiService) {
    }

  ngOnInit() {
    console.log(this.id);
    this.api.getSensorData(this.id).subscribe((data: Object[]) => {
      this.lineData = data;
console.log(this.lineData)
      this.lineChartData = {
        chartType: 'LineChart',
        dataTable: this.lineData,
        options: {
          height: 420,
          title: 'Company Performance'
        }};
    });
  }

}
