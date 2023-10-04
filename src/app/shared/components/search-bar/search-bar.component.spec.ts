import { ComponentFixture, TestBed, tick, waitForAsync  } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from './search-bar.component';
import { ActivatedRoute } from '@angular/router';


describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: 
            "/home"
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should store the value of input inside "cityName" when Enter key is pressed', waitForAsync(async () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    const cityName = 'New York';

    inputElement.value = cityName;
    inputElement.dispatchEvent(new Event('input'));

    const enterEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    inputElement.dispatchEvent(enterEvent);

    await fixture.whenStable(); 
    fixture.detectChanges(); 
    expect(component.cityName).toEqual(cityName);
  }));
});
