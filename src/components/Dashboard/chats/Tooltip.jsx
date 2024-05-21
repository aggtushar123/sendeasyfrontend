import React from "react";

const Tooltip = ({ label, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="absolute z-10 px-2 py-1 bg-gray-700 text-white rounded-md -mt-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-200">
        {label}
      </div>
    </div>
  );
};

export default Tooltip;
