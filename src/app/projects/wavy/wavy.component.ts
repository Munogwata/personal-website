import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavy',
  templateUrl: './wavy.component.html',
  styleUrls: ['./wavy.component.scss']
})
export class WavyComponent implements OnInit {

  showMe:boolean=true
  
 

  ngOnInit(): void {
  }

  toggleButton(){
    this.showMe =! this.showMe
  }

}
