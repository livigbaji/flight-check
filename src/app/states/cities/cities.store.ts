import { Injectable } from '@angular/core';
import { City } from './cities.model';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';

export interface CitiesState extends EntityState<City>, ActiveState{ }

@Injectable({
    providedIn: 'root'
  })
@StoreConfig({ name: 'cities' })
export class CitiesStore extends EntityStore<CitiesState> {
  constructor() {
    super({
        active: null
    });
  }
}
