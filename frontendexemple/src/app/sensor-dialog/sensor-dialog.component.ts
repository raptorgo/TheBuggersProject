import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css']
})
export class SensorDialogComponent implements OnInit {
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

  constructor() {
    this.selected = 'Line Chart';
    this.fSelected[0] = 'Last Day';
  }

  sensorList = ['Temperatura', 'Umidità'];

  ngOnInit() {
  }

  pieChartData1 = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['Temperatura', 60]
    ],
    options: {
      width: 200, height: 420,
      redFrom: 90, redTo: 100,
      yellowFrom: 75, yellowTo: 90,
      minorTicks: 5
    },
  };
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
