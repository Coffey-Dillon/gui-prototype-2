import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavCommandsComponent } from './uav-commands.component';

describe('UavCommandsComponent', () => {
  let component: UavCommandsComponent;
  let fixture: ComponentFixture<UavCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
