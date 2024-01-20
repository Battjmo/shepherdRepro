"use client";

import { useEffect, useState } from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";

export function ShepWrapper({ children }: { children: React.ReactNode }) {
  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
    },
    useModalOverlay: true,
  };

  const tourSteps: any = [
    {
      id: "welcome",
      text: "Welcome to A Test Project! This is a quick tour of the features you can expect to find here.",
      attachTo: {
        element: "#tutorialAnchor",
        on: "bottom",
      },
      buttons: [
        {
          classes: "shepherd-button-secondary",
          text: "Exit",
          type: "cancel",
        },
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      classes:
        "flex flex-col z-40 bg-white text-black border-black border-2 border-dashed p-3 ",
    },
    {
      id: "secondi",
      text: "Welcome to A Test Project! This is a quick tour of the features you can expect to find here.",
      attachTo: {
        element: "#tutorialAnchor",
        on: "top",
      },
      classes:
        "flex flex-col z-40 bg-white text-black border-black border-2 border-dashed p-3 ",
    },
  ];

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <ShepherdTour steps={tourSteps} tourOptions={tourOptions}>
      {children}
    </ShepherdTour>
  );
}

export default ShepWrapper;
