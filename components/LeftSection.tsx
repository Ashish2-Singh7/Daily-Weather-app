"use client";

import React, { useEffect } from 'react'
import { useWeather } from './WeatherContext';
import WeatherCardSkeleton from './Skeleton/WeatherCardSkeleton';
import WeatherCard from './WeatherCard';
import DenyAcess from './DenyAcess';

const LeftSection = () => {
    const { fetchWeatherDetails, weatherCards, isLoading, setIsLoading } = useWeather();
    const detectLocation = () => {
        if (!navigator.geolocation) {
            console.log("Client-side geolocation error: Geolocation is not supported by your browser.");
            return;
        }

        const successHandler = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            const newLocation = { latitude, longitude };
            fetchWeatherDetails(newLocation);
        };

        const errorHandler = (err: GeolocationPositionError) => {
            let errorMessage = "An unknown error occurred while getting location.";
            switch (err.code) {
                case err.PERMISSION_DENIED:
                    errorMessage = "Location access denied. Please enable it in your browser settings.";
                    break;
                case err.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case err.TIMEOUT:
                    errorMessage = "Location request timed out.";
                    break;
            }
          setIsLoading(false);
            console.error("Client-side geolocation error:", errorMessage);
        };

        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    };

    useEffect(() => {
        detectLocation();
    }, [])

    return (
        <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Stats of your area</h2>
            <div className="space-y-4">
                {isLoading && <WeatherCardSkeleton />}
                {weatherCards.length === 0 && !isLoading && <DenyAcess />}
                {!isLoading && weatherCards.map((card, index) => (
                    <WeatherCard
                        key={index}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default LeftSection
