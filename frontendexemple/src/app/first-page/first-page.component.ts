import { Component, OnInit } from '@angular/core';
import {}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('tua mamma puttana');
  }

  var particleJS: any;

  particlesJS.load('particlesJs', 'assets/configParticle.json', function(){
    console.log('particles.json loaded...')
  });

}
