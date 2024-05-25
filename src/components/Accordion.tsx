import { useEffect, useState } from "react";
import "../App.css";
import { AccordionTypes } from "../types";

const AccordionItem = ({ title, description }: AccordionTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Check if it's the initial load and set isOpen accordingly
    if (initialLoad) {
      setIsOpen(true); // Set to true to keep the accordion open initially
      setInitialLoad(false); // Update initialLoad state
    }
  }, [initialLoad]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center mb-6">
      <div
        className={`accordion-item text-white shadow-lg w-[100%] md:w-[40%]  ${
          isOpen ? "open" : "closed"
        }`}>
        <button
          className="w-full bg-zinc-900 text-left pt-8 pb-4 px-8 border"
          onClick={toggleAccordion}>
          <h2 className="text-[18px] lg:text-[32px] flex items-center border-b-2  ">
            <i
              className={`bx bxs-right-arrow text-[12px] lg:text-[18px] mr-2 transition-transform duration-[1s] ease-in-out`}
              style={{
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}></i>
            {title}
          </h2>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "100%" : "0",
            transition: "max-height 0.5s ease-out",
            overflow: "hidden",
          }}>
          <div className="bg-white px-8 py-4 text-[#969696]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
