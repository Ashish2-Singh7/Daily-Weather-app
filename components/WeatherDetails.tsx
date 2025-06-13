
import React from 'react';
import {
    Thermometer,
    Droplets,
    Wind,
    Eye,
    Gauge,
    MapPin,
    Clock,
    Compass,
    AlertCircle
} from 'lucide-react';
import { getLocationBackground, getLocationGradientOverlay } from '@/utils/backgroundUtils';

type WeatherDetailsType = {
    locationName?: string;
    region?: string;
    country?: string;
    localTime?: string;
    temperatureCelsius?: string;
    feelsLikeCelsius?: string;
    condition?: string;
    conditionIcon?: string;
    humidityPercent?: string;
    cloudCoveragePercent?: string;
    windSpeedKph?: string;
    windDirection?: string;
    gustSpeedKph?: string;
    visibilityKm?: string;
    pressureMb?: number;
    uvIndex?: number;
    dewPointCelsius?: string;
    heatIndexCelsius?: string;
    windChillCelsius?: string;
    isDay?: boolean;
    lastUpdated?: string;
    error?: object;
};

const WeatherDetails = async ({ city }: { city: string | undefined }) => {

    let Wdetails: WeatherDetailsType = {};

    if (!(city === undefined || city.length == 0)) {
        const fetchCityWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`, { next: { revalidate: 600 } });
        const res = await fetchCityWeather.json();
        const formattedTime = (new Date(res.location?.localtime)).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        if (!res.error) {
            Wdetails = {
                locationName: res.location.name,
                region: res.location.region,
                country: res.location.country,
                localTime: formattedTime,

                temperatureCelsius: `${res.current.temp_c}°C`,
                feelsLikeCelsius: `${res.current.feelslike_c}°C`,
                condition: res.current.condition.text,
                conditionIcon: `https:${res.current.condition.icon}`,

                humidityPercent: `${res.current.humidity}%`,
                cloudCoveragePercent: `${res.current.cloud}%`,

                windSpeedKph: `${res.current.wind_kph} km/h`,
                windDirection: res.current.wind_dir,
                gustSpeedKph: `${res.current.gust_kph} km/h`,

                visibilityKm: `${res.current.vis_km} Km`,
                pressureMb: res.current.pressure_mb,
                uvIndex: res.current.uv,

                // Additional understandable technical fields
                dewPointCelsius: `${res.current.dewpoint_c}°C`,
                heatIndexCelsius: `${res.current.heatindex_c}°C`,
                windChillCelsius: `${res.current.windchill_c}°C`,

                isDay: Boolean(res.current.is_day),
                lastUpdated: res.current.last_updated,
            };
        }
        else {
            Wdetails = { ...res };
        }
    }

    const backgroundImage = await getLocationBackground(Wdetails?.locationName);
    const gradientOverlay = getLocationGradientOverlay();

    if (Wdetails.error) {
        return (
            <div className="space-y-6">
                <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Location Not Found</h3>
                            <p className="text-red-700 dark:text-red-300">
                                We {"couldn't"} find weather data for the location you searched. Please check the spelling and try again with a different city name or location.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                    <MapPin className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Try Another Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Make sure to enter a valid city name, state, or country. You can try searching for:
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                        <p>• Major cities: {`"New York", "London", "Tokyo"`}</p>
                        <p>• City with state: {`"Austin, TX" or "Mumbai, India"`}</p>
                        <p>• International locations: {"Paris, France"}</p>
                    </div>
                </div>
            </div>
        );
    }


    if (!city || city?.length === 0) {
        return (
            <div className="space-y-6">
                <div className="p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                    <MapPin className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        Get Started with Weather Search
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Search for any city or location to get detailed weather information including temperature, humidity, wind speed, and more.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Enter a city name in the search box above and click {"Search"} to begin
                    </p>
                </div>
            </div>
        );
    }
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
                        <h2 className="text-3xl font-bold mb-2">{Wdetails?.locationName}</h2>
                        <p className="text-white/80">{Wdetails?.region}, {Wdetails?.country}</p>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <img src={Wdetails.conditionIcon} alt="icon" className='h-20 w-20' />
                        <div className="text-center">
                            <p className="text-5xl font-bold mb-2">{Wdetails?.temperatureCelsius}</p>
                            <p className="text-lg text-white/80">{Wdetails?.condition}</p>
                        </div>
                    </div>

                    <div className="flex justify-between text-sm text-white/70">
                        <span>Feels like {Wdetails?.feelsLikeCelsius}</span>
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
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.temperatureCelsius}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Droplets className="h-8 w-8 text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Humidity</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.humidityPercent}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Wind className="h-8 w-8 text-gray-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Wind Speed</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.windSpeedKph}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Eye className="h-8 w-8 text-purple-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Visibility</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.visibilityKm}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Gauge className="h-8 w-8 text-yellow-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Pressure</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.pressureMb}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Droplets className="h-8 w-8 text-indigo-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">UV Index</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.uvIndex}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Compass className="h-8 w-8 text-green-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Wind Direction</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.windDirection}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Wind className="h-8 w-8 text-cyan-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Gust Speed</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{Wdetails?.gustSpeedKph}</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Sun Times */}
            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Details</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                        <Thermometer className="h-6 w-6 text-orange-500" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Dew Point</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{Wdetails?.dewPointCelsius}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Thermometer className="h-6 w-6 text-red-600" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Heat Index</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{Wdetails?.heatIndexCelsius}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Thermometer className="h-6 w-6 text-blue-600" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Wind Chill</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{Wdetails?.windChillCelsius}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-gray-600" />
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Local Time</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{Wdetails?.localTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
