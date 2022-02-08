import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRequirementsComponent } from './score-requirements.component';

describe('ScoreRequirementsComponent', () => {
  let component: ScoreRequirementsComponent;
  let fixture: ComponentFixture<ScoreRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
