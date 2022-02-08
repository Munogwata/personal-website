import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreOutcomesComponent } from './score-outcomes.component';

describe('ScoreOutcomesComponent', () => {
  let component: ScoreOutcomesComponent;
  let fixture: ComponentFixture<ScoreOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreOutcomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
