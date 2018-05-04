import { Component, OnInit } from '@angular/core';
import {DialogExempleComponent} from '../dialog-exemple/dialog-exemple.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  openDialog(): void {
    this.dialog.open(DialogExempleComponent, {
      width: '99%',
      height: '90%'
    }).afterClosed();

  }
  ngOnInit() {
  }

}
