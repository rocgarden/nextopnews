import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export  async function GET(request) {
  const url = "https://google-news13.p.rapidapi.com/latest?lr=en-US";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEWS_KEY,
    'x-rapidapi-host': 'google-news13.p.rapidapi.com',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    cache: "no-store",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
   return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ message: error, success: false})
  }
}

