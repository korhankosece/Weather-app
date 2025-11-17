import { Component, signal } from '@angular/core';

interface HourlyForecastItem {
  time: string;
  icon: string;
  temperature: number;
  precipitation?: number;
}

@Component({
  selector: 'app-hourly-forecast',
  imports: [],
  templateUrl: './hourly-forecast.html',
  styleUrl: './hourly-forecast.scss',
})
export class HourlyForecast {
  // Dummy data - will be replaced with service data later
  hourlyData = signal<HourlyForecastItem[]>([
    { time: '09:00', icon: '02d', temperature: 5 },
    { time: '10:00', icon: '02d', temperature: 6 },
    { time: '11:00', icon: '03d', temperature: 7 },
    { time: '12:00', icon: '03d', temperature: 8 },
    { time: '13:00', icon: '02d', temperature: 9 },
    { time: '14:00', icon: '01d', temperature: 10 },
    { time: '15:00', icon: '01d', temperature: 11 },
    { time: '16:00', icon: '01d', temperature: 11 },
    { time: '17:00', icon: '02d', temperature: 10 },
    { time: '18:00', icon: '03d', temperature: 9 },
    { time: '19:00', icon: '03d', temperature: 8 },
    { time: '20:00', icon: '04d', temperature: 7 },
    { time: '21:00', icon: '04d', temperature: 6 },
    { time: '22:00', icon: '04n', temperature: 5 },
    { time: '23:00', icon: '04n', temperature: 4 },
    { time: '00:00', icon: '03n', temperature: 3 },
    { time: '01:00', icon: '03n', temperature: 2 },
    { time: '02:00', icon: '02n', temperature: 2 },
    { time: '03:00', icon: '02n', temperature: 1 },
    { time: '04:00', icon: '01n', temperature: 0 },
    { time: '05:00', icon: '01n', temperature: 0 },
    { time: '06:00', icon: '01d', temperature: 1 },
    { time: '07:00', icon: '02d', temperature: 2 },
    { time: '08:00', icon: '02d', temperature: 4 },
  ]);
}
