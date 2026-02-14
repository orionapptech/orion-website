import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTruck, 
  faBoxes, 
  faWarehouse, 
  faRoute, 
  faBarcode, 
  faClipboardCheck, 
  faMapMarkedAlt, 
  faShippingFast, 
  faClock, 
  faChartLine, 
  faRobot, 
  faMobileAlt,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faUsers,
  faBrain
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Software Development | Fleet & Warehouse Solutions",
  description: "Build world-class logistics platforms with fleet management, warehouse systems, route optimization, and supply chain visibility. 10M+ deliveries tracked.",
  keywords: "logistics software, supply chain management, fleet tracking, warehouse management, route optimization, delivery tracking, TMS, WMS, last mile delivery"
};


export default function LogisticsIndustry() {
  return (
    <>
      {/* Hero Section - Same comprehensive pattern as previous pages */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-400/20 to-teal-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-teal-600/10 to-blue-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-600/20 to-teal-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Fleet Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Tracking</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">10M+</div>
                        <div className="text-sm text-white/70">Deliveries</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">5K+</div>
                        <div className="text-sm text-white/70">Vehicles</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">98.5%</div>
                        <div className="text-sm text-white/70">On-Time</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">30%</div>
                        <div className="text-sm text-white/70">Cost Cut</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faTruck, label: "Fleet", color: "from-green-400 to-teal-500" },
                      { icon: faWarehouse, label: "Warehouse", color: "from-blue-400 to-cyan-500" },
                      { icon: faRoute, label: "Routes", color: "from-purple-400 to-pink-500" },
                      { icon: faBarcode, label: "Inventory", color: "from-orange-400 to-red-500" },
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
                    <div className="mb-2 text-sm font-semibold text-white/90">Active Deliveries</div>
                    <div className="space-y-2">
                      {[
                        { order: 'DEL-2891', status: 'In Transit', eta: '15 min' },
                        { order: 'DEL-2892', status: 'Loading', eta: '30 min' },
                        { order: 'DEL-2893', status: 'Delivered', eta: 'Done' },
                      ].map((delivery, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{delivery.order}</div>
                            <div className="text-xs text-white/60">{delivery.status} · ETA: {delivery.eta}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faTruck} className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faBoxes} className="h-8 w-8 text-teal-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 dark:border-green-800 dark:bg-green-900/30">
                <FontAwesomeIcon icon={faTruck} className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  Logistics & Supply Chain
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Logistics That
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Delivers Excellence</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Complete logistics platforms with fleet management, warehouse systems, AI route optimization, and supply chain visibility. Track 10M+ deliveries with 98.5% on-time rate.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">10M+</div>
                  <div className="text-sm text-body-color">Deliveries</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">5K+</div>
                  <div className="text-sm text-body-color">Vehicles</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">98.5%</div>
                  <div className="text-sm text-body-color">On-Time</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">30%</div>
                  <div className="text-sm text-body-color">Cost Cut</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Optimize Your Fleet</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-600 transition-all hover:bg-green-50 dark:hover:bg-green-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Real-Time GPS</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">AI Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">IoT Sensors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-teal-50/30 to-blue-50/50 dark:from-green-950/20 dark:via-teal-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete Logistics Solutions</h2>
            <p className="text-lg text-body-color">From warehouse to doorstep – comprehensive supply chain technology</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faWarehouse,
                title: 'Warehouse Management',
                description: 'Real-time inventory tracking, automated picking, packing, dispatch, barcode scanning, and multi-warehouse sync.',
                gradient: 'from-green-400 to-teal-500'
              },
              {
                icon: faTruck,
                title: 'Fleet Management',
                description: 'GPS tracking, driver management, vehicle maintenance, fuel monitoring, and compliance documentation.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faRoute,
                title: 'Route Optimization',
                description: 'AI-powered routing for cost reduction, faster deliveries, traffic avoidance, and optimal resource utilization.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faShippingFast,
                title: 'Last-Mile Delivery',
                description: 'Delivery apps, real-time tracking, proof of delivery, customer notifications, and feedback collection.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faBarcode,
                title: 'Inventory Management',
                description: 'Barcode/RFID scanning, stock alerts, batch tracking, expiry management, and automated reordering.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faBoxes,
                title: 'Supply Chain Visibility',
                description: 'End-to-end tracking, vendor management, demand forecasting, and analytics dashboard.',
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise Logistics Stack</h2>
            <p className="text-lg text-body-color">Built on proven technologies with IoT, AI, and real-time tracking</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-500">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">GPS & IoT</h3>
              <ul className="space-y-3">
                {['Google Maps API', 'GPS Fleet Tracking', 'IoT Sensors', 'Geofencing', 'Temperature Monitoring', 'RFID Integration'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">AI & Optimization</h3>
              <ul className="space-y-3">
                {['AI Route Planning', 'Machine Learning', 'Demand Forecasting', 'Predictive Maintenance', 'Load Optimization', 'ETA Predictions'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Platform & Mobile</h3>
              <ul className="space-y-3">
                {['React Native Apps', 'Node.js Backend', 'PostgreSQL & MongoDB', 'Redis Caching', 'GraphQL API', 'AWS/Azure Cloud'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-green-50/30 to-blue-50/50 dark:from-teal-950/20 dark:via-green-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Top Logistics Companies Choose Us</h2>
            <p className="text-lg text-body-color">Managing 10M+ deliveries with 98.5% on-time rate and 30% cost reduction</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBolt, title: 'Real-Time Tracking', description: 'Live GPS tracking, ETA updates, geofencing, and instant alerts for stakeholders and customers.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faShieldHalved, title: 'Enterprise Security', description: 'Encrypted data, secure APIs, role-based access, audit logs, and compliance documentation.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faBrain, title: 'AI-Powered Routes', description: 'Machine learning for optimal routing, traffic prediction, fuel optimization, and demand forecasting.', gradient: 'from-purple-400 to-pink-500' },
              { icon: faRobot, title: 'Automated Workflows', description: 'Auto-dispatch, smart scheduling, automated invoicing, and digital proof of delivery.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faUsers, title: 'Multi-User Platform', description: 'Driver apps, customer portals, admin dashboards, and vendor management in one system.', gradient: 'from-red-400 to-pink-500' },
              { icon: faChartLine, title: 'Advanced Analytics', description: 'Real-time dashboards for fleet performance, delivery metrics, cost analysis, and KPI tracking.', gradient: 'from-indigo-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Optimize Your Logistics?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join the logistics revolution. Track 10M+ deliveries with AI routing, real-time GPS, and 30% cost savings.
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
                <div className="text-white/80">Deliveries Tracked</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">98.5%</div>
                <div className="text-white/80">On-Time Rate</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">30%</div>
                <div className="text-white/80">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
