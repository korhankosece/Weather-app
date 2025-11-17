import { Component, inject } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-hourly-forecast',
  imports: [],
  templateUrl: './hourly-forecast.html',
  styleUrl: './hourly-forecast.scss',
})
export class HourlyForecast {
  protected weatherService = inject(WeatherService);
  
  hourlyData = this.weatherService.hourlyForecast;
}
