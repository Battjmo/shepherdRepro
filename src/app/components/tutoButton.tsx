"use client";

import { useContext } from "react";
import { ShepherdTourContext } from "react-shepherd";

const TutoButton = () => {
  const tour = useContext(ShepherdTourContext);
  return (
    <button
      onClick={tour ? tour.start : () => false}
      type="button"
      className={`text-white bg-blue rounded invisible xl:visible lg:w-3/12 h-16 md:h-12 
      `}
    >
      Start the Tutorial!
    </button>
  );
};

export default TutoButton;
