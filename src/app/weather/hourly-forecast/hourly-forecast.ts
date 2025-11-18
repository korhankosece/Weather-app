import { Component, inject, computed } from '@angular/core';

import { WeatherService } from '../services/weather.service';

import { AppSkeleton } from '../../shared/components/app-skeleton/app-skeleton';

import { convertTemperature, getTemperatureSymbol } from '../../shared/utils/temperature.utils';

@Component({
  selector: 'app-hourly-forecast',
  imports: [AppSkeleton],
  templateUrl: './hourly-forecast.html',
  styleUrl: './hourly-forecast.scss',
})
export class HourlyForecast {
  protected weatherService = inject(WeatherService);
  hourlyData = this.weatherService.hourlyForecast;
  temperatureUnit = this.weatherService.temperatureUnit;

  displayHourlyData = computed(() => {
    const data = this.hourlyData();
    const unit = this.temperatureUnit();
    return data.map(hour => ({
      ...hour,
      displayTemperature: convertTemperature(hour.temperature, 'celsius', unit)
    }));
  });

  temperatureSymbol = computed(() => getTemperatureSymbol(this.temperatureUnit()));
}
