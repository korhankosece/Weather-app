import { Component, signal } from '@angular/core';

interface ForecastDay {
  day: string;
  date: string;
  icon: string;
  highTemp: number;
  lowTemp: number;
}

@Component({
  selector: 'app-five-day-forecast',
  imports: [],
  templateUrl: './five-day-forecast.html',
  styleUrl: './five-day-forecast.scss',
})
export class FiveDayForecast {
  // Dummy data - will be replaced with service data later
  forecastDays = signal<ForecastDay[]>([
    { day: 'Today', date: '16 November', icon: '03d', highTemp: 14, lowTemp: 8 },
    { day: 'Tomorrow', date: '17 November', icon: '10d', highTemp: 11, lowTemp: 9 },
    { day: 'Tuesday', date: '18 November', icon: '10d', highTemp: 8, lowTemp: 9 },
    { day: 'Wednesday', date: '19 November', icon: '02d', highTemp: 8, lowTemp: 2 },
    { day: 'Thursday', date: '20 November', icon: '03d', highTemp: 9, lowTemp: 1 },
  ]);
}
