import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuteComponent } from './astute.component';

describe('AstuteComponent', () => {
  let component: AstuteComponent;
  let fixture: ComponentFixture<AstuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
