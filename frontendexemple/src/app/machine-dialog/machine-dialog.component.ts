import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-machine-dialog',
  templateUrl: './machine-dialog.component.html',
  styleUrls: ['./machine-dialog.component.css']
})
export class MachineDialogComponent implements OnInit {
  sensorView: boolean;
  infoView: boolean;
  segnalView: boolean;
  constructor() {
    this.sensorView = true;
    this.infoView = false;
    this.segnalView = false;
  }
  ngOnInit() {
  }
}
