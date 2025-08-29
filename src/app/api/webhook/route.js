import { NextResponse } from "next/server";
export async function GET() {
    console.log("helowwert")
  return NextResponse.json({ message:"hellow worled" });
}