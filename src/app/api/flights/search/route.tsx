import { NextResponse } from 'next/server';


export async function GET(req: Request) {
    // Fetching flight data from an external API
    const url = new URL(req.url);
    const origin = url.searchParams.get("origin") || "JFK";
    const destination = url.searchParams.get("destination") || "LAX";


    // placeholder for flight data
    const mockFlights = [
        {airline: "TestAir", price: 300, origin, destination },
    ];
    return NextResponse.json(mockFlights);


}