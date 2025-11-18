import {
  CurrentWeather,
  FiveDayForecast,
  CurrentWeatherData,
  HourlyForecastData,
  FiveDayForecastData,
} from '../models/weather.models';

import { formatLocalTime, formatLocalDate, formatShortDate, getDayName } from '../../shared/utils/date-time.utils';
import { getWindDirection, applyDayNightLogic, convertPressure, convertVisibility } from '../utils/weather.utils';

export function transformCurrentWeather(weather: CurrentWeather): CurrentWeatherData {
  const condition = weather.weather[0];

  return {
    temperature: Math.round(weather.main.temp),
    city: weather.name,
    country: weather.sys.country,
    description: condition.description,
    currentTime: formatLocalTime(weather.dt, weather.timezone),
    currentDate: formatLocalDate(weather.dt, weather.timezone),
    weatherIcon: condition.icon,
    windDirection: getWindDirection(weather.wind.deg),
    windSpeed: weather.wind.speed,
    humidity: weather.main.humidity,
    pressure: convertPressure(weather.main.pressure),
    cloudiness: condition.description,
    precipitation: weather.rain?.['1h'] || weather.snow?.['1h'] || 0,
    sunrise: formatLocalTime(weather.sys.sunrise, weather.timezone),
    sunset: formatLocalTime(weather.sys.sunset, weather.timezone),
    feelsLike: Math.round(weather.main.feels_like),
    visibility: weather.visibility ? convertVisibility(weather.visibility) : 0,
  };
}

export function transformHourlyForecast(forecast: FiveDayForecast): HourlyForecastData[] {
  const timezoneOffset = forecast.city.timezone;

  return forecast.list.slice(0, 8).map((item) => {
    const localDate = new Date((item.dt + timezoneOffset) * 1000);
    const hour = localDate.getUTCHours();
    const originalIcon = item.weather[0].icon;
    const iconCode = originalIcon.substring(0, 2);

    const hours = localDate.getUTCHours().toString().padStart(2, '0');
    const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
    const localTime = `${hours}:${minutes}`;

    return {
      time: localTime,
      icon: applyDayNightLogic(hour, iconCode),
      temperature: Math.round(item.main.temp),
      precipitation: item.rain?.['3h'] || item.snow?.['3h'] || 0,
      dt: item.dt,
    };
  });
}

export function transformFiveDayForecast(forecast: FiveDayForecast): FiveDayForecastData[] {
  const dailyData: { [key: string]: FiveDayForecastData } = {};

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dateKey = date.toDateString();
    const hour = date.getHours();

    const originalIcon = item.weather[0].icon;
    const iconCode = originalIcon.substring(0, 2);
    const dayIcon = `${iconCode}d`;

    if (!dailyData[dateKey]) {
      dailyData[dateKey] = {
        day: getDayName(date),
        date: formatShortDate(date),
        icon: dayIcon,
        highTemp: Math.round(item.main.temp_max),
        lowTemp: Math.round(item.main.temp_min),
        dt: item.dt,
      };
    } else {
      dailyData[dateKey].highTemp = Math.max(
        dailyData[dateKey].highTemp,
        Math.round(item.main.temp_max)
      );
      dailyData[dateKey].lowTemp = Math.min(
        dailyData[dateKey].lowTemp,
        Math.round(item.main.temp_min)
      );

      if (hour >= 12 && hour <= 15) {
        dailyData[dateKey].icon = dayIcon;
      }
    }
  });

  return Object.values(dailyData).slice(0, 5);
}
