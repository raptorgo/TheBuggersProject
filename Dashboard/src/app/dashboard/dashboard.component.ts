import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SortablejsOptions} from 'angular-sortablejs';
import {MachineDialogComponent} from '../machine-dialog/machine-dialog.component';
import {SocketService} from '../services/socket.service';
import {ActivatedRoute, Route} from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('cchart') cchart;
  @ViewChild('lchart') lchart;
  counter = 0;
  @Input () sortable: boolean;
  sections = new Array();
  selected: string = "Line Chart";
  public lineChartData: any =  {
    chartType: 'LineChart',
    // dataTable: [
    //   ['Year', ''],
    //   ['2004',  1000],
    //   ['2005',  1170],
    //   ['2006',  660],
    //   ['2007',  1030]
    // ],
    dataTable: [
      ['Year', ''],
      ['2004',  1000]
    ],
    options: {title: 'Company Performance'}
  };
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
  sort: boolean = this.sortable;
  sortableDisabled: SortablejsOptions = {
    disabled: true
  };
  sortableEnabled: SortablejsOptions = {
    disabled: false
  };
  toggle() {
    if(this.sort) {
      this.sort = false;
    } else {
      this.sort = true;
    }
  }
  getSortableOptions (): SortablejsOptions {
    if (this.sort) {
      return this.sortableEnabled;
    }
    return this.sortableDisabled;
  }
  increment(count: number): number {
    console.log(count);
    let temp = count + 1;
    console.log(temp);
    return temp;
  }

  check(count: number): boolean {
    if (count == 0) {
      return true;
    } else {
      if (count % 3 == 0) {
        return true;
      }
    }
    return false;
  }

  // checkO(count: number): boolean {
  //   if (this.users[count + 1]) {
  //     return true;
  //   }
  //   return false;
  // }

  trackByFn;
  // trackByFn(index, item) {
  //   return index;
  // }
  lastFiveData = new Array();
  constructor(private dialog: MatDialog,
              private socket: SocketService,
              private route: ActivatedRoute,
              private api: ApiService) {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.api.getCompanySections(this.id).subscribe((data: Object[]) => {
        this.sections = data;
        console.log(data);
      });
    });
    this.sort = this.sortable;
    this.socket.onMessage().subscribe((data: any) => {
      if (this.lastFiveData.length < 5) {
        console.log(data[0]);
        this.lastFiveData.splice(0, 0, data[0]);
        // this.lastFiveData.push(data[0]);
      } else if (this.lastFiveData.length === 5) {
        this.lastFiveData.splice(0, 0, data[0]);
        this.lastFiveData.splice(5, 1);
        // this.lastFiveData.push(data[0]);

      }
      let dataTable = this.cchart.wrapper.getDataTable();
      dataTable.setValue(0, 1, data[0].value);
      console.log(this.lastFiveData)
      this.cchart.redraw();
    })
  }

  openDialog(id): void {
    localStorage.setItem('item', JSON.stringify(id));
    if (!this.sort) {
      this.dialog.open(MachineDialogComponent, {
        maxWidth: '100%',
        width: '99%',
        height: '90%',
        data: {id: id}
      }).afterClosed();
    }
  }
  id: number;
  ngOnInit() {

  }

}
