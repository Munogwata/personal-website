import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketComparsionComponent } from './market-comparsion.component';

describe('MarketComparsionComponent', () => {
  let component: MarketComparsionComponent;
  let fixture: ComponentFixture<MarketComparsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketComparsionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketComparsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
