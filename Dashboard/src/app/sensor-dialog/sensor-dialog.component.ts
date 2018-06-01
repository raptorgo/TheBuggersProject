import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';
import {ViewChild} from '@angular/core';
import { ChartErrorEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css']
})
export class SensorDialogComponent implements OnInit {
  @ViewChild('cchart') cchart;

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
      ['Country', 'Performance', 'Profits'],
      ['Germany', 0, 0],
      ['USA', 0, 0],
      ['Brazil', 0, 0],
      ['Canada', 0, 0],
      ['France', 0, 0],
      ['RU', 0, 0]
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
  public pieChartData1: any = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['Temperatura', 60]
    ],
    options: {
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
  //line chart
  // ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  public lineChartLabels: Array<any> = ['', 'esigenza', '', 'info', '', 'acquisto', '', 'attesa', '', 'fruizione', '', 'post'];
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  //pie chart
  public pieChartOptions: any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales'];
  public pieChartData: number[] = [300, 500];
  public pieChartType: string = 'pie';

  constructor(private socket: SocketService) {
    this.selected = 'Line Chart';
    this.fSelected[0] = 'Last Day';
  }
  ready(event) {
    this.socket.onMessage().subscribe((data: any) => {
      let dataTable = this.cchart.wrapper.getDataTable();
      dataTable.setValue(0, 1, data[0].value);
      this.cchart.redraw();
      // this.pieChartData1.dataTable = Object.create(this.pieChartData1.dataTable);
      // this.pieChartData1.dataTable[0][1] = 25
      // this.cchart.redraw();
      console.log('Old = ' + data);
      console.log('New ' + data[0].value);
    })
  }

  sensorList = ['Temperatura', 'Umidità'];

  ngOnInit() {

  }



  lineChartData = {
    chartType: 'LineChart',
    dataTable: [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]
    ],
    options: {
      height: 420,
      title: 'Company Performance'
    }
  };
}
