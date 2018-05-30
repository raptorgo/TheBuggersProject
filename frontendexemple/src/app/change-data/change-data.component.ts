import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.css']
})
export class ChangeDataComponent implements OnInit {

  prova= true ;
  prova2= true ;

  cambio(){
    if (this.prova==true){
      this.prova=false;
    }
    else{
      this.prova=true;
    }
  }
  cambio2(){
    if (this.prova2==true){
      this.prova2=false;
    }
    else{
      this.prova2=true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
