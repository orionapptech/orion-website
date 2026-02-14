import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUtensils, 
  faBiking, 
  faMapMarkedAlt, 
  faStore, 
  faCreditCard, 
  faClipboardList, 
  faBell, 
  faChartLine, 
  faMobileAlt, 
  faShoppingBag, 
  faStar, 
  faMotorcycle,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faBrain,
  faClock,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Food Delivery App Development | Restaurant Management Platform",
  description:
    "Build UberEats-like food delivery platforms. 20M+ orders delivered, 50K+ restaurants, real-time tracking, and restaurant management systems.",
  keywords: "food delivery app development, restaurant management software,  online ordering platform, delivery tracking system, restaurant marketplace, food ordering app, delivery logistics software",
};

export default function FoodDeliveryIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-red-400/20 to-orange-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-400/20 to-red-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-orange-600/10 to-yellow-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/20 to-orange-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Delivery Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Active</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">20M+</div>
                        <div className="text-sm text-white/70">Orders</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50K+</div>
                        <div className="text-sm text-white/70">Restaurants</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">100K+</div>
                        <div className="text-sm text-white/70">Delivery Partners</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">4.9★</div>
                        <div className="text-sm text-white/70">Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faUtensils, label: "Order", color: "from-red-400 to-orange-500" },
                      { icon: faBiking, label: "Deliver", color: "from-blue-400 to-cyan-500" },
                      { icon: faStore, label: "Restaurants", color: "from-purple-400 to-pink-500" },
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
                    <div className="mb-2 text-sm font-semibold text-white/90">Active Orders</div>
                    <div className="space-y-2">
                      {[
                        { order: 'Pizza Margherita', restaurant: 'Italian Bistro', time: '15 min' },
                        { order: 'Chicken Burger', restaurant: 'Burger House', time: '20 min' },
                        { order: 'Pad Thai', restaurant: 'Thai Kitchen', time: '12 min' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.order}</div>
                            <div className="text-xs text-white/60">{item.restaurant} · {item.time}</div>
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
                  <FontAwesomeIcon icon={faUtensils} className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faMotorcycle} className="h-8 w-8 text-orange-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-800 dark:bg-red-900/30">
                <FontAwesomeIcon icon={faUtensils} className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Food Delivery
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Food Delivery That
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Delights Everyone</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Complete UberEats-like platforms with restaurant management, real-time tracking, and delivery optimization. Connect 50K+ restaurants with 100K+ delivery partners to serve 20M+ orders.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">20M+</div>
                  <div className="text-sm text-body-color">Orders</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">50K+</div>
                  <div className="text-sm text-body-color">Restaurants</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">100K+</div>
                  <div className="text-sm text-body-color">Partners</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">4.9★</div>
                  <div className="text-sm text-body-color">Rating</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Launch Platform</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-red-600 px-8 py-4 text-lg font-semibold text-red-600 transition-all hover:bg-red-50 dark:hover:bg-red-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Demo</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Live Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Smart Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Multi-Restaurant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-yellow-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete Food Delivery Solutions</h2>
            <p className="text-lg text-body-color">From ordering to delivery – end-to-end restaurant platform technology</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faUtensils,
                title: 'Food Ordering Platforms',
                description: 'Multi-restaurant marketplace, menu management, food customization, special requests, favorites, reordering, and group orders.',
                gradient: 'from-red-400 to-orange-500'
              },
              {
                icon: faStore,
                title: 'Restaurant Management',
                description: 'Dashboard for menu updates, pricing, inventory, order management, analytics, customer reviews, and promotional campaigns.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faBiking,
                title: 'Delivery Management',
                description: 'Driver apps, order assignment, route optimization, fleet tracking, delivery verification, and proof of delivery.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faMapMarkedAlt,
                title: 'Live Order Tracking',
                description: 'Real-time GPS tracking, preparation status, delivery ETA, notifications, contact driver, and order history.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faCreditCard,
                title: 'Payment Processing',
                description: 'Multiple payment options, digital wallets, cash on delivery, split bills, tips, refunds, and automated payouts.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faClipboardList,
                title: 'Kitchen Display Systems',
                description: 'Digital order screens, prep time tracking, order prioritization, kitchen workflow optimization, and tablet integration.',
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise Food Delivery Technology Stack</h2>
            <p className="text-lg text-body-color">Built on scalable platforms with real-time tracking and smart logistics</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Mobile & Frontend</h3>
              <ul className="space-y-3">
                {['React Native & Flutter', 'Customer App', 'Restaurant App', 'Driver App', 'Web Ordering', 'Admin Dashboard'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Real-Time & Logistics</h3>
              <ul className="space-y-3">
                {['Socket.io WebSockets', 'Google Maps API', 'Route Optimization', 'AI Delivery Matching', 'Redis Caching', 'Push Notifications'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faStore} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Backend & Payments</h3>
              <ul className="space-y-3">
                {['Node.js Microservices', 'PostgreSQL & MongoDB', 'Stripe Payment Gateway', 'AWS Cloud', 'Twilio SMS', 'Analytics Engine'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-yellow-50/50 dark:from-orange-950/20 dark:via-red-950/10 dark:to-yellow-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Food Delivery Leaders Choose Us</h2>
            <p className="text-lg text-body-color">Powering 20M+ orders with 50K+ restaurants and 100K+ delivery partners</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBolt, title: 'Lightning Fast Delivery', description: 'AI-optimized routing, smart order batching, and efficient driver allocation for fastest delivery times and hot food.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faShieldHalved, title: 'Contactless & Safe', description: 'Zero-contact delivery, safety protocols, hygiene ratings, real-time tracking, and tamper-proof packaging.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faBrain, title: 'Smart Restaurant Tools', description: 'AI demand forecasting, dynamic pricing, inventory management, prep time optimization, and sales analytics.', gradient: 'from-purple-400 to-pink-500' },
              { icon: faClock, title: 'Real-Time Everything', description: 'Live order tracking, instant notifications, ETA updates, driver location, and seamless communication.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faUsers, title: 'Multi-Restaurant Support', description: 'Single cart for multiple restaurants, group orders, scheduled deliveries, and corporate catering solutions.', gradient: 'from-red-400 to-pink-500' },
              { icon: faChartLine, title: 'Complete Analytics', description: 'Real-time dashboards for orders, revenue, popular items, driver performance, and customer satisfaction metrics.', gradient: 'from-indigo-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Launch Your Food Delivery Platform?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 50K+ restaurants and 100K+ delivery partners. Build platforms that connect hungry customers with delicious food instantly.
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
                <div className="mb-3 text-3xl font-bold text-white">20M+</div>
                <div className="text-white/80">Orders Delivered</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80">Restaurant Partners</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">4.9★</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
