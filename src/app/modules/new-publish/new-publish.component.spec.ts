import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPublishComponent } from './new-publish.component';

describe('NewPublishComponent', () => {
  let component: NewPublishComponent;
  let fixture: ComponentFixture<NewPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
