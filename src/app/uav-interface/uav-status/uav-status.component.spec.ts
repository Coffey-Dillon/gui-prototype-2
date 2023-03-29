import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavStatusComponent } from './uav-status.component';

describe('UavStatusComponent', () => {
  let component: UavStatusComponent;
  let fixture: ComponentFixture<UavStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
