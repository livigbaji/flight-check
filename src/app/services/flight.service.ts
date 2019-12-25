import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../states/flights/flights.model';
import { FlightsQuery } from '../states/flights/flights.query';
import { FlightsStore } from '../states/flights/flights.store';
import { finalize, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights$ = this.query.selectAll();

  constructor(
    private query: FlightsQuery,
    private store: FlightsStore,
    private http: HttpClient
  ) { }

  fetchData({airport, begin, flightType}) {
    this.store.setLoading(true);
    const now = moment.now();
    const queryString = (new URLSearchParams({
      airport,
      begin: now - (begin * 60),
      end: now
    } as any)).toString();

    return this.http.get(`https://opensky-network.org/api/flights/${flightType}?${queryString}`)
            .pipe(
              map((data: Flight[] | null) => {
                if (data) {  this.store.set(data); }
                return !!data;
              }),
              finalize(() => {
                this.store.setLoading(false);
              })
            );
  }

  reset() {
    this.store.reset();
  }
}
