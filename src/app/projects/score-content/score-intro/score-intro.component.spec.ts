import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreIntroComponent } from './score-intro.component';

describe('ScoreIntroComponent', () => {
  let component: ScoreIntroComponent;
  let fixture: ComponentFixture<ScoreIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
