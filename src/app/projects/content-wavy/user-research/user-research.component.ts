import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-research',
  templateUrl: './user-research.component.html',
  styleUrls: ['./user-research.component.scss']
})
export class UserResearchComponent implements OnInit {

selectedBeginner:boolean =false;
selectedLearn:boolean= false;
selectedHousehold:boolean= false;
selectedFocus:boolean=false;
selectedExperience:boolean=false;
selectedBad:boolean=false;



  ngOnInit(): void {
  }

toggleBeginner(){
this.selectedBeginner =! this.selectedBeginner;
this.selectedLearn = false;
this.selectedExperience = false;
this.selectedBad = false;
this.selectedFocus = false;

}


toggleLearn(){
this.selectedLearn =! this.selectedLearn;
this.selectedHousehold = false;
this.selectedExperience = false;
this.selectedBad = false;
this.selectedFocus = false;
}

toggleHousehold(){
this.selectedHousehold =! this.selectedHousehold;
this.selectedLearn = false;
this.selectedBeginner = false;
this.selectedBad = false;
this.selectedExperience = false;
this.selectedFocus = false;
}

toggleFocus(){
  this.selectedFocus =! this.selectedFocus;
  this.selectedLearn = false;
this.selectedBeginner = false;
this.selectedBad = false;
this.selectedExperience = false;
this.selectedHousehold = false;

}

toggleExperience(){
  this.selectedExperience =! this.selectedExperience;
  this.selectedLearn = false;
  this.selectedBeginner = false;
  this.selectedBad = false;
  this.selectedFocus = false;
  this.selectedHousehold = false;
}

toggleBad(){
  this.selectedBad =! this.selectedBad;
  this.selectedLearn = false;
  this.selectedBeginner = false;
  this.selectedExperience = false;
  this.selectedFocus = false;
  this.selectedHousehold = false
}


}
