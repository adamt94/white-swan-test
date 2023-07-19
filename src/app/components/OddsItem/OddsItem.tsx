"use cleint";

import { Odds } from "@/app/odds/[id]/page";
import bookmakersData from "@/data/bookmakers.json";
import { formatDateTimeHhMm } from "@/util/dateFormat";

type OddsItemProps = {
  odd: Odds;
};

export default function OddsItem({ odd }: OddsItemProps) {
  if (!odd.prices.length) return null;

  return (
    <div className="flex flex-row surface-tint-1 p-2 items-center border-b on-surface-variant-border">
      <div className="label-large primary-text font-semibold mx-2">
        {
          bookmakersData.find(
            (bookmaker) => bookmaker.bookmaker_id === odd.bookmaker_id
          )?.name
        }
      </div>

      <div>
        <p className="on-surface-text title-small flex-grow">
          {formatDateTimeHhMm(Number(odd.timestamp))}
        </p>
      </div>
      <div className="flex-grow">
        <div className="flex justify-around  py-2  overflow-hidden list-none">
          {odd.price_names.map((name, index) => (
            <p key={index} className="outline-text title-small ">
              {name}
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-around">
          {odd.prices.map((price, index) => (
            <div className="text-center" key={index}>
              <p className="primary-text title-small w-16  border p-1 surface-tint-1 rounded-full flex-grow">
                {price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
