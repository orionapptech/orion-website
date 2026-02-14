"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              <div className="mx-auto text-center mb-9">
                <svg
                  className="w-full mx-auto text-center"
                  height="210"
                  viewBox="0 0 474 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M25 163.051H101.211V191H133.308V163.051H153V136.111H133.308V32H91.2871L25 136.577V163.051ZM101.831 136.111H58.8025V134.869L100.591 68.6445H101.831V136.111Z"
                    stroke="url(#paint0_linear_116:1137)"
                    strokeWidth="3"
                  />
                  <path
                    opacity="0.5"
                    d="M307 133.051H383.211V161H415.308V133.051H435V106.111H415.308V2H373.287L307 106.577V133.051ZM383.831 106.111H340.803V104.869L382.591 38.6445H383.831V106.111Z"
                    stroke="url(#paint1_linear_116:1137)"
                    strokeWidth="3"
                  />
                  <circle
                    opacity="0.8"
                    cx="227.5"
                    cy="81.5"
                    r="68.5"
                    fill="#4A6CF7"
                  />
                  <mask
                    id="mask0_116:1137"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="159"
                    y="13"
                    width="137"
                    height="137"
                  >
                    <circle
                      opacity="0.8"
                      cx="227.5"
                      cy="81.5"
                      r="68.5"
                      fill="#4A6CF7"
                    />
                  </mask>
                  <g mask="url(#mask0_116:1137)">
                    <circle
                      opacity="0.8"
                      cx="227.5"
                      cy="81.5"
                      r="68.5"
                      fill="url(#paint2_radial_116:1137)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_116:1137)">
                      <circle
                        cx="233.543"
                        cy="49.2645"
                        r="28.2059"
                        fill="white"
                      />
                    </g>
                  </g>
                  <path
                    d="M197.477 81.5C197.477 120.871 207.116 145.619 227.477 145.619C247.838 145.619 257.477 120.871 257.477 81.5C257.477 42.1288 247.838 17.3806 227.477 17.3806C207.116 17.3806 197.477 42.1288 197.477 81.5Z"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="227.477"
                    cy="81.5"
                    rx="26.7916"
                    ry="50.2406"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M173.043 71.5091L282.912 71.5091"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M177.477 103.048L277.477 103.048"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <defs>
                    <filter
                      id="filter0_f_116:1137"
                      x="175.337"
                      y="-8.94141"
                      width="116.412"
                      height="116.412"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="15"
                        result="effect1_foregroundBlur_116:1137"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_116:1137"
                      x1="28.5"
                      y1="22"
                      x2="142"
                      y2="184"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_116:1137"
                      x1="310.5"
                      y1="-8"
                      x2="424"
                      y2="154"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient
                      id="paint2_radial_116:1137"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(227.5 81.5) rotate(90) scale(68.5)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Page Not Found
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Sorry, the page you are looking for doesn&#39;t exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                  Back to Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
