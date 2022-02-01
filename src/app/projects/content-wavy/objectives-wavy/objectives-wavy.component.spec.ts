import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesWavyComponent } from './objectives-wavy.component';

describe('ObjectivesWavyComponent', () => {
  let component: ObjectivesWavyComponent;
  let fixture: ComponentFixture<ObjectivesWavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesWavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectivesWavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
