import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePrinciplesComponent } from './score-principles.component';

describe('ScorePrinciplesComponent', () => {
  let component: ScorePrinciplesComponent;
  let fixture: ComponentFixture<ScorePrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorePrinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
