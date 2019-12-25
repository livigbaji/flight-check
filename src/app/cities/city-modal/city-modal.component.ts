import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../states/cities/cities.model';
import { Flight } from '../../states/flights/flights.model';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.css']
})
export class CityModalComponent implements OnInit {

  @Input() city: City;
  @Input() flights: Flight[];
  @Output() flightParamsChanged: EventEmitter<any> = new EventEmitter<any>();
  numbers: number[] = _.range(1, 60);

  flightsForm: FormGroup = this.fb.group({
    flightType: ['arrivals', Validators.required],
    begin: [1, Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.flightsForm.valueChanges.subscribe( value => {
        console.log({value});
        this.flightParamsChanged.emit({
          airport: this.city.code,
          ...value
        });
    });
  }

}
