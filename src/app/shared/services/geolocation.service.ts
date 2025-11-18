import { Injectable } from '@angular/core';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  getCurrentPosition(): Promise<Coordinates | null> {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        console.warn('Geolocation is not supported by this browser.');
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.warn('Geolocation error:', error.message);
          resolve(null);
        },
        {
          timeout: 5000,
          maximumAge: 300000,
        }
      );
    });
  }
}
