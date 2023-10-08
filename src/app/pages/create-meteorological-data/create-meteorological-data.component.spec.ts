import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeteorologicalDataComponent } from './create-meteorological-data.component';

describe('CreateMeteorologicalDataComponent', () => {
  let component: CreateMeteorologicalDataComponent;
  let fixture: ComponentFixture<CreateMeteorologicalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeteorologicalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMeteorologicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
