import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 checkAnswer(){
   var answer= ((document.getElementById('answerId') as HTMLInputElement).value);
   console.log(answer);
 }
}
