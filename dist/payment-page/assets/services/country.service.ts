import { Injectable } from '@angular/core';
import countries from "../countries.json";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  
  constructor() { }

  getCountries() {
    return countries;
  }
}

export class Country {
  code: string;
  name: string;
}