import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

selectedIntro: boolean = true;
  selectedObjectivesScore: boolean = false;
selectedMarket : boolean = false;
selectedUserResearch: boolean =false;
selectedMainFindings: boolean =false;
selectedScopes:boolean = false;
selectedOutcome:boolean =false;
selectedRequirements: boolean =false;
selectedPrinciples: boolean = false;




  ngOnInit(): void {
  }

  toggleScoreIntro(){
    this.selectedIntro =! this.selectedIntro;

  this.selectedObjectivesScore= false;
this.selectedMarket  = false;
this.selectedUserResearch = false;
this.selectedMainFindings =false;
this.selectedScopes= false;
this.selectedOutcome=false;
this.selectedRequirements=false;
this.selectedPrinciples = false;


  }

toggleDesignPrinciplesScore(){
  this.selectedPrinciples =! this.selectedPrinciples
  this.selectedMarket  = false;
  this.selectedUserResearch = false;
  this.selectedMainFindings =false;
  this.selectedScopes= false;
  this.selectedOutcome=false;
  this.selectedRequirements=false;
  this.selectedIntro=false;


  }

  toggleDesignRequirements(){
    this.selectedRequirements =! this.selectedRequirements;
    this.selectedMarket  = false;
this.selectedUserResearch = false;
this.selectedMainFindings =false;
this.selectedScopes= false;
this.selectedOutcome=false;
this.selectedIntro=false;
this.selectedPrinciples = false;
  }

  toggleObjectivesScore(){
    this.selectedObjectivesScore =! this.selectedObjectivesScore;
    this.selectedIntro = false
  this.selectedMarket  = false;
  this.selectedUserResearch = false;
  this.selectedMainFindings =false;
  this.selectedScopes= false;
  this.selectedOutcome=false;
  this.selectedPrinciples = false;
  this.selectedRequirements=false;
  }


  toggleMarket(){
    this.selectedMarket =! this.selectedMarket;
    this.selectedIntro = false
  this.selectedObjectivesScore  = false;
  this.selectedUserResearch = false;
  this.selectedMainFindings =false;
  this.selectedScopes= false;
  this.selectedOutcome=false;
  this.selectedPrinciples = false;
  this.selectedRequirements=false;
  }
  
  toggleUserResearch(){
    this.selectedUserResearch =! this.selectedUserResearch;
    this.selectedIntro = false
  this.selectedObjectivesScore  = false;
  this.selectedMarket = false;
  this.selectedMainFindings =false;
  this.selectedScopes= false;
  this.selectedOutcome=false;
  this.selectedPrinciples = false;
  this.selectedRequirements=false;
  }

  toggleMainFindings(){
    this.selectedMainFindings =! this.selectedMainFindings;
    this.selectedIntro = false
  this.selectedObjectivesScore  = false;
  this.selectedUserResearch = false;
  this.selectedUserResearch =false;
  this.selectedScopes= false;
  this.selectedOutcome=false;
  this.selectedPrinciples = false;
  this.selectedRequirements=false;
  }

  toggleScopes(){
    this.selectedScopes =! this.selectedScopes;
    this.selectedIntro = false
  this.selectedObjectivesScore  = false;
  this.selectedMarket = false;
  this.selectedUserResearch =false;
  this.selectedMainFindings= false;
  this.selectedOutcome=false;
  this.selectedPrinciples = false;
  this.selectedRequirements=false;
  }

  toggleOutcome(){
    this.selectedOutcome =! this.selectedOutcome;
    this.selectedIntro = false
  this.selectedObjectivesScore  = false;
  this.selectedUserResearch = false;
  this.selectedUserResearch =false;
  this.selectedMainFindings= false;
  this.selectedScopes=false;
  this.selectedPrinciples = false;
  this.selectedRequirements=false;
  }

 

}
