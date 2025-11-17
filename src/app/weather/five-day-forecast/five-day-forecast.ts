import { Component, inject } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  imports: [],
  templateUrl: './five-day-forecast.html',
  styleUrl: './five-day-forecast.scss',
})
export class FiveDayForecast {
  protected weatherService = inject(WeatherService);
  
  forecastDays = this.weatherService.fiveDayForecast;
}
