import { Injectable, inject, signal, effect } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import {
  CurrentWeatherData,
  HourlyForecastData,
  FiveDayForecastData,
} from '../models/weather.models';

import { WeatherDatasource } from './weather.datasource';
import { TemperaturePreferenceService } from '../../shared/services/temperature-preference.service';
import { GeolocationService } from '../../shared/services/geolocation.service';

import {
  transformCurrentWeather,
  transformHourlyForecast,
  transformFiveDayForecast,
} from '../mappers/weather.mapper';

import { getWeatherErrorMessage } from '../../shared/utils/error.utils';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherDatasource = inject(WeatherDatasource);
  private temperatureService = inject(TemperaturePreferenceService);
  private geolocationService = inject(GeolocationService);
  private searchTrigger = signal<string | null>(null);

  private currentWeatherState = signal<CurrentWeatherData | null>(null);
  private hourlyForecastState = signal<HourlyForecastData[]>([]);
  private fiveDayForecastState = signal<FiveDayForecastData[]>([]);
  private loadingState = signal<boolean>(false);
  private errorState = signal<string | null>(null);

  readonly currentWeather = this.currentWeatherState.asReadonly();
  readonly hourlyForecast = this.hourlyForecastState.asReadonly();
  readonly fiveDayForecast = this.fiveDayForecastState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();
  readonly temperatureUnit = this.temperatureService.unit;

  constructor() {
    effect(() => {
      const query = this.searchTrigger();
      if (query) {
        this.loadWeatherData(query);
      }
    });

    this.initializeWeather();
  }

  private async initializeWeather(): Promise<void> {
    const coords = await this.geolocationService.getCurrentPosition();
    
    if (coords) {
      this.loadWeatherDataByCoords(coords.latitude, coords.longitude);
    } else {
      this.searchWeather('Istanbul');
    }
  }

  private async loadWeatherData(query: string): Promise<void> {
    this.loadingState.set(true);
    this.errorState.set(null);

    try {
      const [current, forecast] = await Promise.all([
        firstValueFrom(this.weatherDatasource.getCurrentWeather(query)),
        firstValueFrom(this.weatherDatasource.getFiveDayForecast(query)),
      ]);

      this.currentWeatherState.set(transformCurrentWeather(current));
      this.hourlyForecastState.set(transformHourlyForecast(forecast));
      this.fiveDayForecastState.set(transformFiveDayForecast(forecast));
    } catch (error) {
      const message = getWeatherErrorMessage(error);
      this.errorState.set(message);
      console.error('Weather data error:', error);
    } finally {
      this.loadingState.set(false);
    }
  }

  private async loadWeatherDataByCoords(lat: number, lon: number): Promise<void> {
    this.loadingState.set(true);
    this.errorState.set(null);

    try {
      const [current, forecast] = await Promise.all([
        firstValueFrom(this.weatherDatasource.getCurrentWeatherByCoords(lat, lon)),
        firstValueFrom(this.weatherDatasource.getFiveDayForecastByCoords(lat, lon)),
      ]);

      this.currentWeatherState.set(transformCurrentWeather(current));
      this.hourlyForecastState.set(transformHourlyForecast(forecast));
      this.fiveDayForecastState.set(transformFiveDayForecast(forecast));
    } catch (error) {
      const message = getWeatherErrorMessage(error);
      this.errorState.set(message);
      console.error('Weather data error:', error);
      this.searchWeather('Istanbul');
    } finally {
      this.loadingState.set(false);
    }
  }

  searchWeather(query: string, forceRefresh: boolean = false): void {
    const trimmed = query?.trim();
    if (!trimmed) return;

    if (forceRefresh) {
      this.weatherDatasource.clearCache(trimmed);
    }

    this.searchTrigger.set(trimmed);
  }

  clearError(): void {
    this.errorState.set(null);
  }
}
