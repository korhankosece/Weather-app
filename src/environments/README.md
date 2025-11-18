# Environment Configuration

This directory contains environment configuration files for the Angular application.

## Setup

1. Copy `environment.example.ts` to `environment.ts`:
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

2. Copy `environment.example.ts` to `environment.prod.ts`:
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.prod.ts
   ```

3. Replace `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key in both files.

4. Set `production: true` in `environment.prod.ts`.

## Get API Key

Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).

## Note

- `environment.ts` and `environment.prod.ts` are gitignored to keep API keys secure
- Never commit these files with real API keys

