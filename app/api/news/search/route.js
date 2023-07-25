import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  const url = `https://${process.env.SEARCH_NEWS_HOST}/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.NEWS_KEY,
      "X-RapidAPI-Host": process.env.SEARCH_NEWS_HOST,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };
  try {
    const response = await fetch(url, options);

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error, success: false });
  }
}
