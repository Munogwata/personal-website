import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-research',
  templateUrl: './score-research.component.html',
  styleUrls: ['./score-research.component.scss']
})
export class ScoreResearchComponent implements OnInit {

 
  selectedKlara: boolean =true;
  selectedKarabo: boolean =false;
  selectedJohan: boolean =false;
  selectedRaj: boolean = false;
  selectedJabu: boolean =false;
  selectedZakiyah: boolean =false;
  selectedThabo: boolean =false;


  toggleK(){
    this.selectedKarabo =! this.selectedKarabo;
    this.selectedJabu = false;
    this.selectedJohan = false;
    this.selectedKlara = false;
    this.selectedRaj = false;
    this.selectedThabo = false;
    this.selectedZakiyah = false;
  }

  toggleKlara(){
    this.selectedKlara =! this.selectedKlara;
    this.selectedJabu = false;
    this.selectedJohan = false;
    this.selectedKarabo = false;
    this.selectedRaj = false;
    this.selectedThabo = false;
    this.selectedZakiyah = false;
  }

  toggleJo(){
    this.selectedJohan =! this.selectedJohan;
    this.selectedJabu = false;
    this.selectedKlara = false;
    this.selectedRaj = false;
    this.selectedThabo = false;
    this.selectedZakiyah = false;
  }

  toggleJa(){
    this.selectedJabu =! this.selectedJabu;
    this.selectedJohan = false;
    this.selectedKlara = false;
    this.selectedRaj = false;
    this.selectedThabo = false;
    this.selectedZakiyah = false;
  }

  toggleRaj(){
    this.selectedRaj =! this.selectedRaj;
    this.selectedJohan = false;
    this.selectedKlara = false;
    this.selectedJabu = false;
    this.selectedThabo = false;
    this.selectedZakiyah = false;
  }

  toggleTh(){
    this.selectedThabo =! this.selectedThabo;
    this.selectedJohan = false;
    this.selectedKlara = false;
    this.selectedRaj = false;
    this.selectedJabu = false;
    this.selectedZakiyah = false;
  }


  toggleZakkiyah(){
    this.selectedZakiyah =! this.selectedZakiyah;
    this.selectedJohan = false;
    this.selectedKlara = false;
    this.selectedRaj = false;
    this.selectedThabo = false;
    this.selectedJabu = false;
  }

  ngOnInit(): void {
  }

}
