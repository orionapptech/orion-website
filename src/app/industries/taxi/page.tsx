import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTaxi, 
  faCar, 
  faMapMarkedAlt, 
  faRoute, 
  faCreditCard, 
  faUserCheck, 
  faShieldAlt, 
  faChartLine, 
  faBell, 
  faMobileAlt, 
  faUsers, 
  faStar,
  faCheckCircle,
  faArrowRight,
  faEye,
  faBolt,
  faBrain,
  faGauge
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Taxi & Ride-Sharing App Development | Complete Uber-Like Solutions",
  description: "Build powerful ride-hailing platforms with real-time GPS tracking, smart dispatch, driver management, and dynamic pricing. 10M+ rides completed.",
  keywords: "taxi app development, ride-sharing platform, Uber clone, ride-hailing software, GPS tracking, driver management, dispatch system"
};

export default function TaxiIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-400/20 to-red-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-orange-600/10 to-red-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Ride Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">10M+</div>
                        <div className="text-sm text-white/70">Rides</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">500K+</div>
                        <div className="text-sm text-white/70">Drivers</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">100+</div>
                        <div className="text-sm text-white/70">Cities</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">4.8★</div>
                        <div className="text-sm text-white/70">Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faTaxi, label: "Book Ride", color: "from-yellow-400 to-orange-500" },
                      { icon: faMapMarkedAlt, label: "Track", color: "from-blue-400 to-cyan-500" },
                      { icon: faUsers, label: "Drivers", color: "from-purple-400 to-pink-500" },
                      { icon: faChartLine, label: "Analytics", color: "from-green-400 to-emerald-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Active Rides</div>
                    <div className="space-y-2">
                      {[
                        { ride: 'Downtown to Airport', driver: 'John D.', eta: '12 min' },
                        { ride: 'Mall to Home', driver: 'Sarah M.', eta: '8 min' },
                        { ride: 'Office to Hotel', driver: 'Mike R.', eta: '15 min' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.ride}</div>
                            <div className="text-xs text-white/60">{item.driver} · ETA {item.eta}</div>
                          </div>
                          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-white/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faCar} className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faRoute} className="h-8 w-8 text-orange-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 dark:border-yellow-800 dark:bg-yellow-900/30">
                <FontAwesomeIcon icon={faTaxi} className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  Taxi & Ride-Sharing
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Ride-Hailing That
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Moves Cities</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Complete Uber-like platforms with real-time GPS tracking, smart dispatch, driver management, and dynamic pricing. Power 10M+ rides with 500K+ drivers across 100+ cities.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">10M+</div>
                  <div className="text-sm text-body-color">Rides</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">500K+</div>
                  <div className="text-sm text-body-color">Drivers</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">100+</div>
                  <div className="text-sm text-body-color">Cities</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">4.8★</div>
                  <div className="text-sm text-body-color">Rating</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Launch Platform</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-yellow-600 px-8 py-4 text-lg font-semibold text-yellow-600 transition-all hover:bg-yellow-50 dark:hover:bg-yellow-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Demo</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Real-Time GPS</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Smart Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Safe Rides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-red-50/50 dark:from-yellow-950/20 dark:via-orange-950/10 dark:to-red-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete Ride-Hailing Solutions</h2>
            <p className="text-lg text-body-color">From booking to payment – end-to-end taxi platform technology</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faTaxi,
                title: 'Ride-Hailing Platforms',
                description: 'Complete Uber-like ecosystem with passenger & driver apps, admin panel, web booking, and automated dispatch system.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faMapMarkedAlt,
                title: 'Real-Time GPS Tracking',
                description: 'Live location updates, route optimization, ETA calculations, geofencing, and turn-by-turn navigation integration.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faCreditCard,
                title: 'Payment Integration',
                description: 'Cards, digital wallets, cash on delivery, fare calculation, split payments, tips, and automated driver payouts.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faUserCheck,
                title: 'Driver Management',
                description: 'Onboarding, document verification, background checks, earnings tracking, performance analytics, and incentive programs.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faRoute,
                title: 'Smart Dispatch System',
                description: 'AI-powered ride matching, surge pricing, driver availability, heat maps, queue management, and load balancing.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faShieldAlt,
                title: 'Safety & Security',
                description: 'SOS emergency alerts, ride sharing with contacts, driver verification, trip monitoring, and insurance integration.',
                gradient: 'from-indigo-400 to-purple-500'
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise Ride-Hailing Technology Stack</h2>
            <p className="text-lg text-body-color">Built on scalable platforms with real-time GPS and smart routing</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Mobile & Navigation</h3>
              <ul className="space-y-3">
                {['React Native & Flutter', 'Google Maps SDK', 'Apple MapKit', 'Route Optimization', 'Offline Mode', 'Push Notifications'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faGauge} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Real-Time & Dispatch</h3>
              <ul className="space-y-3">
                {['Socket.io WebSockets', 'Redis Caching', 'AI Matching Algorithm', 'Load Balancing', 'Surge Pricing Engine', 'Queue Management'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faShieldAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Backend & Payments</h3>
              <ul className="space-y-3">
                {['Node.js Microservices', 'PostgreSQL & MongoDB', 'Stripe & PayPal', 'AWS Cloud', 'Twilio SMS', 'Analytics Dashboard'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-red-50/50 dark:from-orange-950/20 dark:via-yellow-950/10 dark:to-red-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Leading Taxi Companies Choose Us</h2>
            <p className="text-lg text-body-color">Powering 10M+ rides with 500K+ drivers across 100+ cities worldwide</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBolt, title: 'Lightning Fast Matching', description: 'AI-powered algorithms match riders with drivers in under 3 seconds for instant bookings and minimal wait times.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faShieldAlt, title: 'Safety First', description: 'Background checks, real-time monitoring, SOS alerts, ride sharing, and comprehensive insurance for peace of mind.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faBrain, title: 'Smart Routing & Pricing', description: 'AI-optimized routes, dynamic surge pricing, predictive demand analytics, and efficient driver allocation.', gradient: 'from-purple-400 to-pink-500' },
              { icon: faGauge, title: 'Scalable Infrastructure', description: 'Handle millions of concurrent users, rides, and real-time GPS updates with enterprise-grade cloud architecture.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faUsers, title: 'Driver Success Platform', description: 'Maximize driver earnings with smart incentives, flexible schedules, instant payouts, and performance insights.', gradient: 'from-red-400 to-pink-500' },
              { icon: faChartLine, title: 'Complete Analytics', description: 'Real-time dashboards for rides, revenue, driver performance, customer satisfaction, and operational metrics.', gradient: 'from-indigo-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Launch Your Ride-Hailing Platform?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 500K+ drivers and millions of riders. Build platforms that power urban mobility with real-time tracking and smart dispatch.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl">
                <span>Start Your Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                <FontAwesomeIcon icon={faEye} />
                <span>View Portfolio</span>
              </Link>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">10M+</div>
                <div className="text-white/80">Rides Completed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">500K+</div>
                <div className="text-white/80">Active Drivers</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">4.8★</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
