import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDayComponent } from './actual-day.component';

describe('ActualDayComponent', () => {
  let component: ActualDayComponent;
  let fixture: ComponentFixture<ActualDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
