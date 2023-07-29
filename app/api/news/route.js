import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";


export  async function GET(request) {
  const url = `https://newsdata2.p.rapidapi.com/news?country=us&category=entertainment%2C%20business%2C%20science&language=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEWS_KEY,
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
      "Access-Control-Allow-Origin":  "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };

  try {
    const response = await fetch(url, options, {
      cache: "no-store",
    });
    const result = await response.json();
    //To dynamically get the path
    const path = request.nextUrl.searchParams.get("path") || "/";

    revalidatePath(path);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error, success: false})
  }
}