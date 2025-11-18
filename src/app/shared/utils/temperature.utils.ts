export type TemperatureUnit = 'celsius' | 'fahrenheit';

export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function convertTemperature(
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit
): number {
  if (from === to) return value;
  
  if (from === 'celsius' && to === 'fahrenheit') {
    return celsiusToFahrenheit(value);
  }
  
  return fahrenheitToCelsius(value);
}

export function getTemperatureSymbol(unit: TemperatureUnit): string {
  return unit === 'celsius' ? '°C' : '°F';
}
