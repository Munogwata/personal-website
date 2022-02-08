import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreScopesComponent } from './score-scopes.component';

describe('ScoreScopesComponent', () => {
  let component: ScoreScopesComponent;
  let fixture: ComponentFixture<ScoreScopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreScopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreScopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
