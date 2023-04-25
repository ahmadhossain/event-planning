import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const items = [
    {
      label: "Q1",
      content: "A1",
    },
    {
      label: "Q2",
      content: "A2",
    },
    {
      label: "Q3",
      content: "A3",
    },
  ];

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      <div className="border-x border-t rounded max-w-4xl mx-auto">
        {renderedItems}
      </div>
    </div>
  );
}

export default Accordion;
