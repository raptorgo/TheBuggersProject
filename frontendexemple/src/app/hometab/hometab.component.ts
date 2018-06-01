import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.component.html',
  styleUrls: ['./hometab.component.css']
})
export class HometabComponent implements OnInit {

  nome: string;
  pwd: string;

  prova() {
    alert(this.nome + this.pwd);
  }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
