import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavVideoFeedComponent } from './uav-video-feed.component';

describe('UavVideoFeedComponent', () => {
  let component: UavVideoFeedComponent;
  let fixture: ComponentFixture<UavVideoFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavVideoFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavVideoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
