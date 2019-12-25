import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../states/cities/cities.model';


@Component({
  selector: 'app-city-list-item',
  templateUrl: './city-list-item.component.html',
  styleUrls: ['./city-list-item.component.css']
})
export class CityListItemComponent implements OnInit {

  @Input() city: City;
  @Output() citySelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectCity() {
    this.citySelected.emit(this.city.id as number);
  }

}
