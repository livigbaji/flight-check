import { Injectable } from '@angular/core';
import { CitiesStore, CitiesState } from './cities.store';
import { QueryEntity } from '@datorama/akita';


@Injectable({
    providedIn: 'root'
  })
export class CitiesQuery extends QueryEntity<CitiesState> {
  constructor(protected store: CitiesStore) {
    super(store);
  }
}