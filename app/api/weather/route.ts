import { formStructuredData } from "@/utils/structureData";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const url = new URL(req.url);
        const qname = url.searchParams.get("query");
        console.log(qname);
        const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${qname}`, {
            next: {
                revalidate: 600
            }
        });

        const res = await weatherData.json();
        const structuredData = formStructuredData(res);
        return NextResponse.json(structuredData);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(error);
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}