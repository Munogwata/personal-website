import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFindingsComponent } from './main-findings.component';

describe('MainFindingsComponent', () => {
  let component: MainFindingsComponent;
  let fixture: ComponentFixture<MainFindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
