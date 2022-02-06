import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyPrototypeComponent } from './wavy-prototype.component';

describe('WavyPrototypeComponent', () => {
  let component: WavyPrototypeComponent;
  let fixture: ComponentFixture<WavyPrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyPrototypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
