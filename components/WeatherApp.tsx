import React from 'react'
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';
import LeftSection from './LeftSection';

const WeatherApp = () => {

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="/logo-2.png"
                                alt="Daily Weather Logo"
                                className="h-16 w-16 object-contain"
                            />
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Daily Weather</h1>
                                <p className="text-gray-600 dark:text-gray-300">Stay updated with real-time weather information</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Weather Cards */}
                    <LeftSection />

                    {/* Right Side - Search and Weather Details */}
                    <div className="lg:col-span-2">
                        <SearchBar />
                        <WeatherDetails />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
