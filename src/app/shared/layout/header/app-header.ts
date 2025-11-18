import { Component, inject } from '@angular/core';

import { TemperaturePreferenceService } from '../../services/temperature-preference.service';

import { AppToggle } from '../../components/app-toggle/app-toggle';
import { AppContainer } from '../app-container/app-container';

@Component({
  selector: 'app-header',
  imports: [AppToggle, AppContainer],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  private temperatureService = inject(TemperaturePreferenceService);

  onToggleUnit(isFahrenheit: boolean): void {
    this.temperatureService.setUnit(isFahrenheit ? 'fahrenheit' : 'celsius');
  }
}
