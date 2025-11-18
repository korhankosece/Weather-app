# Weather API - Azure Functions

Simple Azure Functions proxy for OpenWeatherMap API.

## Purpose

This API proxy ensures that the OpenWeatherMap API key is never exposed to the client-side code. All weather requests go through this secure backend layer.

## How it Works

```
Frontend → /api/weather → Azure Function → OpenWeatherMap API
                              ↑
                    API Key (secure, from Azure Portal)
```

## Local Development

1. Install Azure Functions Core Tools (optional for local testing)
2. Set environment variables in `local.settings.json` (gitignored)
3. Run `func start` from the `/api` directory

## Deployment

Environment variables are set in Azure Portal:
- `OPENWEATHER_API_KEY` - Your OpenWeatherMap API key
- `OPENWEATHER_API_URL` - https://api.openweathermap.org/data/2.5

## Endpoint

**GET** `/api/weather`

### Query Parameters
- `endpoint` - OpenWeatherMap endpoint (`weather` or `forecast`)
- `q` - City name
- `zip` - Zip code
- `lat` & `lon` - Coordinates

### Example
```
GET /api/weather?endpoint=weather&q=Istanbul
GET /api/weather?endpoint=forecast&lat=41.01&lon=28.96
```
