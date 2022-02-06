import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavy',
  templateUrl: './wavy.component.html',
  styleUrls: ['./wavy.component.scss']
})
export class WavyComponent implements OnInit {

  showMe:boolean=true;

  selectedProblemStatement:boolean =false;

  selectedObjectives:boolean=false;

  selectedImpact:boolean=false;
 
  selectedOpportunity:boolean=false;

  selectedCompetition:boolean=false;
  
  selectedResearch:boolean=false;

  selectedFindings:boolean=false;

  selectedConstraints:boolean = false;

  selectedConclusion:boolean = false;

  selectedDesignPrinciples:boolean = false;

  selectedDesignRequirements:boolean =false;

  selectedDesignProcess:boolean = false;
  selectedUiDesign:boolean = false;
  selectedPrototype:boolean = false;


  ngOnInit(): void {
  }

toggleUI(){
  this.selectedUiDesign =! this.selectedUiDesign;
  this.showMe = false;
  this.selectedObjectives =false;
  this.selectedImpact = false;
  this.selectedOpportunity=false
  this.selectedConclusion=false;
  this.selectedConstraints=false;
  this.selectedFindings=false;
  this.selectedResearch=false;
  this.selectedDesignPrinciples=false;
  this.selectedDesignRequirements=false;
  this.selectedCompetition=false;
  this.selectedDesignProcess = false;
  this.selectedDesignProcess = false;

}

togglePrototype(){
  this.selectedPrototype =! this.selectedPrototype ;
  this.showMe = false;
  this.selectedObjectives =false;
  this.selectedImpact = false;
  this.selectedOpportunity=false
  this.selectedConclusion=false;
  this.selectedConstraints=false;
  this.selectedFindings=false;
  this.selectedResearch=false;
  this.selectedDesignPrinciples=false;
  this.selectedDesignRequirements=false;
  this.selectedCompetition=false;
  this.selectedUiDesign = false;
  this.selectedDesignProcess = false;
}


  
  toggleDesignProcess(){
    this.selectedDesignProcess =! this.selectedDesignProcess;
    this.showMe = false;
    this.selectedObjectives =false;
    this.selectedImpact = false;
    this.selectedOpportunity=false
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedResearch=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedCompetition=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;

  }

toggleDesignPrinciples(){
  this.selectedDesignPrinciples =! this.selectedDesignPrinciples;
  this.showMe = false;
  this.selectedObjectives =false;
  this.selectedImpact = false;
  this.selectedOpportunity=false
  this.selectedConclusion=false;
  this.selectedConstraints=false;
  this.selectedFindings=false;
  this.selectedResearch=false;
  this.selectedDesignRequirements=false;
  this.selectedCompetition=false;
  this.selectedDesignProcess = false;
  this.selectedUiDesign = false;
  this.selectedPrototype = false;
}

toggleDesignRequirements(){
  this.selectedDesignRequirements =! this.selectedDesignRequirements;
  this.showMe = false;
  this.selectedObjectives =false;
  this.selectedImpact = false;
  this.selectedOpportunity=false
  this.selectedConclusion=false;
  this.selectedConstraints=false;
  this.selectedFindings=false;
  this.selectedResearch=false;
  this.selectedDesignPrinciples=false;
  this.selectedCompetition=false;
  this.selectedUiDesign = false;
  this.selectedPrototype = false;
}

  toggleButton(){
    this.showMe =! this.showMe
    this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.selectedImpact=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedOpportunity=false;
    this.selectedCompetition=false;
    this.selectedConclusion=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

  toggleCompetition(){
    this.selectedCompetition =! this.selectedCompetition;
    this.showMe = false;
    this.selectedObjectives =false;
    this.selectedImpact = false;
    this.selectedOpportunity=false
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedResearch=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

  toggleProblemStatement(){
    this.selectedProblemStatement =! this.selectedProblemStatement
    this.showMe = false;
    this.selectedObjectives =false;
    this.selectedImpact = false;
    this.selectedOpportunity=false
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedResearch=false;
    this.selectedCompetition=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

  toggleObjectives(){
    this.selectedObjectives =! this.selectedObjectives;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedImpact = false;
    this.selectedOpportunity=false
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedResearch=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

  toggleImpact(){
    this.selectedImpact =! this.selectedImpact;
    this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedOpportunity=false
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedResearch=false;
    this.selectedCompetition=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;

  }

  toggleOpportunity(){
    this.selectedOpportunity =! this.selectedOpportunity;
    this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedImpact=false;
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedResearch=false;
    this.selectedCompetition=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

  toggleResearch(){
    this.selectedResearch =! this.selectedResearch;
    this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedImpact=false;
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedOpportunity=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedCompetition=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  
  }

  toggleConclusion(){
    this.selectedConclusion =! this.selectedConclusion;
    this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedImpact=false;
    this.selectedConstraints=false;
    this.selectedFindings=false;
    this.selectedOpportunity=false;
    this.selectedCompetition=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

  toggleFindings(){
this.selectedFindings =! this.selectedFindings;
this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedImpact=false;
    this.selectedConclusion=false;
    this.selectedConstraints=false;
    this.selectedResearch=false;
    this.selectedOpportunity=false;
    this.selectedCompetition=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;

  }

  toggleConstraints(){
    this.selectedConstraints =! this.selectedConstraints;
    this.selectedObjectives = false;
    this.selectedProblemStatement = false; 
    this.showMe =false;
    this.selectedImpact=false;
    this.selectedConclusion=false;
 
    this.selectedFindings=false;
    this.selectedOpportunity=false;
    this.selectedCompetition=false;
    this.selectedDesignPrinciples=false;
    this.selectedDesignRequirements=false;
    this.selectedUiDesign = false;
    this.selectedPrototype = false;
  }

}
