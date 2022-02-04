import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignReqComponent } from './design-req.component';

describe('DesignReqComponent', () => {
  let component: DesignReqComponent;
  let fixture: ComponentFixture<DesignReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
