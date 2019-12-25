import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from '@samuelberthe/angular2-materialize';
import { CityService } from '../services/city.service';
import { FlightService } from '../services/flight.service';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modalActions: EventEmitter<string|MaterializeAction> = new EventEmitter<string|MaterializeAction>();

  city$ = this.cityService.activeCity$.pipe(
    tap(activeCity => {
      this.flightService.reset();
      this.modalActions.emit(activeCity ? 'open' : 'close');
    })
  );

  flights$ = this.flightService.flights$;

  flightsLoading$ = this.flightService.loading$;

  constructor(
    private cityService: CityService,
    private flightService: FlightService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }


  closeModal() {
    this.cityService.select(null);
  }

  changeFlightParams(params) {
    this.flightService.fetchData(params)
    .subscribe(response => {
      if (!response) {
        M.toast({html: `An error occured please try again`});
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }
}
