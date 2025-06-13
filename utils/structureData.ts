export const formStructuredData = (res) => {
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

        visibilityKm: `${res.current.vis_km} km`,
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