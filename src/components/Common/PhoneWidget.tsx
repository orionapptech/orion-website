"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PhoneWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "(363) 999-0447";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded view with phone number */}
      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-3 transition-all duration-300">
          <div className="rounded-lg bg-white dark:bg-dark shadow-xl border border-stroke dark:border-dark-3 p-3 whitespace-nowrap">
            <p className="text-sm text-body-color dark:text-body-color-dark mb-2">
              Call us now
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-lg font-semibold text-primary hover:text-primary/80 transition"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => window.location.href = `tel:${phoneNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Call us"
      >
        <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
      </button>
    </div>
  );
};

export default PhoneWidget;
