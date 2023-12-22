import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const plus = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="sienna"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );

  const minus = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="sienna"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  );

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header flex justify-between hover:cursor-pointer transition duration-500 ease-in-out ${
          isOpen ? "bg-transparent" : ""
        }`}
        onClick={toggleAccordion}
      >
        <span className="accordion-title text-3xl font-extralight cursor-pointer">
          {title}
        </span>
        <span className="accordion-icon mt-3">{isOpen ? minus : plus}</span>
      </div>
      <div
        className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen p-2" : "max-h-0 p-0"
        }`}
      >
        {content}
      </div>
      <div className="flex flex-row items-center cursor-pointer">
        <hr className="h-0.5 w-96 my-8 bg-sienna border-0 dark:bg-sienna"></hr>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
};
