import { Fixture as FixtureItem } from "@/app/page";
import { formatDateTimeHhMm } from "@/util/dateFormat";

type FixtureProps = {
  fixture: FixtureItem;
  onItemClick: (fixture: FixtureItem) => void;
};

const FixtureItem: React.FC<FixtureProps> = ({ fixture, onItemClick }) => {
  return (
    <div
      onClick={() => onItemClick(fixture)}
      className="px-6 py-2 rounded-lg overflow-hidden list-none hover:surface-tint-1 cursor-pointer grid grid-flow-col grid-cols-3 items-center"
    >
      <p className="on-surface-text title-small flex-grow">{fixture.home}</p>
      <p className="primary-text title-small w-16 font-semibold  border p-1 surface-tint-1 rounded-full m-auto">
        {formatDateTimeHhMm(fixture.start_time)}
      </p>
      <p className="on-surface-text title-small flex-grow">{fixture.away}</p>
    </div>
  );
};

export default FixtureItem;
