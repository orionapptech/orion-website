"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-10 dark:from-black dark:via-gray-dark dark:to-black">
        <div className="container">
          {/* Logo and Company Name Section - Full Width */}
          <div className="mb-16 flex items-center justify-center gap-4 border-b border-white/10 pb-12">
            <Image
              src="/logo.png"
              alt="Orion App Tech"
              className="h-auto w-auto"
              width={60}
              height={60}
            />
            <h2 className="text-4xl font-bold uppercase text-primary md:text-5xl lg:text-6xl drop-shadow-[0_0_30px_rgba(74,108,247,0.6)]">
              ORION APP TECH
            </h2>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* About & Quote Section */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">Why Choose Us</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300 italic border-l-4 border-primary pl-4">
                "We engineer digital excellence. Your success is our mission."
              </p>
              <p className="text-xs text-gray-400">
                Trusted technology partner with global presence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-development" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Industries
                  </Link>
                </li>
                <li>
                  <Link href="/game-development" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Game Development
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-gray-300 hover:text-primary duration-300 flex items-center gap-2">
                    <span className="text-primary">›</span> Refund & Cancellations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Main Support</p>
                    <a href="mailto:support@orionapptech.com" className="hover:text-primary duration-300 font-semibold">
                      support@orionapptech.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Regional Offices</p>
                    <div className="space-y-1 text-sm">
                      <a href="mailto:usa@orionapptech.com" className="block hover:text-primary duration-300">🇺🇸 usa@orionapptech.com</a>
                      <a href="mailto:india@orionapptech.com" className="block hover:text-primary duration-300">🇮🇳 india@orionapptech.com</a>
                      <a href="mailto:europe@orionapptech.com" className="block hover:text-primary duration-300">🇪🇺 europe@orionapptech.com</a>
                      <a href="mailto:asia@orionapptech.com" className="block hover:text-primary duration-300">🌏 asia@orionapptech.com</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p>Within 8 Hours</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} <span className="text-primary font-semibold">Orion App Tech</span>. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with <span className="text-red-500">❤</span> for Digital Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute right-0 top-0 z-[-1] opacity-20">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none">
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_footer)" />
            <defs>
              <linearGradient id="paint0_linear_footer" x1="277" y1="-162" x2="277" y2="288">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 z-[-1] opacity-20">
          <svg width="364" height="201" viewBox="0 0 364 201" fill="none">
            <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_footer2)" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear_footer2" x1="0" y1="107.5" x2="364" y2="107.5">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
