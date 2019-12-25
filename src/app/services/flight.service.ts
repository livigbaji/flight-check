import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../states/flights/flights.model';
import { FlightsQuery } from '../states/flights/flights.query';
import { FlightsStore } from '../states/flights/flights.store';
import { finalize, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights$ = this.query.selectAll();
  loading$ = this.query.selectLoading();

  constructor(
    private query: FlightsQuery,
    private store: FlightsStore,
    private http: HttpClient
  ) { }

  fetchData({airport, begin, flightType}) {
    this.store.setLoading(true);
    const now = moment();
    const queryString = (new URLSearchParams({
      airport,
      begin: now.subtract(begin, 'minutes').unix(),
      end: now.unix()
    } as any)).toString();

    return this.http.get(`https://opensky-network.org/api/flights/${flightType}?${queryString}`)
            .pipe(
              map((data: Flight[] | null) => {
                if (data) {  this.store.set(data); }
                return !!data;
              }),
              finalize(() => {
                this.store.setLoading(false);
              }),
              catchError(error => {
                return of(false);
              })
            );
  }

  reset() {
    this.store.reset();
  }
}
