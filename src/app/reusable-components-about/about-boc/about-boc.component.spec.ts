import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBocComponent } from './about-boc.component';

describe('AboutBocComponent', () => {
  let component: AboutBocComponent;
  let fixture: ComponentFixture<AboutBocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
