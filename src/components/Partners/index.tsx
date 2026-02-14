"use client";

import Image from "next/image";

const Partners = () => {
  const partners = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-8 md:py-10 lg:py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Partners
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-light dark:from-bg-color-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-light dark:from-bg-color-dark to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={`partner-${partner}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={`/partners/${partner}.png`}
                  alt={`Partner ${partner}`}
                  width={150}
                  height={80}
                  className="h-20 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`partner-duplicate-${partner}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={`/partners/${partner}.png`}
                  alt={`Partner ${partner}`}
                  width={150}
                  height={80}
                  className="h-20 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
