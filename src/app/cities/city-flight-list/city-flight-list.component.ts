import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-city-flight-list',
  templateUrl: './city-flight-list.component.html',
  styleUrls: ['./city-flight-list.component.css']
})
export class CityFlightListComponent implements OnInit {

  @Input() flights;

  constructor() { }

  ngOnInit() {
  }

}
