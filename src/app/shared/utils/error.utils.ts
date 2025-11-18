import { HttpErrorResponse } from '@angular/common/http';

export function getWeatherErrorMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 404) {
      return 'City not found. Please check the spelling and try again.';
    }
    
    if (error.status === 401) {
      return 'API key is invalid. Please contact support.';
    }
    
    if (error.status === 429) {
      return 'Too many requests. Please wait a moment and try again.';
    }
    
    if (error.status === 0) {
      return 'Network error. Please check your internet connection.';
    }
  }
  
  return 'Unable to fetch weather data. Please try again.';
}
