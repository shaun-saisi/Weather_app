type WeatherCardProps = {
  city: string;
  temperature: number;
  rain: number;
  clouds: number;
  wind_speed: number;
};

export default function WeatherCard({ city, temperature, rain, clouds, wind_speed }: WeatherCardProps) {
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
      <p style={{ color: '#374151', fontSize: '1rem' }}>🌡️ Temperature: {temperature}°C</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>🌧️ Rain (last 1h): {rain} mm</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>☁️ Cloudiness: {clouds}%</p>
      <p style={{ color: '#374151', fontSize: '1rem' }}>💨 Wind Speed: {wind_speed} m/s</p>
    </div>
  );
}
