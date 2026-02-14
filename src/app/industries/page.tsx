import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faHospital,
  faShoppingCart,
  faPlane,
  faBuilding,
  faGraduationCap,
  faTruck,
  faHandsHelping,
  faDumbbell,
  faHeartbeat,
  faTaxi,
  faUtensils,
  faStar,
  faRocket,
  faGlobe,
  faUsers,
  faChartLine,
  faCheckCircle,
  faLightbulb,
  faShieldAlt,
  faCog,
  faArrowRight,
  faEye,
  faTrophy,
  faIndustry,
  faMobileAlt,
  faCloud,
  faBrain
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Industries We Serve | Orion App Tech - Digital Solutions for Every Sector",
  description: "Specialized software solutions for Finance, Healthcare, E-commerce, Travel, Real Estate, Education, Logistics, and 13+ industries.",
};

export default function Industries() {
  const industries = [
    {
      name: "Finance & Fintech",
      slug: "finance",
      icon: faUniversity,
      description: "Banking apps, payment gateways, trading platforms, and fintech solutions with enterprise-grade security and compliance.",
      gradient: "from-yellow-400 to-orange-600",
      stats: "500M+ transactions",
      examples: ["Banking Apps", "Payment Gateways", "Trading Platforms"]
    },
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: faHospital,
      description: "HIPAA-compliant healthcare apps, telemedicine platforms, patient management systems, and digital health solutions.",
      gradient: "from-red-400 to-pink-600",
      stats: "1M+ patients served",
      examples: ["Telemedicine", "Patient Management", "Health Records"]
    },
    {
      name: "E-commerce",
      slug: "ecommerce",
      icon: faShoppingCart,
      description: "Online stores, multi-vendor marketplaces, inventory management, and omnichannel retail solutions.",
      gradient: "from-green-400 to-emerald-600",
      stats: "10M+ orders processed",
      examples: ["Online Stores", "Marketplaces", "Inventory Systems"]
    },
    {
      name: "Travel & Tourism",
      slug: "travel",
      icon: faPlane,
      description: "Booking platforms, travel management systems, itinerary planners, and tourism marketplace applications.",
      gradient: "from-blue-400 to-cyan-600",
      stats: "2M+ bookings",
      examples: ["Booking Platforms", "Travel Management", "Tour Guides"]
    },
    {
      name: "Real Estate",
      slug: "real-estate",
      icon: faBuilding,
      description: "Property listing platforms, virtual tours with AR/VR, CRM for realtors, and real estate management systems.",
      gradient: "from-purple-400 to-violet-600",
      stats: "50K+ properties listed",
      examples: ["Property Listings", "Virtual Tours", "Realtor CRM"]
    },
    {
      name: "Education & E-Learning",
      slug: "education",
      icon: faGraduationCap,
      description: "Learning management systems, virtual classrooms, student management systems, and interactive educational apps.",
      gradient: "from-indigo-400 to-blue-600",
      stats: "5M+ students",
      examples: ["LMS Platforms", "Virtual Classrooms", "Learning Apps"]
    },
    {
      name: "Logistics & Supply Chain",
      slug: "logistics",
      icon: faTruck,
      description: "Fleet management, route optimization, warehouse management, and end-to-end supply chain solutions.",
      gradient: "from-orange-400 to-red-600",
      stats: "1B+ deliveries tracked",
      examples: ["Fleet Management", "Route Optimization", "Warehouse Systems"]
    },
    {
      name: "NGO & Non-Profit",
      slug: "ngo",
      icon: faHandsHelping,
      description: "Donation platforms, volunteer management, fundraising applications, and impact tracking systems.",
      gradient: "from-pink-400 to-rose-600",
      stats: "$100M+ raised",
      examples: ["Donation Platforms", "Volunteer Management", "Impact Tracking"]
    },
    {
      name: "Fitness & Wellness",
      slug: "fitness",
      icon: faDumbbell,
      description: "Workout tracking apps, fitness coaching platforms, gym management systems, and personal wellness applications.",
      gradient: "from-cyan-400 to-blue-600",
      stats: "3M+ workouts logged",
      examples: ["Fitness Tracking", "Coaching Platforms", "Gym Management"]
    },
    {
      name: "Health & Wellness",
      slug: "health",
      icon: faHeartbeat,
      description: "Mental health apps, nutrition tracking, wellness platforms, meditation apps, and holistic health solutions.",
      gradient: "from-rose-400 to-red-600",
      stats: "2M+ active users",
      examples: ["Mental Health", "Nutrition Tracking", "Meditation Apps"]
    },
    {
      name: "Taxi & Ride Sharing",
      slug: "taxi",
      icon: faTaxi,
      description: "Ride-hailing applications, driver management systems, route optimization, and integrated payment solutions.",
      gradient: "from-yellow-400 to-amber-600",
      stats: "50M+ rides completed",
      examples: ["Ride-Hailing", "Driver Management", "Route Optimization"]
    },
    {
      name: "Food Delivery",
      slug: "food-delivery",
      icon: faUtensils,
      description: "Food ordering apps, restaurant management, real-time delivery tracking, and kitchen display systems.",
      gradient: "from-red-400 to-orange-600",
      stats: "20M+ orders delivered",
      examples: ["Food Ordering", "Restaurant Management", "Delivery Tracking"]
    },
    {
      name: "Influencers & Social",
      slug: "influencers",
      icon: faStar,
      description: "Creator platforms, social media management, content monetization, analytics tools, and influencer marketplaces.",
      gradient: "from-purple-400 to-pink-600",
      stats: "10M+ creators",
      examples: ["Creator Platforms", "Content Monetization", "Analytics Tools"]
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Industries We Transform"
        description="Digital excellence across every sector"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 opacity-10 blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-block">
              <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-6 py-3 backdrop-blur-sm">
                <FontAwesomeIcon icon={faIndustry} className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  13+ Industries • 1000+ Successful Projects
                </span>
              </div>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white md:text-6xl lg:text-7xl">
              Your Industry.
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Our Expertise.
              </span>
            </h1>
            
            <p className="mb-10 text-xl leading-relaxed text-body-color md:text-2xl">
              From healthcare to fintech, e-commerce to education – we've mastered the art of building industry-specific solutions that don't just meet standards, they set them.
            </p>

            {/* Stats Grid */}
            <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: faIndustry, value: '13+', label: 'Industries Served' },
                { icon: faUsers, value: '500+', label: 'Enterprise Clients' },
                { icon: faRocket, value: '1000+', label: 'Projects Delivered' },
                { icon: faGlobe, value: '50+', label: 'Countries' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 text-center transition-all hover:-translate-y-2">
                  <FontAwesomeIcon icon={stat.icon} className="mb-3 h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div className="mb-1 text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-body-color">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Discuss Your Industry</span>
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-purple-600/30 bg-white/50 px-8 py-4 text-lg font-semibold text-purple-600 backdrop-blur-sm transition-all hover:bg-purple-50 dark:bg-black/30 dark:text-purple-400"
              >
                <FontAwesomeIcon icon={faEye} />
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-black" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Industries We Master
            </h2>
            <p className="text-lg text-body-color">
              Deep domain expertise combined with cutting-edge technology to deliver solutions that transform industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => (
              <Link
                key={idx}
                href={`/industries/${industry.slug}`}
                className="glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Animated Background */}
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${industry.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    <FontAwesomeIcon icon={industry.icon} className="h-8 w-8 text-white" />
                  </div>

                  {/* Stats Badge */}
                  <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-1 text-xs font-semibold text-gray-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300">
                    {industry.stats}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-body-color">
                    {industry.description}
                  </p>

                  {/* Examples */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {industry.examples.map((example, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                    <span>Explore Solutions</span>
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="h-4 w-4 transition-transform group-hover:translate-x-2" 
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-lg text-body-color">
              We don't just understand technology – we understand your business, your challenges, and your opportunities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBrain,
                title: 'Deep Domain Knowledge',
                description: 'Our teams have years of experience in each vertical. We speak your language and understand your regulations, compliance needs, and industry standards.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faShieldAlt,
                title: 'Security & Compliance',
                description: 'HIPAA, PCI-DSS, GDPR, SOC 2 – we build solutions that meet the strictest industry standards and regulatory requirements.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faRocket,
                title: 'Scalable Architecture',
                description: 'From startup MVPs to enterprise systems handling millions of users, our solutions grow with your business without breaking.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faMobileAlt,
                title: 'Multi-Platform Excellence',
                description: 'Web, iOS, Android, IoT – seamless experiences across all platforms with unified backend infrastructure.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faCloud,
                title: 'Cloud-Native Solutions',
                description: 'AWS, Azure, Google Cloud – we architect for the cloud with auto-scaling, high availability, and disaster recovery built-in.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faChartLine,
                title: 'Data-Driven Insights',
                description: 'Analytics, business intelligence, and AI-powered insights that help you make better decisions and stay ahead of competition.',
                gradient: 'from-yellow-400 to-amber-500'
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

      {/* Our Approach Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Our Industry-First Approach
            </h2>
            <p className="text-lg text-body-color">
              Every industry has unique needs. Here's how we ensure your solution is perfect for your vertical
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass-card-dark rounded-3xl p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Industry Research</h3>
              </div>
              <p className="mb-6 text-body-color leading-relaxed">
                We dive deep into your industry – studying competitors, analyzing trends, understanding pain points, and identifying opportunities that others miss.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Market Analysis', 'Competitor Research', 'Trend Forecasting', 'Best Practices'].map((tag, i) => (
                  <span key={i} className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card-dark rounded-3xl p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Compliance Mapping</h3>
              </div>
              <p className="mb-6 text-body-color leading-relaxed">
                We map out all regulatory requirements, compliance standards, and security protocols specific to your industry before writing a single line of code.
              </p>
              <div className="flex flex-wrap gap-2">
                {['GDPR', 'HIPAA', 'PCI-DSS', 'SOC 2', 'ISO 27001'].map((tag, i) => (
                  <span key={i} className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card-dark rounded-3xl p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Custom Workflows</h3>
              </div>
              <p className="mb-6 text-body-color leading-relaxed">
                We design workflows that match your industry's processes – not force you to adapt to generic software. Your operations, your way.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Process Design', 'User Journeys', 'Role Management', 'Automation'].map((tag, i) => (
                  <span key={i} className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card-dark rounded-3xl p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-xl font-bold text-white">
                  4
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Continuous Evolution</h3>
              </div>
              <p className="mb-6 text-body-color leading-relaxed">
                Industries evolve. We keep your solution ahead of the curve with regular updates based on new regulations, technologies, and market demands.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Regular Updates', 'Feature Addition', 'Security Patches', 'Performance Tuning'].map((tag, i) => (
                  <span key={i} className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Transform Your Industry?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Your industry solution should be more than functional – it should be transformative, setting new standards and creating competitive advantages. Let's build that together.
            </p>
            <p className="mb-12 text-lg text-white/80">
              See our full portfolio, connect with our industry experts, and discover how we've helped 500+ businesses across 13 industries achieve digital excellence.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Discuss Your Project</span>
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
                <div className="mb-3 text-3xl font-bold text-white">8 Hours</div>
                <div className="text-white/80">Average Response Time</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">3 Offices</div>
                <div className="text-white/80">USA • India • Netherlands</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">100% Satisfaction</div>
                <div className="text-white/80">Client Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
