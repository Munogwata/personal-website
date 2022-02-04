import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-research',
  templateUrl: './user-research.component.html',
  styleUrls: ['./user-research.component.scss']
})
export class UserResearchComponent implements OnInit {

selectedBeginner:boolean =false;
selectedLearner:boolean =false;
selectedHousehold:boolean =false;
selectedFocused: boolean =false;
selectedExperienced:boolean =false;
selectedBad:boolean =false;


  ngOnInit(): void {
  }

toggleBeginner(){
  this.selectedBeginner =! this.selectedBeginner;
  this.selectedBad = false;
  this.selectedExperienced = false;
  this.selectedFocused = false;
  this.selectedHousehold = false;
  this.selectedLearner = false;
}

toggleLearner(){
  this.selectedLearner =! this.selectedLearner;
  this.selectedBad = false;
  this.selectedExperienced = false;
  this.selectedFocused = false;
  this.selectedHousehold = false;
  this.selectedBeginner = false;
}


toggleHousehold(){
  this.selectedHousehold=! this.selectedHousehold;
  this.selectedBad = false;
  this.selectedExperienced = false;
  this.selectedFocused = false;
  this.selectedLearner = false;
  this.selectedBeginner = false;
}

toggleFocused(){

  this.selectedFocused=! this.selectedFocused;
  this.selectedBad = false;
  this.selectedExperienced = false;
  this.selectedHousehold = false;
  this.selectedLearner = false;
  this.selectedBeginner = false; 
}

toggleExperienced(){
  this.selectedExperienced=! this.selectedExperienced;
  this.selectedBad = false;
  this.selectedFocused = false;
  this.selectedHousehold= false;
  this.selectedLearner = false;
  this.selectedBeginner = false; 
}

toggleBad(){
  this.selectedBad=! this.selectedBad;
  this.selectedFocused = false;
  this.selectedExperienced = false;
  this.selectedHousehold = false;
  this.selectedLearner = false;
  this.selectedBeginner = false; 

}

}
