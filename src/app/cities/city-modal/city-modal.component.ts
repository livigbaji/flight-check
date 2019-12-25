import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../states/cities/cities.model';
import { Flight } from '../../states/flights/flights.model';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.css']
})
export class CityModalComponent implements OnInit {

  @Input() city: City;
  @Input() flights: Flight[];
  @Output() flightParamsChanged: EventEmitter<any> = new EventEmitter<any>();
  numbers: number[] = _.range(1, 61);

  flightsForm: FormGroup = this.fb.group({
    flightType: ['arrival', Validators.required],
    begin: [1, Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.flightsForm.valueChanges.subscribe(values => this.submit(values));
  }

  submit(value = null) {
    value = value || this.flightsForm.value;
    this.flightParamsChanged.emit({
      airport: this.city.code,
      ...value
    });
  }

}
