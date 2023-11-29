import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  readonly url = 'http://localhost:48362/locations';


  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  
}
