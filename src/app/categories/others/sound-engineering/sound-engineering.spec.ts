import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundEngineering } from './sound-engineering';

describe('SoundEngineering', () => {
  let component: SoundEngineering;
  let fixture: ComponentFixture<SoundEngineering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundEngineering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundEngineering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
