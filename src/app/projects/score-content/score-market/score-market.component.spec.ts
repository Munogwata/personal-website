import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreMarketComponent } from './score-market.component';

describe('ScoreMarketComponent', () => {
  let component: ScoreMarketComponent;
  let fixture: ComponentFixture<ScoreMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
