import { Injectable, signal } from '@angular/core';

import { TemperatureUnit } from '../utils/temperature.utils';

@Injectable({
  providedIn: 'root',
})
export class TemperaturePreferenceService {
  private unitState = signal<TemperatureUnit>('celsius');
  
  readonly unit = this.unitState.asReadonly();

  setUnit(unit: TemperatureUnit): void {
    this.unitState.set(unit);
  }

  toggleUnit(): void {
    const current = this.unitState();
    this.unitState.set(current === 'celsius' ? 'fahrenheit' : 'celsius');
  }
}
