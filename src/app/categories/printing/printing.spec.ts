import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Printing } from './printing';

describe('Printing', () => {
  let component: Printing;
  let fixture: ComponentFixture<Printing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Printing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Printing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
