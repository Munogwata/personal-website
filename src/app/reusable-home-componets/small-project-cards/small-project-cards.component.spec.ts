import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProjectCardsComponent } from './small-project-cards.component';

describe('SmallProjectCardsComponent', () => {
  let component: SmallProjectCardsComponent;
  let fixture: ComponentFixture<SmallProjectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallProjectCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
