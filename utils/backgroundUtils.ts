// Utility function to get background images based on location
export const getLocationBackground = (location: string): string => {
    const locationBackgrounds: Record<string, string> = {
        mumbai: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Mumbai skyline
        delhi: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Delhi cityscape
        bangalore: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Bangalore tech city
        chennai: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Chennai marina
        kolkata: 'https://images.unsplash.com/photo-1558431382-27bbae852b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Kolkata heritage
        default: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' // Default mountain/sky
    };

    const normalizedLocation = location.toLowerCase().trim();
    return locationBackgrounds[normalizedLocation] || locationBackgrounds.default;
};

export const getLocationGradientOverlay = (location: string): string => {
    const gradients: Record<string, string> = {
        mumbai: 'from-blue-900/70 via-blue-800/50 to-orange-600/40',
        delhi: 'from-red-900/70 via-orange-800/50 to-yellow-600/40',
        bangalore: 'from-green-900/70 via-blue-800/50 to-purple-600/40',
        chennai: 'from-blue-900/70 via-teal-800/50 to-green-600/40',
        kolkata: 'from-purple-900/70 via-pink-800/50 to-orange-600/40',
        default: 'from-blue-900/70 via-purple-800/50 to-indigo-600/40'
    };

    const normalizedLocation = location.toLowerCase().trim();
    return gradients[normalizedLocation] || gradients.default;
};
