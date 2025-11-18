import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, shareReplay } from 'rxjs';

import { CurrentWeather, FiveDayForecast } from '../models/weather.models';

import { parseSearchQuery } from '../utils/weather.utils';

@Injectable({
  providedIn: 'root',
})
export class WeatherDatasource {
  private http = inject(HttpClient);
  private apiUrl = '/api/weather';

  private currentWeatherCache = new Map<string, Observable<CurrentWeather>>();
  private forecastCache = new Map<string, Observable<FiveDayForecast>>();

  getCurrentWeather(query: string): Observable<CurrentWeather> {
    return this.getCachedRequest(
      query,
      this.currentWeatherCache,
      'weather'
    );
  }

  getCurrentWeatherByCoords(lat: number, lon: number): Observable<CurrentWeather> {
    const key = `${lat},${lon}`;
    if (this.currentWeatherCache.has(key)) {
      return this.currentWeatherCache.get(key)!;
    }

    const params = new HttpParams()
      .set('endpoint', 'weather')
      .set('lat', lat.toString())
      .set('lon', lon.toString());

    const request$ = this.http
      .get<CurrentWeather>(this.apiUrl, { params })
      .pipe(shareReplay(1));

    this.currentWeatherCache.set(key, request$);
    return request$;
  }

  getFiveDayForecast(query: string): Observable<FiveDayForecast> {
    return this.getCachedRequest(
      query,
      this.forecastCache,
      'forecast'
    );
  }

  getFiveDayForecastByCoords(lat: number, lon: number): Observable<FiveDayForecast> {
    const key = `${lat},${lon}`;
    if (this.forecastCache.has(key)) {
      return this.forecastCache.get(key)!;
    }

    const params = new HttpParams()
      .set('endpoint', 'forecast')
      .set('lat', lat.toString())
      .set('lon', lon.toString());

    const request$ = this.http
      .get<FiveDayForecast>(this.apiUrl, { params })
      .pipe(shareReplay(1));

    this.forecastCache.set(key, request$);
    return request$;
  }

  private getCachedRequest<T>(
    query: string,
    cache: Map<string, Observable<T>>,
    endpoint: string
  ): Observable<T> {
    const normalizedQuery = query.trim().toLowerCase();

    if (cache.has(normalizedQuery)) {
      return cache.get(normalizedQuery)!;
    }

    const params = this.buildParams(query, endpoint);
    const request$ = this.http.get<T>(this.apiUrl, { params }).pipe(shareReplay(1));

    cache.set(normalizedQuery, request$);
    return request$;
  }

  private buildParams(query: string, endpoint: string): HttpParams {
    const { isZipCode, formattedQuery } = parseSearchQuery(query);
    const paramKey = isZipCode ? 'zip' : 'q';

    return new HttpParams()
      .set('endpoint', endpoint)
      .set(paramKey, formattedQuery);
  }

  clearCache(query?: string): void {
    if (query) {
      const normalizedQuery = query.trim().toLowerCase();
      this.currentWeatherCache.delete(normalizedQuery);
      this.forecastCache.delete(normalizedQuery);
    } else {
      this.currentWeatherCache.clear();
      this.forecastCache.clear();
    }
  }
}
