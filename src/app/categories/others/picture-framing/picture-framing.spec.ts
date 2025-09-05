import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureFraming } from './picture-framing';

describe('PictureFraming', () => {
  let component: PictureFraming;
  let fixture: ComponentFixture<PictureFraming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureFraming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureFraming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
