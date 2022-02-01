import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavy',
  templateUrl: './wavy.component.html',
  styleUrls: ['./wavy.component.scss']
})
export class WavyComponent implements OnInit {

  showMe:boolean=true;

  selectedProblemStatement:boolean =false;
 

  ngOnInit(): void {
  }

  toggleButton(){
    this.showMe =! this.showMe
    this.selectedProblemStatement =! this.selectedProblemStatement
  }

  toggleProblemStatement(){
    this.selectedProblemStatement =! this.selectedProblemStatement
    this.showMe =! this.showMe
  }

}
