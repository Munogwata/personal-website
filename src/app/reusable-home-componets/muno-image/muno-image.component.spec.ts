import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunoImageComponent } from './muno-image.component';

describe('MunoImageComponent', () => {
  let component: MunoImageComponent;
  let fixture: ComponentFixture<MunoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunoImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
