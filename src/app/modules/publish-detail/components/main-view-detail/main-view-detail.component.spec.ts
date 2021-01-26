import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewDetailComponent } from './main-view-detail.component';

describe('MainViewDetailComponent', () => {
  let component: MainViewDetailComponent;
  let fixture: ComponentFixture<MainViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
