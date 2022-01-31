import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOpinonComponent } from './public-opinon.component';

describe('PublicOpinonComponent', () => {
  let component: PublicOpinonComponent;
  let fixture: ComponentFixture<PublicOpinonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOpinonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOpinonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
