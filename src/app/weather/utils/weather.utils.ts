export function getWindDirection(deg: number): string {
  const directions = [
    'north',
    'north northeast',
    'northeast',
    'east northeast',
    'east',
    'east southeast',
    'southeast',
    'south southeast',
    'south',
    'south southwest',
    'southwest',
    'west southwest',
    'west',
    'west northwest',
    'northwest',
    'north northwest',
  ];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

export function parseSearchQuery(query: string): { isZipCode: boolean; formattedQuery: string } {
  const trimmed = query.trim();

  if (/^\d+$/.test(trimmed)) {
    return { isZipCode: true, formattedQuery: `${trimmed},US` };
  }

  if (/^\d+,\w{2}$/i.test(trimmed)) {
    return { isZipCode: true, formattedQuery: trimmed };
  }

  return { isZipCode: false, formattedQuery: trimmed };
}

export function applyDayNightLogic(hour: number, iconCode: string): string {
  const isDayTime = hour >= 6 && hour < 18;
  return `${iconCode}${isDayTime ? 'd' : 'n'}`;
}

export function convertPressure(hpa: number): number {
  return Math.round(hpa * 0.750062);
}

export function convertVisibility(meters: number): number {
  return meters / 1000;
}
