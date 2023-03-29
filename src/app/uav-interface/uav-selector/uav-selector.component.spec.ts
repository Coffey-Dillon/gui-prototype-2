import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavSelectorComponent } from './uav-selector.component';

describe('UavSelectorComponent', () => {
  let component: UavSelectorComponent;
  let fixture: ComponentFixture<UavSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
