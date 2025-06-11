import React from 'react';
import {
    Cloud,
    Thermometer,
    Droplets,
    Wind,
    Eye,
    Gauge,
    Sunrise,
    Sunset
} from 'lucide-react';
import { getLocationBackground, getLocationGradientOverlay } from '@/utils/backgroundUtils';

const WeatherDetails = () => {
    const currentLocation = "mumbai";
    const backgroundImage = getLocationBackground(currentLocation);
    const gradientOverlay = getLocationGradientOverlay(currentLocation);

    return (
        <div className="space-y-6">
            {/* Main Weather Card with Background */}
            <div className="relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay}`} />

                {/* Content */}
                <div className="relative p-8 text-white">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold mb-2">Mumbai</h2>
                        <p className="text-white/80">Maharashtra, India</p>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <Cloud className="h-20 w-20 text-white/90 mr-4" />
                        <div className="text-center">
                            <p className="text-5xl font-bold mb-2">28°C</p>
                            <p className="text-lg text-white/80">Partly Cloudy</p>
                        </div>
                    </div>

                    <div className="flex justify-between text-sm text-white/70">
                        <span>Feels like 32°C</span>
                        <span>Updated 10 min ago</span>
                    </div>
                </div>
            </div>

            {/* Weather Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Thermometer className="h-8 w-8 text-red-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Temperature</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">28°C</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Droplets className="h-8 w-8 text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Humidity</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">78%</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Wind className="h-8 w-8 text-gray-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Wind Speed</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">12 km/h</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Eye className="h-8 w-8 text-purple-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Visibility</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">8 km</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Gauge className="h-8 w-8 text-yellow-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Pressure</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">1013 hPa</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Droplets className="h-8 w-8 text-indigo-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">UV Index</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">6 High</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sun Times */}
            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sun Times</h3>
                <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                        <Sunrise className="h-6 w-6 text-orange-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Sunrise</p>
                            <p className="font-semibold text-gray-900 dark:text-white">6:24 AM</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Sunset className="h-6 w-6 text-orange-600" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Sunset</p>
                            <p className="font-semibold text-gray-900 dark:text-white">7:18 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
