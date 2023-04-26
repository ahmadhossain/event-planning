import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const items = [
    {
      label: "Can I have custom packages?",
      content: "Yes. You can create your own package.",
    },
    {
      label: "How can I confirm my order?",
      content: "You need to clear your payment.",
    },
    {
      label: "Can I have custom decoration?",
      content: "Yes.",
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
          className="flex justify-between p-3 bg-blue-50 border-b items-center cursor-pointer"
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
      <div className="border-x mb-24 border-t rounded max-w-4xl mx-auto">
        {renderedItems}
      </div>
    </div>
  );
}

export default Accordion;
