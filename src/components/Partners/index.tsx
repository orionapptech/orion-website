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

        <div className="relative">
          {/* Logo grid - 2 rows x 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div
                key={`partner-${partner}`}
                className="flex items-center justify-center p-4"
              >
                <Image
                  src={`/partners/${partner}.png`}
                  alt={`Partner ${partner}`}
                  width={200}
                  height={120}
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
