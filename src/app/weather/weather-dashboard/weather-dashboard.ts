import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { CurrentWeather } from '../current-weather/current-weather';
import { HourlyForecast } from '../hourly-forecast/hourly-forecast';
import { FiveDayForecast } from '../five-day-forecast/five-day-forecast';

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
export class WeatherDashboard {}
