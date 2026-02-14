import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding, 
  faHome, 
  faKey, 
  faMapMarkerAlt, 
  faSearch, 
  faHandshake, 
  faChartArea, 
  faFileContract, 
  faCalculator, 
  faCamera, 
  faVrCardboard, 
  faMobileAlt,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faUsers,
  faChartLine,
  faBrain,
  faLock
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Real Estate Software Development | Property & CRM Solutions",
  description: "Build world-class real estate platforms with property listings, 3D virtual tours, CRM, and property management. 500K+ properties managed.",
  keywords: "real estate software, property management, CRM, virtual tours, property listing portal, MLS integration, 3D tours, real estate CRM"
};


export default function RealEstateIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-400/20 to-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: Property Dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-red-600/10 to-pink-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Property Analytics */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Portfolio Overview</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Active</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">500K+</div>
                        <div className="text-sm text-white/70">Properties</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">$5B+</div>
                        <div className="text-sm text-white/70">Value</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">10K+</div>
                        <div className="text-sm text-white/70">Agents</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">99.9%</div>
                        <div className="text-sm text-white/70">Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Access */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faBuilding, label: "Listings", color: "from-orange-400 to-red-500" },
                      { icon: faVrCardboard, label: "VR Tours", color: "from-purple-400 to-pink-500" },
                      { icon: faHandshake, label: "CRM", color: "from-blue-400 to-cyan-500" },
                      { icon: faKey, label: "Rentals", color: "from-green-400 to-emerald-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Featured Properties */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Featured Listings</div>
                    <div className="space-y-2">
                      {[
                        { prop: 'Luxury Villa - Miami', price: '$2.5M', views: '1.2K', color: 'orange' },
                        { prop: 'Downtown Condo - NYC', price: '$850K', views: '890', color: 'purple' },
                        { prop: 'Beachfront - Malibu', price: '$4.2M', views: '2.1K', color: 'red' },
                      ].map((property, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{property.prop}</div>
                            <div className="text-xs text-white/60">{property.price} · 👁️ {property.views}</div>
                          </div>
                          <FontAwesomeIcon icon={faEye} className="h-4 w-4 text-white/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faHome} className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faBuilding} className="h-8 w-8 text-red-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 dark:border-orange-800 dark:bg-orange-900/30">
                <FontAwesomeIcon icon={faBuilding} className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Real Estate Solutions
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Real Estate That
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Closes Deals</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Comprehensive real estate platforms with property listings, 3D virtual tours, CRM, and property management. Transform every stage from search to transaction.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">500K+</div>
                  <div className="text-sm text-body-color">Properties</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">$5B+</div>
                  <div className="text-sm text-body-color">Value</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">10K+</div>
                  <div className="text-sm text-body-color">Agents</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">99.9%</div>
                  <div className="text-sm text-body-color">Uptime</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Build Your Platform</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-orange-600 px-8 py-4 text-lg font-semibold text-orange-600 transition-all hover:bg-orange-50 dark:hover:bg-orange-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">MLS Integrated</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Secure Transactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">3D Virtual Tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/50 dark:from-orange-950/20 dark:via-red-950/10 dark:to-pink-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Complete Real Estate Solutions
            </h2>
            <p className="text-lg text-body-color">
              From property search to transaction management – comprehensive technology for modern real estate
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBuilding,
                title: 'Property Listing Portals',
                description: 'Advanced search filters, map integration, high-quality galleries, and MLS sync for comprehensive property discovery.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faVrCardboard,
                title: '3D Virtual Tours',
                description: 'Immersive 3D walkthroughs, 360° videos, AR visualization, and Matterport integration for remote property viewing.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faHandshake,
                title: 'Real Estate CRM',
                description: 'Lead management, client tracking, deal pipeline, automated follow-ups, and agent collaboration tools.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faKey,
                title: 'Property Management',
                description: 'Tenant management, lease tracking, maintenance requests, rent collection, and automated accounting.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faCalculator,
                title: 'Financial Tools',
                description: 'EMI calculators, affordability analysis, ROI tools, loan comparisons, and investment projections.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faFileContract,
                title: 'Digital Transactions',
                description: 'E-signatures, document management, contract templates, verification, and secure escrow integration.',
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
              Advanced Real Estate Technology Stack
            </h2>
            <p className="text-lg text-body-color">
              Built on cutting-edge technologies with 3D rendering and scalable infrastructure
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <FontAwesomeIcon icon={faVrCardboard} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">3D & Visualization</h3>
              <ul className="space-y-3">
                {[
                  'Three.js 3D Rendering',
                  'Matterport Integration',
                  'Google Maps SDK',
                  '360° Video Tours',
                  'AR Property Staging',
                  'Virtual Reality Tours'
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
                  'Next.js for Web Portals',
                  'React Native iOS/Android',
                  'Progressive Web Apps',
                  'Server-Side Rendering',
                  'Image Optimization',
                  'Responsive Design'
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
                  'Node.js & Python',
                  'PostgreSQL & MongoDB',
                  'Redis Caching',
                  'MLS API Integration',
                  'Secure Document Storage',
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-pink-50/50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-pink-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Leading Real Estate Firms Choose Us
            </h2>
            <p className="text-lg text-body-color">
              Managing 500K+ properties worth $5B+ with 99.9% uptime and seamless experiences
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBolt,
                title: 'Lightning-Fast Search',
                description: 'AI-powered property search with smart filters, saved searches, price alerts, and instant results.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faShieldHalved,
                title: 'Enterprise Security',
                description: 'Bank-grade encryption, secure document storage, e-signature compliance, and data protection.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faBrain,
                title: 'AI Market Analytics',
                description: 'Predictive pricing, market trends, investment analysis, and automated property valuations.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faMapMarkerAlt,
                title: 'Location Intelligence',
                description: 'Interactive maps, neighborhood insights, school ratings, commute analysis, and amenity discovery.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faUsers,
                title: 'Multi-User Collaboration',
                description: 'Agent portals, client dashboards, team collaboration, and role-based access control.',
                gradient: 'from-red-400 to-pink-500'
              },
              {
                icon: faChartLine,
                title: 'Advanced Analytics',
                description: 'Real-time dashboards for listings, leads, conversions, market trends, and ROI tracking.',
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Transform Real Estate?            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 10K+ agents managing 500K+ properties worth $5B+. Build platforms with 3D tours, CRM, and property management.
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
                <div className="mb-3 text-3xl font-bold text-white">500K+</div>
                <div className="text-white/80">Properties Managed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">$5B+</div>
                <div className="text-white/80">Property Value</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">10K+</div>
                <div className="text-white/80">Active Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
