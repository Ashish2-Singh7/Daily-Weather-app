import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    try {
        const url = new URL(req.url);
        const location = url.searchParams.get("location");

        if (!location) {
            return NextResponse.json({
                image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            });
        }

        const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(location)}&orientation=landscape&client_id=${process.env.UNSPLASH_ACCESS_KEY}`, {
            next: {
                revalidate: 600
            }
        });
        const data = await res.json();

        const imageUrl = data?.results?.[0]?.urls?.regular || 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

        return NextResponse.json({ image: imageUrl });

    } catch (error) {
        console.error("Image API Error:", error);
        return NextResponse.json({ error: 'Failed to fetch background image' }, { status: 500 });
    }
};
