import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
  object = 'Macchina 1';
  description = 'Macchina dotata di 2 sensori';
  modifyB = false;
  objectB;
  descriptionB;
  // item;
  constructor() {
    this.objectB = this.object;
    this.descriptionB = this.description;
    // this.item = JSON.parse(localStorage.getItem('item'));
  }
  ngOnInit() {
  }
  toggle () {
    if (this.modifyB) {
      this.modifyB = false;
    } else {
      this.modifyB = true;
    }
  }
  modify (action : string) {
    if (action == "ok") {
      this.object = this.objectB;
      this.description = this.descriptionB;
    }
    this.modifyB = false;
    this.objectB = this.object;
    this.descriptionB = this.description;
  }
}
