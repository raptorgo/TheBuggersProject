import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SortablejsOptions} from 'angular-sortablejs';
import {MachineDialogComponent} from '../machine-dialog/machine-dialog.component';
import {SocketService} from '../services/socket.service';

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
  users = [
    {
      name: 'Forno Riscaldamento',
      avatar: 'Macchina 1',
      details: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage ' +
      'cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta ' +
      'who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue ' +
      'castello caerphilly chalk and cheese. Lancashire.',
      isAdmin: true,
      isCool: false
    },
    {
      name: '2',
      avatar: 'Macchina 2',
      details: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata ' +
      'corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor ' +
      'dictum mauris.',
      isAdmin: false,
      isCool: true
    },
    {
      name: '3',
      avatar: 'Macchina 3',
      details: 'Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney\'s ' +
      'blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats ' +
      'chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. ' +
      'Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter ' +
      'Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack ' +
      'literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.',
      isAdmin: true,
      isCool: true
    },
    {
      name: '4',
      avatar: 'Macchina 4',
      details: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill ' +
      'a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. ' +
      'Always hungry pelt around the house and up and down stairs chasing phantoms.',
      isAdmin: false,
      isCool: false
    }
  ];
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
      ['', 60]
    ],
    options: {
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
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

  checkO(count: number): boolean {
    if (this.users[count + 1]) {
      return true;
    }
    return false;
  }

  trackByFn;
  // trackByFn(index, item) {
  //   return index;
  // }
  constructor(private dialog: MatDialog, private socket: SocketService) {
    this.sort = this.sortable;
    this.socket.onMessage().subscribe((data: any) => {
      let dataTable = this.cchart.wrapper.getDataTable();
      dataTable.setValue(0, 1, data[0].value);
      this.cchart.redraw();
    })
  }

  openDialog(item): void {
    localStorage.setItem('item', JSON.stringify(item));
    if (!this.sort) {
      this.dialog.open(MachineDialogComponent, {
        maxWidth: '100%',
        width: '99%',
        height: '90%'
      }).afterClosed();
    }
  }
  ngOnInit() {
  }

}
