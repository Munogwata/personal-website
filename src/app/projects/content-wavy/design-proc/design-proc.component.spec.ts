import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProcComponent } from './design-proc.component';

describe('DesignProcComponent', () => {
  let component: DesignProcComponent;
  let fixture: ComponentFixture<DesignProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignProcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
