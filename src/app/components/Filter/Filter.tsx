import { useState } from "react";

type FilterProps = {
  options: string[];
  onChange: (value: string) => void;
};

export default function Filter({ options, onChange }: FilterProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="surface-tint-1 rounded-lg p-2 m-2"
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
