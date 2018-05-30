import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-hometab',
  templateUrl: './chiSiamo.component.html',
  styleUrls: ['./chiSiamo.component.css']
})
export class HometabComponent implements OnInit {


  nome: string;
  pwd: string;

  prova() {

   const hash = sha256.create();
    hash.update(this.pwd);
    hash.hex();
    alert(this.nome + hash);
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
