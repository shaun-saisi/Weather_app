// src/components/WeatherCard.tsx
type WeatherCardProps = {
  city: string;
  temperature: number;
};

export default function WeatherCard({ city, temperature }: WeatherCardProps) {
  return (
    <div className="bg-blue-100 p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold text-gray-700">{city}</h2>
      <p className="text-gray-800 text-xl">{temperature}°C</p>
    </div>
  );
}
