import { MapPinOff, Settings } from 'lucide-react'
import React from 'react'

const DenyAcess = () => {
    return (
        <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg text-center">
                <MapPinOff className="h-16 w-16 text-red-500 dark:text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
                    Location Access Denied
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-6">
                    We need access to your location to provide accurate weather information for your area.
                </p>
                <button
                    onClick={() => alert("Please enable location access in your browser settings.\n\nChrome:\n1. Click the lock icon in the address bar.\n2. Set 'Location' to 'Allow'.\n3. Refresh the page.")}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Settings className="h-5 w-5" />
                    Enable Location Access
                </button>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Why do we need location access?
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        Get weather for your exact location
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        Receive accurate local forecasts
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        View nearby weather conditions
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        Get personalized weather alerts
                    </li>
                </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                    <strong>Alternative:</strong> You can still search for weather in any city using the search bar on the right.
                </p>
            </div>
        </div>
    )
}

export default DenyAcess
