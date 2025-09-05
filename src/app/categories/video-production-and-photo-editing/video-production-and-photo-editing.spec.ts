import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProductionAndPhotoEditing } from './video-production-and-photo-editing';

describe('VideoProductionAndPhotoEditing', () => {
  let component: VideoProductionAndPhotoEditing;
  let fixture: ComponentFixture<VideoProductionAndPhotoEditing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoProductionAndPhotoEditing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoProductionAndPhotoEditing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
