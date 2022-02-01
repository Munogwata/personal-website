import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyOpportunityComponent } from './wavy-opportunity.component';

describe('WavyOpportunityComponent', () => {
  let component: WavyOpportunityComponent;
  let fixture: ComponentFixture<WavyOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
