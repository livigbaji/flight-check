import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFlightListComponent } from './city-flight-list.component';

describe('CityFlightListComponent', () => {
  let component: CityFlightListComponent;
  let fixture: ComponentFixture<CityFlightListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityFlightListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
