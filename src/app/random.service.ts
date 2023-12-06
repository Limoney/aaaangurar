import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max: number): number {
    const randomFraction = Math.random();
    const randomInRange = randomFraction * (max - 1) + 1;
    const randomNumber = Math.floor(randomInRange);
    return randomNumber;
  }

}
