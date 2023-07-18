import { NextResponse } from "next/server";
import fixturesData from "../../../data/fixtures.json";

export async function GET(request: Request) {
  return NextResponse.json(fixturesData);
}
