import React from 'react'
import { Skeleton } from '../ui/skeleton';

const WeatherDetailsSkeleton = () => {
    return (
        <div className="space-y-6">
            {/* Main Weather Card Skeleton */}
            <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg animate-pulse">
                <div className="text-center mb-6">
                    <Skeleton className="h-8 w-32 mx-auto mb-2 bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-24 mx-auto bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="flex items-center justify-center mb-6">
                    <Skeleton className="h-20 w-20 rounded-full mr-4 bg-gray-200 dark:bg-gray-700" />
                    <div className="text-center">
                        <Skeleton className="h-12 w-20 mb-2 bg-gray-200 dark:bg-gray-700" />
                        <Skeleton className="h-6 w-24 bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>

                <div className="flex justify-between">
                    <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-24 bg-gray-200 dark:bg-gray-700" />
                </div>
            </div>

            {/* Weather Stats Grid Skeleton */}
            <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg animate-pulse"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex items-center space-x-3">
                            <Skeleton className="h-8 w-8 rounded bg-gray-200 dark:bg-gray-700" />
                            <div>
                                <Skeleton className="h-4 w-16 mb-1 bg-gray-200 dark:bg-gray-700" />
                                <Skeleton className="h-6 w-12 bg-gray-200 dark:bg-gray-700" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sun Times Skeleton */}
            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg animate-pulse">
                <Skeleton className="h-6 w-20 mb-4 bg-gray-200 dark:bg-gray-700" />
                <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded bg-gray-200 dark:bg-gray-700" />
                        <div>
                            <Skeleton className="h-4 w-12 mb-1 bg-gray-200 dark:bg-gray-700" />
                            <Skeleton className="h-5 w-16 bg-gray-200 dark:bg-gray-700" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded bg-gray-200 dark:bg-gray-700" />
                        <div>
                            <Skeleton className="h-4 w-12 mb-1 bg-gray-200 dark:bg-gray-700" />
                            <Skeleton className="h-5 w-16 bg-gray-200 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetailsSkeleton
