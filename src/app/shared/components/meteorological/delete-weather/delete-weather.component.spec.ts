import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeatherComponent } from './delete-weather.component';

describe('DeleteWeatherComponent', () => {
  let component: DeleteWeatherComponent;
  let fixture: ComponentFixture<DeleteWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
