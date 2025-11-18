import { Component, inject, computed } from '@angular/core';

import { WeatherService } from '../services/weather.service';

import { AppSkeleton } from '../../shared/components/app-skeleton/app-skeleton';

import { convertTemperature, getTemperatureSymbol } from '../../shared/utils/temperature.utils';

@Component({
  selector: 'app-five-day-forecast',
  imports: [AppSkeleton],
  templateUrl: './five-day-forecast.html',
  styleUrl: './five-day-forecast.scss',
})
export class FiveDayForecast {
  protected weatherService = inject(WeatherService);
  forecastDays = this.weatherService.fiveDayForecast;
  temperatureUnit = this.weatherService.temperatureUnit;

  displayForecastDays = computed(() => {
    const data = this.forecastDays();
    const unit = this.temperatureUnit();
    return data.map(day => ({
      ...day,
      displayHighTemp: convertTemperature(day.highTemp, 'celsius', unit),
      displayLowTemp: convertTemperature(day.lowTemp, 'celsius', unit)
    }));
  });

  temperatureSymbol = computed(() => getTemperatureSymbol(this.temperatureUnit()));
}
