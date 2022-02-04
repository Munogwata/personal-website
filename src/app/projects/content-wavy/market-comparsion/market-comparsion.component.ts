import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-comparsion',
  templateUrl: './market-comparsion.component.html',
  styleUrls: ['./market-comparsion.component.scss']
})
export class MarketComparsionComponent implements OnInit {

selectedEE:boolean=true;
selectedFC:boolean=false;
selectedSH:boolean=false;

selectedRD:boolean=false;
selectedSHU:boolean=false;
selectedAS:boolean=false;




  ngOnInit(): void {
  }


toggleEE(){
  this.selectedEE =! this.selectedEE;
  this.selectedFC = false;
  this.selectedAS = false;
  this.selectedSH = false;
  this.selectedSHU = false;
  this.selectedRD = false;
}

toggleFC(){
  this.selectedFC =! this.selectedFC;
  this.selectedEE = false;
  this.selectedAS = false;
  this.selectedSH = false;
  this.selectedSHU = false;
  this.selectedRD = false;
}

toggleSH(){
  this.selectedSH =! this.selectedSH;
  this.selectedEE = false;
  this.selectedAS = false;
  this.selectedFC = false;
  this.selectedSHU = false;
  this.selectedRD = false;
}

toggleRD(){
  this.selectedRD =! this.selectedRD;
  this.selectedEE = false;
  this.selectedAS = false;
  this.selectedFC = false;
  this.selectedSHU = false;
  this.selectedSH = false;
}

toggleSHU(){
  this.selectedSHU =! this.selectedSHU;
  this.selectedEE = false;
  this.selectedAS = false;
  this.selectedFC = false;
  this.selectedSH = false;
  this.selectedRD = false;
}

toggleAS(){
  this.selectedAS =! this.selectedAS;
  this.selectedEE = false;
  this.selectedSH = false;
  this.selectedFC = false;
  this.selectedSHU = false;
  this.selectedRD = false;
}


}
