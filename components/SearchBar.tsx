import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="flex space-x-2 mb-8">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                    placeholder="Search for a city..."
                    defaultValue="Mumbai"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
