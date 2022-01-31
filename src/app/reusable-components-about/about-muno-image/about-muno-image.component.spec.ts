import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMunoImageComponent } from './about-muno-image.component';

describe('AboutMunoImageComponent', () => {
  let component: AboutMunoImageComponent;
  let fixture: ComponentFixture<AboutMunoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMunoImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMunoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
