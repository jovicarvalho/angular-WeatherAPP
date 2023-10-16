import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDaysListComponent } from './seven-days-list.component';

describe('SevenDaysListComponent', () => {
  let component: SevenDaysListComponent;
  let fixture: ComponentFixture<SevenDaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenDaysListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenDaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
