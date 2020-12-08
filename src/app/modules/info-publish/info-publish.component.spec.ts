import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPublishComponent } from './info-publish.component';

describe('InfoPublishComponent', () => {
  let component: InfoPublishComponent;
  let fixture: ComponentFixture<InfoPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
