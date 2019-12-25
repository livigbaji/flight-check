import { Injectable } from '@angular/core';
import { FlightsStore, FlightsState } from './flights.store';
import { QueryEntity } from '@datorama/akita';


@Injectable({
    providedIn: 'root'
  })
export class FlightsQuery extends QueryEntity<FlightsState> {
  constructor(protected store: FlightsStore) {
    super(store);
  }
}