// src/app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import WeatherCard from '/home/anunda/Weather_app/frontend/weather-frontend/src/components/WeatherCard'

type WeatherData = {
  city: string
  temperature: number
}

export default function WeatherPage() {
  const [weatherList, setWeatherList] = useState<WeatherData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/weather')
        if (!res.ok) throw new Error('Failed to fetch weather data')
        const data = await res.json()
        setWeatherList(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {weatherList.map((item, index) => (
          <WeatherCard key={index} city={item.city} temperature={item.temperature} />
        ))}
      </div>
    </div>
  )
}
