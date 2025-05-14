type WeatherCardProps = {
  city: string;
  temperature: number;
  humidity: number;
  pressure: number;
  weather_description: string;
  wind_speed: number;
  wind_deg: number;
  sunrise: string;
  sunset: string;
};

export default function WeatherCard({
  city,
  temperature,
  humidity,
  pressure,
  weather_description,
  wind_speed,
  wind_deg,
  sunrise,
  sunset,
}: WeatherCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#eff6ff',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        {city}
      </h2>
      <p style={{ color: '#374151', fontSize: '1rem' }}>{temperature}°C</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Humidity: {humidity}%</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Pressure: {pressure} hPa</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Weather: {weather_description}</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Wind Speed: {wind_speed} m/s</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Wind Direction: {wind_deg}°</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Sunrise: {sunrise}</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>Sunset: {sunset}</p>
    </div>
  );
}
