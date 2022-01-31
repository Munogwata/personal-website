import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFeaturesComponent } from './media-features.component';

describe('MediaFeaturesComponent', () => {
  let component: MediaFeaturesComponent;
  let fixture: ComponentFixture<MediaFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
