import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindExpertsComponent } from './find-experts.component';

describe('FindExpertsComponent', () => {
  let component: FindExpertsComponent;
  let fixture: ComponentFixture<FindExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
