# Weather Dashboard

A modern, interactive weather dashboard built with Angular 20, featuring real-time weather data, geolocation support, and a sleek user interface.

## 🌟 Features

- **Smart Search**: Search by city name or zip code (e.g., "Istanbul", "34000", "10001,US")
- **Current Weather**: Temperature, humidity, wind speed, pressure, precipitation, and more
- **Hourly Forecast**: 3-hour interval forecasts for the next 24 hours
- **5-Day Forecast**: Extended weather predictions with high/low temperatures
- **Temperature Units**: Toggle between Celsius and Fahrenheit
- **Geolocation**: Automatic location detection on initial load
- **Dynamic Backgrounds**: Weather-specific gradient backgrounds
- **Responsive Design**: Mobile-first approach with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The application will start at `http://localhost:4200`

### Building for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Angular 20.3** with Standalone Components
- **TypeScript** for type safety
- **RxJS** for reactive programming
- **Angular Signals** for state management
- **SCSS** with custom theming
- **OpenWeatherMap API** for weather data

## 📁 Project Structure

```
src/
├── app/
│   ├── shared/              # Shared components, services, utilities
│   │   ├── components/      # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   ├── services/        # Global services
│   │   ├── styles/          # Theme and variables
│   │   └── utils/           # Helper functions
│   └── weather/             # Weather feature module
│       ├── components/      # Weather-specific components
│       ├── mappers/         # Data transformation
│       ├── models/          # TypeScript interfaces
│       ├── services/        # API and state management
│       └── utils/           # Weather utilities
└── public/                  # Static assets
```

## 🏗️ Architecture

- **Datasource Layer**: HTTP requests and caching
- **Service Layer**: State management with Angular Signals
- **Mapper Layer**: API response transformation
- **Component Layer**: Presentational UI components

## 📊 Bundle Size

Production build metrics:

| File | Size | Gzipped |
|------|------|---------|
| main.js | 177.41 kB | **49.69 kB** |
| polyfills.js | 34.59 kB | **11.33 kB** |
| styles.css | 278 bytes | 278 bytes |
| **Total** | **212.28 kB** | **61.30 kB** |

## 🚢 Deployment

### Azure Static Web Apps

The application is configured for deployment with:
- **GitHub Actions** workflow for automated CI/CD
- **Azure Functions** API proxy for secure API key management
- Environment variables configured in Azure Portal

The deployment architecture ensures API keys remain secure on the backend and never exposed to client-side code.

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests

## 🌐 Live Demo

The application is deployed on Azure Static Web Apps.

## 📄 License

This project is part of an interview case study.

## 🙏 Acknowledgments

Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
