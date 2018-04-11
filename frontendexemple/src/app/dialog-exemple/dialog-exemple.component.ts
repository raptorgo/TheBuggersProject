import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-exemple',
  templateUrl: './dialog-exemple.component.html',
  styleUrls: ['./dialog-exemple.component.css']
})
export class DialogExempleComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

}
