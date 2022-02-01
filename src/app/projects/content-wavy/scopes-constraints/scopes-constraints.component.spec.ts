import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopesConstraintsComponent } from './scopes-constraints.component';

describe('ScopesConstraintsComponent', () => {
  let component: ScopesConstraintsComponent;
  let fixture: ComponentFixture<ScopesConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopesConstraintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopesConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
