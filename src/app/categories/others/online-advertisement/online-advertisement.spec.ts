import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAdvertisement } from './online-advertisement';

describe('OnlineAdvertisement', () => {
  let component: OnlineAdvertisement;
  let fixture: ComponentFixture<OnlineAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineAdvertisement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
