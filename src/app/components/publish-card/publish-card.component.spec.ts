import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCardComponent } from './publish-card.component';

describe('PublishCardComponent', () => {
  let component: PublishCardComponent;
  let fixture: ComponentFixture<PublishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
