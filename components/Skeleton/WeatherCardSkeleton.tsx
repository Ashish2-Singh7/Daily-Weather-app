import React from 'react'
import { Skeleton } from '../ui/skeleton'

const WeatherCardSkeleton = () => {
    return (
        <div className='space-y-4'>
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <Skeleton className="h-8 w-8 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="text-right space-y-2">
                            <Skeleton className="h-4 w-16 bg-gray-200 dark:bg-gray-700" />
                            <Skeleton className="h-6 w-12 bg-gray-200 dark:bg-gray-700" />
                        </div>
                    </div>
                    <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
                </div>
            ))}
        </div>
    )
}

export default WeatherCardSkeleton
