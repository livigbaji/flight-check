import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities$ = this.cityService.cities$;

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
  }

  selectCity(id: number) {
    this.cityService.select(id);
  }

}
