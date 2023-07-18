import { NextRequest, NextResponse } from "next/server";
import oddsData from "../../../data/Odds.json";
import bookmakersData from "../../../data/bookmakers.json";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const odds = oddsData.filter((odd) => odd.fixture_id === id);

    const oddsWithBookmakers = odds.map((odd) => {
        const bookmaker = bookmakersData.find((b) => b.bookmaker_id === odd.bookmaker_id);
        return {
          ...odd,
          bookmaker_name: bookmaker ? bookmaker.name : "Unknown",  
          price_names: JSON.parse(odd.price_names).map(String),
          prices: JSON.parse(odd.prices).map(Number),
        };
      });
      return NextResponse.json(oddsWithBookmakers);

}

