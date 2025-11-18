module.exports = async function (context, req) {
  const endpoint = req.query.endpoint;
  const query = req.query.q;
  const zip = req.query.zip;
  const lat = req.query.lat;
  const lon = req.query.lon;

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const apiUrl = process.env.OPENWEATHER_API_URL || 'https://api.openweathermap.org/data/2.5';

  if (!apiKey) {
    context.res = {
      status: 500,
      body: { error: 'API key not configured' }
    };
    return;
  }

  if (!endpoint) {
    context.res = {
      status: 400,
      body: { error: 'Missing endpoint parameter' }
    };
    return;
  }

  try {
    const params = new URLSearchParams({
      appid: apiKey,
      units: 'metric',
      lang: 'en'
    });

    if (query) params.append('q', query);
    if (zip) params.append('zip', zip);
    if (lat) params.append('lat', lat);
    if (lon) params.append('lon', lon);

    const url = `${apiUrl}/${endpoint}?${params.toString()}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      context.res = {
        status: response.status,
        body: data
      };
      return;
    }

    context.res = {
      status: 200,
      body: data
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: 'Failed to fetch weather data' }
    };
  }
};
