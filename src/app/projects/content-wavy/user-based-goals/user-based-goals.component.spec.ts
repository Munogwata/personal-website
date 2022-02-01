import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasedGoalsComponent } from './user-based-goals.component';

describe('UserBasedGoalsComponent', () => {
  let component: UserBasedGoalsComponent;
  let fixture: ComponentFixture<UserBasedGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasedGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBasedGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
