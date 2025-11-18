import { Component } from '@angular/core';

import { AppHeader } from './shared/layout/header/app-header';
import { AppContainer } from './shared/layout/app-container/app-container';
import { WeatherDashboard } from './weather/weather-dashboard/weather-dashboard';

@Component({
  selector: 'app-root',
  imports: [AppHeader, AppContainer, WeatherDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
