import { Component, inject } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { CurrentWeather } from '../current-weather/current-weather';
import { HourlyForecast } from '../hourly-forecast/hourly-forecast';
import { FiveDayForecast } from '../five-day-forecast/five-day-forecast';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-dashboard',
  imports: [
    SearchBar,
    CurrentWeather,
    HourlyForecast,
    FiveDayForecast
  ],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.scss',
})
export class WeatherDashboard {
  weatherService = inject(WeatherService);

  onSearch(city: string): void {
    this.weatherService.searchWeather(city);
  }
}
