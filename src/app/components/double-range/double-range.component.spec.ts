import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleRangeComponent } from './double-range.component';

describe('DoubleRangeComponent', () => {
  let component: DoubleRangeComponent;
  let fixture: ComponentFixture<DoubleRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
