import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMobileAlt,
  faBox,
  faCreditCard,
  faChartLine,
  faTruck,
  faSearch,
  faStore,
  faRobot,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faGlobe,
  faBolt,
  faUsers,
  faTag,
  faBarcode
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "E-commerce Development - Online Store & Marketplace Solutions | Orion App Tech",
  description:
    "Build high-converting e-commerce platforms with AI recommendations, multi-vendor marketplaces, and seamless payments. $50M+ in GMV processed.",
  keywords: "ecommerce development, online store, marketplace development, shopping cart, payment integration, inventory management",
};

export default function EcommerceIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-400/20 to-red-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: E-commerce Dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-orange-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Sales Dashboard */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Live Store Analytics</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Online</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">$50M+</div>
                        <div className="text-sm text-white/70">GMV Processed</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">5M+</div>
                        <div className="text-sm text-white/70">Orders</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">3.5x</div>
                        <div className="text-sm text-white/70">Conversion</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">&lt;1s</div>
                        <div className="text-sm text-white/70">Page Load</div>
                      </div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faShoppingCart, label: "Cart", color: "from-purple-400 to-pink-500" },
                      { icon: faCreditCard, label: "Payments", color: "from-green-400 to-emerald-500" },
                      { icon: faRobot, label: "AI Recs", color: "from-blue-400 to-cyan-500" },
                      { icon: faTruck, label: "Shipping", color: "from-orange-400 to-red-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Orders */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Recent Orders</div>
                    <div className="space-y-2">
                      {[
                        { product: 'Wireless Headphones', price: '$199', status: 'Shipped', color: 'green' },
                        { product: 'Smart Watch', price: '$349', status: 'Processing', color: 'yellow' },
                        { product: 'Laptop Stand', price: '$89', status: 'Delivered', color: 'green' },
                      ].map((order, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{order.product}</div>
                            <div className="text-xs text-white/60">{order.price}</div>
                          </div>
                          <span className={`text-xs font-semibold text-${order.color}-400`}>{order.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faShoppingCart} className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faStore} className="h-8 w-8 text-pink-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-900/30">
                <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  E-commerce Solutions
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                E-commerce That
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Converts & Scales</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                High-converting online stores with AI-powered recommendations, seamless checkout, and scalable infrastructure. From single-vendor shops to multi-vendor marketplaces processing millions.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">$50M+</div>
                  <div className="text-sm text-body-color">GMV</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">5M+</div>
                  <div className="text-sm text-body-color">Orders</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">3.5x</div>
                  <div className="text-sm text-body-color">Conversion</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">&lt;1s</div>
                  <div className="text-sm text-body-color">Load Time</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Launch Your Store</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-purple-600 px-8 py-4 text-lg font-semibold text-purple-600 transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View E-commerce Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">PCI-DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Mobile-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-orange-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Complete E-commerce Solutions
            </h2>
            <p className="text-lg text-body-color">
              From single-vendor stores to multi-vendor marketplaces – we build e-commerce that drives sales
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faShoppingCart,
                title: 'Custom Online Stores',
                description: 'Fully customizable e-commerce platforms with advanced product management, inventory tracking, and seamless checkout.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faStore,
                title: 'Multi-Vendor Marketplaces',
                description: 'Amazon-style marketplaces with vendor management, commission systems, and unified product catalogs.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faMobileAlt,
                title: 'Mobile Commerce Apps',
                description: 'Native iOS & Android shopping apps with push notifications, AR try-on, and in-app payments.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faCreditCard,
                title: 'Payment Integration',
                description: 'Support for 150+ payment gateways including cards, wallets, UPI, BNPL, and cryptocurrency.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faRobot,
                title: 'AI Recommendations',
                description: 'Machine learning for personalized product recommendations, dynamic pricing, and demand forecasting.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faChartLine,
                title: 'Analytics & Insights',
                description: 'Real-time dashboards for sales, inventory, customer behavior, and marketing ROI tracking.',
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
              High-Performance E-commerce Stack
            </h2>
            <p className="text-lg text-body-color">
              Built on modern technologies for speed, scalability, and seamless shopping experiences
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faShoppingCart} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Frontend & Mobile</h3>
              <ul className="space-y-3">
                {[
                  'Next.js for Web Stores',
                  'React Native iOS & Android',
                  'Progressive Web Apps (PWA)',
                  'Server-Side Rendering (SSR)',
                  'Optimized Images & Videos',
                  'Lightning-Fast Page Loads'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Backend & Security</h3>
              <ul className="space-y-3">
                {[
                  'Node.js Microservices',
                  'MongoDB & PostgreSQL',
                  'Redis Caching Layer',
                  'Elasticsearch for Search',
                  'PCI-DSS Payment Security',
                  'DDoS Protection & WAF'
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
                <FontAwesomeIcon icon={faRobot} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">AI & Integrations</h3>
              <ul className="space-y-3">
                {[
                  'AI Product Recommendations',
                  '150+ Payment Gateways',
                  'Shipping API Integration',
                  'Marketing Automation',
                  'CRM & Email Marketing',
                  'Analytics & BI Tools'
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-orange-50/50 dark:from-pink-950/20 dark:via-purple-950/10 dark:to-orange-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Brands Choose Our E-commerce Solutions
            </h2>
            <p className="text-lg text-body-color">
              We've built stores processing $50M+ GMV with 3.5x average conversion rate improvement
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBolt,
                title: 'Lightning-Fast Performance',
                description: 'Sub-1-second page loads with CDN, image optimization, and lazy loading. Fast stores convert 2x better.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faShieldHalved,
                title: 'Enterprise Security',
                description: 'PCI-DSS Level 1 compliance, fraud detection, secure checkout, and encrypted customer data.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faRobot,
                title: 'AI-Powered Shopping',
                description: 'Personalized recommendations, visual search, chatbots, and dynamic pricing that boost AOV by 40%.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faGlobe,
                title: 'Multi-Currency & Multi-Language',
                description: 'Sell globally with automatic currency conversion, localized content, and international shipping.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faUsers,
                title: 'Conversion Optimization',
                description: 'A/B testing, heatmaps, abandoned cart recovery, and UX optimization that increase sales by 3x.',
                gradient: 'from-red-400 to-pink-500'
              },
              {
                icon: faChartLine,
                title: 'Scalable Infrastructure',
                description: 'Handle Black Friday traffic spikes seamlessly. Auto-scaling from 100 to 1M concurrent users.',
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Launch Your E-commerce Empire?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 500+ brands who trust us with their online stores. From MVP to $50M+ GMV – we build e-commerce that scales and converts.
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
                <div className="mb-3 text-3xl font-bold text-white">$50M+</div>
                <div className="text-white/80">GMV Processed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">5M+</div>
                <div className="text-white/80">Orders Fulfilled</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">3.5x</div>
                <div className="text-white/80">Avg Conversion Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
