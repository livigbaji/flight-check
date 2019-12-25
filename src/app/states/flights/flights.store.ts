import { Injectable } from '@angular/core';
import { Flight } from './flights.model';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';

export interface FlightsState extends EntityState<Flight>, ActiveState { }

@Injectable({
    providedIn: 'root'
  })
@StoreConfig({ name: 'flights' })
export class FlightsStore extends EntityStore<FlightsState> {
  constructor() {
    super({
        active: null
    });
  }
}
