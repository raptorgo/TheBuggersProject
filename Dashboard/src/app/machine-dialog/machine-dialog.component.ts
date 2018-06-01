import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-machine-dialog',
  templateUrl: './machine-dialog.component.html',
  styleUrls: ['./machine-dialog.component.css']
})
export class MachineDialogComponent implements OnInit {
  sensorView: boolean;
  infoView: boolean;
  segnalView: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MachineDialogComponent>) {
    this.sensorView = true;
    this.infoView = false;
    this.segnalView = false;
  }
  closeDialog () {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
