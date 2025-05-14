'use client';

import { useState } from 'react';
import WeatherCard from '/home/anunda/Weather_app/frontend/weather-frontend/src/components/WeatherCard';

type WeatherData = {
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

export default function WeatherPage() {
  const [city, setCity] = useState<string>('');
  const [weatherList, setWeatherList] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
      
      if (!res.ok) {
        throw new Error('City not found or API error');
      }

      const data = await res.json();

      // Check if the necessary fields are available in the response
      if (data.error) {
        throw new Error(data.error);
      }

      const formatted: WeatherData = {
        city: data.city,
        temperature: data.temperature,
        humidity: data.humidity,
        pressure: data.pressure,
        weather_description: data.weather_description,
        wind_speed: data.wind_speed,
        wind_deg: data.wind_deg,
        sunrise: data.sunrise,
        sunset: data.sunset,
      };

      setWeatherList([formatted]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e0f2fe, #c7d2fe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1.5rem',
            color: '#2563eb',
          }}
        >
          🌤️ Weather App
        </h1>

        <label
          htmlFor="city-input"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: '#374151',
          }}
        >
          Enter city name
        </label>

        <input
          id="city-input"
          type="text"
          placeholder="e.g. Nairobi"
          value={city}
          onChange={handleCityChange}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            marginBottom: '1rem',
            fontSize: '1rem',
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Get Weather
        </button>

        {loading && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              color: '#1d4ed8',
              fontWeight: 500,
            }}
          >
            Loading weather data...
          </p>
        )}

        {error && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              color: '#dc2626',
              fontWeight: 600,
            }}
          >
            ⚠️ {error}
          </p>
        )}

        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
          }}
        >
          {weatherList.map((item, index) => (
            <WeatherCard
              key={index}
              city={item.city}
              temperature={item.temperature}
              humidity={item.humidity}
              pressure={item.pressure}
              weather_description={item.weather_description}
              wind_speed={item.wind_speed}
              wind_deg={item.wind_deg}
              sunrise={item.sunrise}
              sunset={item.sunset}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
