import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICountry {
  name: string,
  area: number,
  population: number
}


@Injectable({
  providedIn: 'root'
})

export class DatasrvService {

  constructor(private http: HttpClient) { }

  private getCountriesUrl =   "https://localhost:44363/api/values/GetCountries";

  getCountries(countryName: string):  Observable<ICountry[]> {
      return this.http.get<ICountry[]>(this.getCountriesUrl + "?countryName=" + countryName);
  }
}
