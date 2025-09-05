import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtPrinting } from './t-shirt-printing';

describe('TShirtPrinting', () => {
  let component: TShirtPrinting;
  let fixture: ComponentFixture<TShirtPrinting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TShirtPrinting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TShirtPrinting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
