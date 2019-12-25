import { Injectable } from '@angular/core';
import { CitiesQuery } from '../states/cities/cities.query';
import { CitiesStore } from '../states/cities/cities.store';
import { cities } from '../states/cities/cities.data';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities$ = this.query.selectAll();
  activeCity$ = this.query.selectActive();

  constructor(
    private store: CitiesStore,
    private query: CitiesQuery
  ) { }


  select(id: number = null) {
    this.store.setActive(id);
  }

  init() {
    this.store.set(cities);
  }
}
