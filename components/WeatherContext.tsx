"use client";
import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

type contextProps = {
    location: LocationData | null,
    error: string | null,
    isLoading: boolean
    setLocation: React.Dispatch<React.SetStateAction<LocationData | null>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    fetchWeatherDetails: (location: { latitude: number, longitude: number }) => void;
    weatherCards: WeatherCard[]
}

const WeatherContext = createContext<contextProps | null>(null);

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

interface LocationData {
    latitude: number;
    longitude: number;
}

type WeatherCard = {
    title: string;
    value: string;
    icon: React.ReactNode;
    description: string;
};

export const WeatherProvider = ({ children }: ThemeProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [weatherCards, setWeatherCards] = useState<WeatherCard[]>([]);

    const formStructuredData = (res) => {
        const structuredWeatherData = {
            locationName: res.location.name,
            region: res.location.region,
            country: res.location.country,
            localTime: res.location.localtime,

            temperatureCelsius: `${res.current.temp_c}°C`,
            feelsLikeCelsius: res.current.feelslike_c,
            condition: res.current.condition.text,
            conditionIcon: `https:${res.current.condition.icon}`,

            humidityPercent: `${res.current.humidity}%`,
            cloudCoveragePercent: `${res.current.cloud}%`,

            windSpeedKph: `${res.current.wind_kph} km/h`,
            windDirection: res.current.wind_dir,
            gustSpeedKph: res.current.gust_kph,

            visibilityKm: res.current.vis_km,
            pressureMb: res.current.pressure_mb,
            uvIndex: res.current.uv,

            // Additional understandable technical fields
            dewPointCelsius: res.current.dewpoint_c,
            heatIndexCelsius: res.current.heatindex_c,
            windChillCelsius: res.current.windchill_c,

            isDay: Boolean(res.current.is_day),
            lastUpdated: res.current.last_updated,
        };
        return structuredWeatherData;
    }

    const fetchWeatherDetails = async (location: { latitude: number, longitude: number }) => {
        setIsLoading(true);
        const { latitude: lat, longitude: lon } = location;
        const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${lat},${lon}`, {
            next: {
                revalidate: 600
            }
        });

        const res = await weatherData.json();
        const structuredData = formStructuredData(res);

        setWeatherCards([
            {
                title: "Temperature",
                value: structuredData.temperatureCelsius,
                icon: <Thermometer className="h-8 w-8" />,
                description: "Current temperature in your area"
            },
            {
                title: "Humidity",
                value: structuredData.humidityPercent,
                icon: <Droplets className="h-8 w-8" />,
                description: "Moisture level in the air"
            },
            {
                title: "Wind Speed",
                value: structuredData.windSpeedKph,
                icon: <Wind className="h-8 w-8" />,
                description: "Current wind conditions"
            },
            {
                title: "Cloud Cover",
                value: structuredData.cloudCoveragePercent,
                icon: <Cloud className="h-8 w-8" />,
                description: "Sky coverage percentage"
            }
        ])
        setIsLoading(false);

    }
    return (
        <WeatherContext value={{isLoading, fetchWeatherDetails, weatherCards }}>
            {children}
        </WeatherContext>
    );
};
