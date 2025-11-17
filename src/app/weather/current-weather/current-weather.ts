import { Component, inject, computed } from '@angular/core';
import { WeatherService } from '../services/weather.service';

const WEATHER_GRADIENTS: { [key: string]: string } = {
  '01d': 'linear-gradient(135deg, #4facfe 0%, #feca57 100%)',
  '01n': 'linear-gradient(135deg, #2c3e50 0%, #3a5d7c 100%)',
  '02': 'linear-gradient(135deg, #7196A9 0%, #5a7a8a 100%)',
  '03': 'linear-gradient(135deg, #6b7b8c 0%, #4a5a6b 100%)',
  '04': 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
  '09': 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
  '10': 'linear-gradient(135deg, #5b9bd5 0%, #4472c4 100%)',
  '11': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  '13': 'linear-gradient(135deg, #718096 0%, #a0aec0 100%)',
  '50': 'linear-gradient(135deg, #9e9e9e 0%, #757575 100%)',
};

const DEFAULT_GRADIENT = 'linear-gradient(135deg, #7196A9 0%, #5a7a8a 100%)';

@Component({
  selector: 'app-current-weather',
  imports: [],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.scss',
})
export class CurrentWeather {
  protected weatherService = inject(WeatherService);
  currentWeather = this.weatherService.currentWeather;

  backgroundGradient = computed(() => {
    const icon = this.currentWeather()?.weatherIcon ?? '01d';
    if (WEATHER_GRADIENTS[icon]) {
      return WEATHER_GRADIENTS[icon];
    }
    const iconCode = icon.substring(0, 2);
    return WEATHER_GRADIENTS[iconCode] || DEFAULT_GRADIENT;
  });
}
