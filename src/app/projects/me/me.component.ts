import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

selectedIntro:boolean = true;
selectedObjectives: boolean =false;
selectedPrinciples: boolean =false;
selectedRequirements: boolean = false;

toggleIntro(){
  this.selectedIntro =! this.selectedIntro;
  this.selectedObjectives =false;
  this.selectedPrinciples = false;
  this.selectedRequirements = false;

 }
 toggleObjectives(){
  this.selectedObjectives =! this.selectedObjectives;
  this.selectedIntro =false;
  this.selectedPrinciples = false;
  this.selectedRequirements = false;

 }

 togglePrinciples(){
  this.selectedPrinciples =! this.selectedPrinciples;
  this.selectedIntro =false;
  this.selectedObjectives = false;
  this.selectedRequirements = false;

 }

 toggleRequirements(){
  this.selectedRequirements =! this.selectedRequirements;
  this.selectedObjectives =false;
  this.selectedPrinciples = false;
  this.selectedIntro = false;

 }

  ngOnInit(): void {
  }

 
}
