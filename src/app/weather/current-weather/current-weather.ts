import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  imports: [],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.scss',
})
export class CurrentWeather {
  // Dummy data - will be replaced with service data later
  temperature = signal(5);
  city = signal('London');
  country = signal('United Kingdom');
  region = signal('England');
  description = signal('few clouds');
  currentTime = signal('09:54');
  currentDate = signal('17 November 2025');
  weatherIcon = signal('01d'); // OpenWeatherMap icon code

  backgroundGradient = computed(() => {
    const icon = this.weatherIcon();
    const iconCode = icon.substring(0, 2); // Get first 2 characters (01, 02, 03, etc.)

    // Map OpenWeatherMap icon codes to CSS gradients
    const gradientMap: { [key: string]: string } = {
      '01': 'linear-gradient(135deg, #4facfe 0%, #feca57 100%)',      // Clear sky - Blue to Yellow (sunny)
      '02': 'linear-gradient(135deg, #7196A9 0%, #5a7a8a 100%)',     // Few clouds - Blue/Gray (current)
      '03': 'linear-gradient(135deg, #6b7b8c 0%, #4a5a6b 100%)',     // Scattered clouds - Gray
      '04': 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',     // Broken clouds / Overcast - Dark Gray
      '09': 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',     // Shower rain - Blue
      '10': 'linear-gradient(135deg, #5b9bd5 0%, #4472c4 100%)',    // Rain - Dark Blue
      '11': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',     // Thunderstorm - Dark Blue/Gray
      '13': 'linear-gradient(135deg, #718096 0%, #a0aec0 100%)',    // Snow - Dark to Light Gray/Blue
      '50': 'linear-gradient(135deg, #9e9e9e 0%, #757575 100%)',     // Mist - Gray
    };

    return gradientMap[iconCode] || 'linear-gradient(135deg, #7196A9 0%, #5a7a8a 100%)';
  });
  
  windDirection = signal('north northwest');
  windSpeed = signal(4.63);
  humidity = signal(86);
  pressure = signal(764);
  cloudiness = signal('few clouds');
  precipitation = signal(0); // mm
  sunrise = signal('10:22');
  sunset = signal('19:09');
}
