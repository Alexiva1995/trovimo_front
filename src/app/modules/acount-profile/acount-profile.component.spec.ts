import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountProfileComponent } from './acount-profile.component';

describe('AcountProfileComponent', () => {
  let component: AcountProfileComponent;
  let fixture: ComponentFixture<AcountProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
