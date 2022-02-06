import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDocumentsComponent } from './design-documents.component';

describe('DesignDocumentsComponent', () => {
  let component: DesignDocumentsComponent;
  let fixture: ComponentFixture<DesignDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
