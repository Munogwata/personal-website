import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreResearchComponent } from './score-research.component';

describe('ScoreResearchComponent', () => {
  let component: ScoreResearchComponent;
  let fixture: ComponentFixture<ScoreResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
