'use client';

import {  useState } from 'react';
import WeatherCard from '/home/anunda/Weather_app/frontend/weather-frontend/src/components/WeatherCard';

type WeatherData = {
  city: string;
  temperature: number;
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
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
      if (!res.ok) throw new Error('Failed to fetch weather data');
      const data = await res.json();
      setWeatherList([data]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-base-200 text-base-content">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🌤️ Weather Forecast</h1>

        {/* City input and button */}
        <div className="card bg-base-100 shadow-md p-4 mb-6">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            className="input input-bordered w-full mb-4"
          />

          <button
            onClick={handleSubmit}
            className="btn btn-primary w-full"
          >
            Fetch Weather
          </button>
        </div>

        {/* Loading/Error */}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Weather Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {weatherList.map((item, index) => (
            <WeatherCard key={index} city={item.city} temperature={item.temperature} />
          ))}
        </div>
      </div>
    </div>
  );
}
