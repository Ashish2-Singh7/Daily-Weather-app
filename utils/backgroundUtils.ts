export const getLocationBackground = async (location: string | undefined): Promise<string> => {
    if (location) {
        const res = await fetch(`https://daily-weather-app-five.vercel.app/api/image?location=${encodeURIComponent(location)}`);
        const data = await res.json();
        return data.image;
    }
    else {
        return 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
};
export const getLocationGradientOverlay = (): string => {
    const gradients = [
        'from-blue-900/70 via-purple-800/50 to-indigo-600/40',
        'from-red-900/70 via-orange-700/50 to-yellow-500/40',
        'from-green-900/70 via-blue-800/50 to-teal-600/40',
        'from-pink-900/70 via-pink-700/50 to-red-600/40',
        'from-cyan-900/70 via-sky-700/50 to-indigo-500/40'
    ];

    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
};
