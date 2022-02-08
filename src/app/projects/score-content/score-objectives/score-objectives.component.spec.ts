import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreObjectivesComponent } from './score-objectives.component';

describe('ScoreObjectivesComponent', () => {
  let component: ScoreObjectivesComponent;
  let fixture: ComponentFixture<ScoreObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreObjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
