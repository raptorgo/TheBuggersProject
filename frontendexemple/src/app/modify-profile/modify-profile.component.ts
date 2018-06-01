import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.css']
})
export class ModifyProfileComponent implements OnInit {

  constructor() {
    console.log("Modifica profilo");
  }

  ngOnInit() {
  }

}
