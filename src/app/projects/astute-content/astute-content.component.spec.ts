import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuteContentComponent } from './astute-content.component';

describe('AstuteContentComponent', () => {
  let component: AstuteContentComponent;
  let fixture: ComponentFixture<AstuteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstuteContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstuteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
