"use client";
import { Cloud, Compass, Droplets, Eye, Gauge, MapPin, Thermometer, Wind } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

type contextProps = {
    isLoading: boolean
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
    latitude?: number;
    longitude?: number;
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

    const fetchWeatherDetails = async (location: LocationData) => {
        setIsLoading(true);
        const { latitude: lat, longitude: lon } = location;
        const response = await fetch(`http://localhost:3000/api/weather?query=${lat},${lon}`, {
            next: {
                revalidate: 600
            }
        });
        const weatherData = await response.json();

        setWeatherCards([
            {
                title: "Temperature",
                value: weatherData.temperatureCelsius,
                icon: <Thermometer className="h-8 w-8" />,
                description: "Current temperature in your area"
            },
            {
                title: "Humidity",
                value: weatherData.humidityPercent,
                icon: <Droplets className="h-8 w-8" />,
                description: "Moisture level in the air"
            },
            {
                title: "Wind Speed",
                value: weatherData.windSpeedKph,
                icon: <Wind className="h-8 w-8" />,
                description: "Current wind conditions"
            },
            {
                title: "Cloud Cover",
                value: weatherData.cloudCoveragePercent,
                icon: <Cloud className="h-8 w-8" />,
                description: "Sky coverage percentage"
            },
            {
                title: "Visibility",
                value: weatherData.visibilityKm,
                icon: <Eye className="h-8 w-8" />,
                description: "How far you can see clearly"
            },
            {
                title: "Wind Direction",
                value: weatherData.windDirection,
                icon: <Compass className="h-8 w-8" />,
                description: "Direction wind is coming from"
            },
            {
                title: "Pressure",
                value: weatherData.pressureMb,
                icon: <Gauge className="h-8 w-8" />,
                description: "Atmospheric pressure reading"
            },
            {
                title: "Location",
                value: `${weatherData.locationName}, ${weatherData.country}`,
                icon: <MapPin className="h-8 w-8" />,
                description: "Current weather location"
            }
        ])
        setIsLoading(false);

    }
    return (
        <WeatherContext value={{ isLoading, fetchWeatherDetails, weatherCards, setIsLoading }}>
            {children}
        </WeatherContext>
    );
};
