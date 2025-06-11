"use client";

import React, { useEffect } from 'react'
import { useWeather } from './WeatherContext';
import WeatherCardSkeleton from './Skeleton/WeatherCardSkeleton';
import WeatherCard from './WeatherCard';

const LeftSection = () => {
    const { fetchWeatherDetails, weatherCards, isLoading } = useWeather();
    useEffect(() => {
        if (!navigator.geolocation) {
            const msg = "Geolocation is not supported by your browser.";
            console.log("Client-side geolocation error:", msg);
            return;
        }
        const successHandler = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            const newLocation = { latitude, longitude };
            fetchWeatherDetails(newLocation)
        };

        const errorHandler = (err: GeolocationPositionError) => {
            let errorMessage = "An unknown error occurred while getting location.";
            switch (err.code) {
                case err.PERMISSION_DENIED:
                    errorMessage = "Location access denied. Please enable it in your browser settings.";
                    break;
                case err.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable (e.g., GPS signal lost).";
                    break;
                case err.TIMEOUT:
                    errorMessage = "The request to get user location timed out.";
                    break;
            }
            console.error("Client-side geolocation error:", errorMessage);
        };
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    }, [])

    return (
        <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Stats</h2>
            <div className="space-y-4">
                {isLoading && <WeatherCardSkeleton />}
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
