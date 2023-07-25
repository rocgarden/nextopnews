import { NextResponse } from "next/server";
// export async function GET(request) {
//     return new Response('Hola mom , nextJs')
// }
// export async function GET() {
//   const res = await fetch(url);
//   const response = await res.json();
//   return NextResponse.json(response);
// }

export  async function GET(request) {
  const url = `${process.env.NEWS_HOST}/news?country=us&category=entertainment%2C%20business%2C%20science&language=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEWS_KEY,
      "X-RapidAPI-Host": process.env.NEWS_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
   return NextResponse.json(result)
  } catch (error) {
    console.error("error while fetch",error);
  }
}