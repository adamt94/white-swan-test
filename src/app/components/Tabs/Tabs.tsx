"use client";
import { useState, ReactNode, Children } from "react";

type TabsProps = {
  tabs: String[];
  children: ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="overflow-hidden rounded-xl w-full">
      <ul
        className="mb-px flex items-center justify-center gap-4 text-sm font-medium"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <li key={index} role="presentation" className="flex-1">
            <button
              className={`relativey gap-2 px-1 py-3 hover:primary-text ${
                activeTab === index
                  ? "primary-text after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-ful"
                  : "outline-text"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {`${tab}:00`}
            </button>
          </li>
        ))}
      </ul>
      <div className="py-6">{Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default Tabs;
