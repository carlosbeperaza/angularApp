import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje: number = 50;

  constructor() { }

  ngOnInit() {
  }

  changeValue(valor:number){
    if(this.porcentaje >= 100 && valor > 0) {
      this.porcentaje=100; 
      return;
    }
    if(this.porcentaje <= 0 && valor < 0) {
      this.porcentaje=0;
      return;
    }

    this.porcentaje += valor;
  }

}
