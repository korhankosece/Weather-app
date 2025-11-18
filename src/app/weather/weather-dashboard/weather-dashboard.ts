import { Component, inject } from '@angular/core';

import { WeatherService } from '../services/weather.service';

import { SearchBar } from '../search-bar/search-bar';
import { CurrentWeather } from '../current-weather/current-weather';
import { HourlyForecast } from '../hourly-forecast/hourly-forecast';
import { FiveDayForecast } from '../five-day-forecast/five-day-forecast';
import { AppErrorBanner } from '../../shared/components/app-error-banner/app-error-banner';

@Component({
  selector: 'app-weather-dashboard',
  imports: [
    SearchBar,
    CurrentWeather,
    HourlyForecast,
    FiveDayForecast,
    AppErrorBanner
  ],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.scss',
})
export class WeatherDashboard {
  weatherService = inject(WeatherService);

  onSearch(city: string): void {
    this.weatherService.searchWeather(city);
  }

  dismissError(): void {
    this.weatherService.clearError();
  }
}
