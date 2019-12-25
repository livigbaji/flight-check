import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import 'materialize-css';
import { MaterializeModule } from '@samuelberthe/angular2-materialize';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CityListComponent } from './cities/city-list/city-list.component';
import { CityListItemComponent } from './cities/city-list-item/city-list-item.component';
import { CityModalComponent } from './cities/city-modal/city-modal.component';
import { CityFlightListComponent } from './cities/city-flight-list/city-flight-list.component';

import { TimeAgoPipe } from 'time-ago-pipe';
import { StringPipe } from './pipes/string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CityListComponent,
    CityListItemComponent,
    CityModalComponent,
    CityFlightListComponent,
    TimeAgoPipe,
    StringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    MaterializeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
