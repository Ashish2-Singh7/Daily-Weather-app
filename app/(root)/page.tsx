import WeatherApp from '@/components/WeatherApp'
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  const query = (await searchParams).query;
  return (
    <div>
      <WeatherApp city={query} />
    </div>
  )
}

export default page
