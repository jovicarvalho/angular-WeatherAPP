import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWeatherComponent } from './list-weather.component';

describe('ListWeatherComponent', () => {
  let component: ListWeatherComponent;
  let fixture: ComponentFixture<ListWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
