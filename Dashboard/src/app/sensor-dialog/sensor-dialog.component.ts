import {Component, Input, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';
import {ViewChild} from '@angular/core';
import { ChartErrorEvent } from 'ng2-google-charts';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css']
})
export class SensorDialogComponent implements OnInit {
  @ViewChild('cchart') cchart;
  @ViewChild('cchart1') cchart1;
  @Input() id: number;
  lastFiveData = new Array();
  selected: string;
  fSelected: string[] = new Array();
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  // ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];/
  public barChartLabels: string[] = ['esigneza', 'info', 'acquisto', 'attesa', 'fruizione', 'post'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public columnChartData2:any =  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Country', 'Performance'],
      ['Germany', 0],
      ['USA', 0],
      ['Brazil', 0],
      ['Canada', 0],
      ['France', 0],
      ['RU', 0]
    ],
    options: {
      title: 'Countries',
      animation:{
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };

  public changeData2():void {
    let dataTable = this.cchart.wrapper.getDataTable();
    for (let i = 0; i < 6; i++) {
      dataTable.setValue(i, 1, Math.round(Math.random() * 1000));
      dataTable.setValue(i, 2, Math.round(Math.random() * 1000));
    }
    this.cchart.redraw();
  }
  public gaugeChartData: any = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['', 400]
    ],
    options: {
      redFrom: 550, redTo: 600,
      yellowFrom: 500, yellowTo: 550,
      minorTicks: 2,
      min: 400,
      max: 600,
      animation: {
        duration: 1000,
        easing: 'out'},
    }
  };

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public barChartData: any[] = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    {data: [0, 2, -2, 4, 3, 10, 8, -5, 5, 15, -15, 0], label: 'Series B'}
  ];
  public error(event: ChartErrorEvent) {
    console.log(event)
  }
  lineData = new Array();
  lineData1 = new Array();
  machineId;
  constructor(private socket: SocketService, private api: ApiService) {
    // this.machineId = JSON.parse(localStorage.getItem('item'));
  }
  ready(event) {
  }
  redrawLineChart () {
  }
  // setInterval (function(){this.redrawLineChart()}, 3000);
  sensorList = new Array();
  ngOnInit() {
    this.api.getCompanySensor(this.id).subscribe((data: Object[]) => {
      this.sensorList = data;
    });
    console.log("top top" + this.id);
    this.api.getSensorData(this.id).subscribe((data: Object[]) => {
      this.lineData = data;
      console.log(this.lineData);

      this.lineChartData = {
        chartType: 'LineChart',
        dataTable: this.lineData,
        options: {
          height: 420,
          title: 'Company Performance'
        }
      };

    });
    this.socket.onMessage().subscribe((data: any) => {
      if (this.lastFiveData.length < 5) {
        this.lastFiveData.splice(0, 0, data[0]);
      } else if (this.lastFiveData.length === 5) {
        this.lastFiveData.splice(0, 0, data[0]);
        this.lastFiveData.splice(5, 1);
      }
      let dataTable = this.cchart.wrapper.getDataTable();
      dataTable.setValue(0, 1, data[0].value);
      this.cchart.redraw();
    })
  }
  lineChartData: any;
}
