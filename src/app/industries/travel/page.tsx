import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlane, 
  faHotel, 
  faMapMarkedAlt, 
  faTicketAlt, 
  faPassport, 
  faUmbrellaBeach, 
  faRoute, 
  faGlobe, 
  faCalendarAlt, 
  faCreditCard, 
  faStar, 
  faMobileAlt,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faUsers,
  faChartLine,
  faBrain,
  faCamera
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Travel & Tourism Software Development | Complete Booking Solutions",
  description: "Build world-class travel platforms with flight booking, hotel reservations, tour packages, and AI-powered itinerary planning. 2M+ bookings processed.",
  keywords: "travel software, booking platform, flight booking system, hotel reservation, tour management, travel technology, GDS integration, amadeus, sabre"
};



export default function TravelIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-400/20 to-pink-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: Travel Booking Dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-purple-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Booking Stats Dashboard */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Travel Analytics</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Active</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">2M+</div>
                        <div className="text-sm text-white/70">Bookings</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">150+</div>
                        <div className="text-sm text-white/70">Destinations</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">500K+</div>
                        <div className="text-sm text-white/70">Hotels</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">24/7</div>
                        <div className="text-sm text-white/70">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Access Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faPlane, label: "Flights", color: "from-cyan-400 to-blue-500" },
                      { icon: faHotel, label: "Hotels", color: "from-purple-400 to-pink-500" },
                      { icon: faTicketAlt, label: "Tours", color: "from-orange-400 to-red-500" },
                      { icon: faUmbrellaBeach, label: "Packages", color: "from-green-400 to-emerald-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Popular Destinations */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Trending Destinations</div>
                    <div className="space-y-2">
                      {[
                        { dest: 'Bali, Indonesia', price: '$899', rating: '4.9', color: 'cyan' },
                        { dest: 'Paris, France', price: '$1299', rating: '4.8', color: 'purple' },
                        { dest: 'Dubai, UAE', price: '$1099', rating: '4.9', color: 'orange' },
                      ].map((trip, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{trip.dest}</div>
                            <div className="text-xs text-white/60">{trip.price} · ⭐ {trip.rating}</div>
                          </div>
                          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-white/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faPlane} className="h-8 w-8 text-cyan-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 dark:border-cyan-800 dark:bg-cyan-900/30">
                <FontAwesomeIcon icon={faPlane} className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  Travel & Tourism
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Travel Tech That
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Inspires Adventure</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Comprehensive travel platforms with flight booking, hotel reservations, tour packages, and AI-powered itinerary planning. Power every journey from dream to destination.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">2M+</div>
                  <div className="text-sm text-body-color">Bookings</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">150+</div>
                  <div className="text-sm text-body-color">Countries</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">500K+</div>
                  <div className="text-sm text-body-color">Hotels</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">24/7</div>
                  <div className="text-sm text-body-color">Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Launch Your Platform</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-cyan-600 px-8 py-4 text-lg font-semibold text-cyan-600 transition-all hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Travel Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">GDS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">PCI Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">ISO Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-purple-50/50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-purple-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Complete Travel Software Solutions
            </h2>
            <p className="text-lg text-body-color">
              From flight booking to tour management – comprehensive travel technology for modern businesses
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faPlane,
                title: 'Flight Booking & GDS',
                description: 'Multi-airline booking with real-time availability via Amadeus, Sabre, Travelport. Price comparison, seat selection, and automated ticketing.',
                gradient: 'from-cyan-400 to-blue-500'
              },
              {
                icon: faHotel,
                title: 'Hotel Reservations',
                description: 'Complete hotel booking engine with 500K+ properties, channel manager, dynamic pricing, and property management system.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faTicketAlt,
                title: 'Tour & Activity Booking',
                description: 'Book experiences, guided tours, attractions, and adventure activities with instant confirmation and mobile tickets.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faUmbrellaBeach,
                title: 'Package Holidays',
                description: 'Customizable vacation packages combining flights, hotels, and activities with dynamic pricing and seasonal offers.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faBrain,
                title: 'AI Trip Planning',
                description: 'Intelligent itinerary builder with personalized recommendations, route optimization, and smart destination suggestions.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faGlobe,
                title: 'B2B Travel Portals',
                description: 'White-label solutions for agencies with markup management, multi-currency, API access, and commission tracking.',
                gradient: 'from-yellow-400 to-amber-500'
              },
            ].map((solution, idx) => (
              <div key={idx} className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                <div className="relative">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${solution.gradient}`}>
                    <FontAwesomeIcon icon={solution.icon} className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{solution.title}</h3>
                  <p className="text-body-color leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Enterprise Travel Technology Stack
            </h2>
            <p className="text-lg text-body-color">
              Built on proven technologies with seamless GDS integration and scalable infrastructure
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                <FontAwesomeIcon icon={faPlane} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">GDS & APIs</h3>
              <ul className="space-y-3">
                {[
                  'Amadeus GDS Integration',
                  'Sabre API Connectivity',
                  'Travelport Universal API',
                  'Google Flights & Hotels',
                  'Booking.com Integration',
                  'Airbnb API'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Frontend & Mobile</h3>
              <ul className="space-y-3">
                {[
                  'React & Next.js Web',
                  'React Native for iOS/Android',
                  'Flutter Cross-Platform',
                  'Google Maps SDK',
                  'Progressive Web Apps',
                  'Offline Booking Support'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Backend & Security</h3>
              <ul className="space-y-3">
                {[
                  'Node.js & Python',
                  'MongoDB & PostgreSQL',
                  'Redis Caching',
                  'PCI-DSS Payment Security',
                  'Stripe & PayPal',
                  'AWS/Azure Cloud'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-purple-50/50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-purple-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Leading Travel Companies Choose Us
            </h2>
            <p className="text-lg text-body-color">
              Powering 2M+ bookings with 99.9% uptime and seamless traveler experiences
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBolt,
                title: 'Real-Time Availability',
                description: 'Live inventory sync with GDS systems. Instant booking confirmations, seat selection, and dynamic pricing.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faShieldHalved,
                title: 'Secure Payments',
                description: 'PCI-DSS Level 1 compliance with encryption, fraud detection, and support for 150+ payment gateways.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faBrain,
                title: 'AI-Powered Search',
                description: 'Smart filters, flexible dates, price predictions, and personalized recommendations that boost conversions by 3x.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faGlobe,
                title: 'Multi-Currency & Language',
                description: 'Support for 50+ currencies with automatic conversion, localized content, and regional payment methods.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faUsers,
                title: 'Loyalty & Rewards',
                description: 'Built-in loyalty programs with points, tier benefits, exclusive deals, and referral systems.',
                gradient: 'from-red-400 to-pink-500'
              },
              {
                icon: faChartLine,
                title: 'Analytics & Insights',
                description: 'Real-time dashboards for bookings, revenue, customer behavior, and seasonal demand forecasting.',
                gradient: 'from-indigo-400 to-blue-500'
              },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                <div className="relative">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                    <FontAwesomeIcon icon={feature.icon} className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                  <p className="text-body-color leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Transform Travel Experiences?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join the travel revolution. Build booking platforms that power 2M+ journeys with seamless GDS integration and AI-powered planning.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <FontAwesomeIcon icon={faEye} />
                <span>View Portfolio</span>
              </Link>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">2M+</div>
                <div className="text-white/80">Bookings Processed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">150+</div>
                <div className="text-white/80">Destinations</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}