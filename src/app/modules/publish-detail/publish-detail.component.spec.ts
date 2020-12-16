import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishDetailComponent } from './publish-detail.component';

describe('PublishDetailComponent', () => {
  let component: PublishDetailComponent;
  let fixture: ComponentFixture<PublishDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
