"use client";
import Link from "next/link";
import OddsItem from "@/app/components/OddsItem/OddsItem";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Filter from "@/app/components/Filter/Filter";
import { categorizeTimestampsByHour } from "@/util/dateFormat";

export type OddsPageProps = {
  params: {
    id: string;
  };
};

export type Odds = {
  bookmaker_id: string;
  odds_type: string;
  fixture_id: string;
  timestamp: string;
  market_parameters: string;
  price_names: string[];
  prices: number[];
};

async function getOdds(id: string): Promise<Odds[]> {
  const res = await fetch(`http://localhost:3000/api/odds?id=${id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default function OddsPage({ params: { id } }: OddsPageProps) {
  const [odds, setOdds] = useState<Odds[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedHour, setSelectedHour] = useState<string>("");

  const { user } = useUser();

  useEffect(() => {
    async function fetchOdds() {
      setIsLoading(true);
      const data = await getOdds(id);
      setOdds(data);
      setIsLoading(false);
    }
    fetchOdds();
  }, [id]);

  const timestamps = odds.map((odd) => odd.timestamp);
  const hourOptions = categorizeTimestampsByHour(timestamps);

  const filteredOdds = selectedHour
    ? odds.filter(
        (odd) =>
          new Date(Number(odd.timestamp)).getHours().toString() === selectedHour
      )
    : odds;
  return (
    <div>
      <main className="p-10">
        <div className="flex flex-col">
          <Link
            className="primary-container on-primary-container-text hover:surface-tint-2 p-2 px-4 rounded-full w-24"
            href="/"
          >
            Go back
          </Link>
          <h1 className="title-large primary-text">Odds</h1>
        </div>

        {!user && !isLoading && (
          <div className="surface-tint-1 p-4 rounded-md my-4 text-center">
            <p className="on-surface-text font-medium p-2">
              Log in to see the odds
            </p>
            <a
              className="primary-container on-primary-container-text hover:surface-tint-2 p-2 px-4 rounded-full w-24"
              href="/api/auth/login"
            >
              LOGIN
            </a>
          </div>
        )}

        {isLoading && (
          <div className="surface-tint-1 p-4 rounded-md my-4 text-center">
            <p className="outline-text font-medium">Loading...</p>
          </div>
        )}

        {!odds.length && !isLoading && (
          <div className="surface-tint-1 p-4 rounded-md my-4 text-center">
            <p className="outline-text font-medium">No odds available</p>
          </div>
        )}
        {user && (
          <div>
            <Filter
              options={hourOptions}
              onChange={(value) => setSelectedHour(value)}
            />

            {filteredOdds.map((odd, index) => (
              <OddsItem key={index} odd={odd} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
