"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProjectsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    { id: 1, image: "/projects/1.jpg", delayClass: "delay-0" },
    { id: 2, image: "/projects/2.jpg", delayClass: "delay-100" },
    { id: 3, image: "/projects/3.jpg", delayClass: "delay-200" },
    { id: 4, image: "/projects/4.jpg", delayClass: "delay-300" },
    { id: 5, image: "/projects/5.jpg", delayClass: "delay-[400ms]" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-purple-500/5 py-12 dark:from-primary/10 dark:via-bg-color-dark dark:to-purple-500/10 md:py-16"
    >
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2
            className={`mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-sm text-body-color dark:text-body-color-dark transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Showcasing our portfolio of innovative solutions
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className={`mx-auto max-w-7xl transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="custom-scrollbar flex gap-4 overflow-x-auto pb-4 md:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{ width: '600px' }}
              >
                {/* 3:2 Aspect Ratio Container */}
                <div className="relative h-[400px] w-[600px] overflow-hidden rounded-lg bg-gray-100 dark:bg-dark">
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
          >
            Start Your Project
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4A6CF7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3451d4;
        }
      `}</style>
    </section>
  );
};

export default ProjectsShowcase;
