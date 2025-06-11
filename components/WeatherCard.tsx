
import React from 'react';

interface WeatherCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    description: string;
}

const WeatherCard = ({ title, value, icon, description }: WeatherCardProps) => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600 dark:text-blue-400">
                    {icon}
                </div>
                <div className="text-right">
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
};

export default WeatherCard;