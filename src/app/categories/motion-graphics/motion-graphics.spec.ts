import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionGraphics } from './motion-graphics';

describe('MotionGraphics', () => {
  let component: MotionGraphics;
  let fixture: ComponentFixture<MotionGraphics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionGraphics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionGraphics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
