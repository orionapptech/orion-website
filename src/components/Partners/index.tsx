"use client";

import Image from "next/image";

const Partners = () => {
  const partners = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-6 md:py-8 lg:py-10">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Our Partners
          </h2>
        </div>

        <div className="relative">
          {/* Logo grid - 2 rows x 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={`partner-${partner}`}
                className="flex items-center justify-center p-2"
              >
                <Image
                  src={`/partners/${partner}.png`}
                  alt={`Partner ${partner}`}
                  width={140}
                  height={80}
                  className="w-full h-auto object-contain transition-all duration-300 hover:scale-110 brightness-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
