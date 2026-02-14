import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRocket,
  faShieldAlt,
  faBolt,
  faUsers,
  faChartLine,
  faCheckCircle,
  faMobile,
  faSearch,
  faLock,
  faCogs,
  faCloud,
  faLayerGroup,
  faDatabase,
  faPalette,
  faServer,
  faGlobe,
  faTrophy,
  faHeart,
  faLightbulb,
  faClock,
  faHandshake,
  faStar
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Website Development Services - Custom Web Solutions | Orion App Tech",
  description:
    "Transform your digital presence with world-class website development. From stunning landing pages to complex web applications – we build websites that convert, scale, and delight users.",
};

export default function WebsiteDevelopment() {
  return (
    <>
      <Breadcrumb
        pageName="Website Development"
        description="Where creativity meets technology – crafting digital experiences that captivate, convert, and scale."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-[55%]">
              <div className="animate-fade-in-up">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <FontAwesomeIcon icon={faCode} className="mr-2 h-4 w-4" />
                  Website Development Excellence
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                  Websites That Don't Just Look Good –
                  <span className="text-primary"> They Perform</span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  Your website is your digital storefront, your 24/7 salesperson, your brand ambassador. 
                  We don't just build websites – we engineer digital experiences that capture attention, 
                  build trust, and drive measurable business results.
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  From sleek landing pages that convert visitors into customers, to complex web applications 
                  that power entire businesses – our team combines cutting-edge technology with stunning design 
                  to create websites that users love and search engines reward.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="hover-lift inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
                  >
                    <FontAwesomeIcon icon={faRocket} className="h-5 w-5" />
                    Start Your Project
                  </Link>
                  <Link
                    href="#our-work"
                    className="glass-effect hover-lift inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary duration-300 hover:bg-primary hover:text-white"
                  >
                    <FontAwesomeIcon icon={faTrophy} className="h-5 w-5" />
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="animate-scale-in grid grid-cols-2 gap-4">
                {[
                  { icon: faGlobe, value: "50+", label: "Websites Built", color: "from-blue-500 to-blue-600" },
                  { icon: faBolt, value: "99.9%", label: "Uptime", color: "from-purple-500 to-purple-600" },
                  { icon: faUsers, value: "10M+", label: "Users Served", color: "from-green-500 to-green-600" },
                  { icon: faChartLine, value: "3x", label: "Avg. Conversions", color: "from-orange-500 to-orange-600" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card hover-lift group rounded-2xl p-6 text-center dark:glass-card-dark"
                  >
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                      <FontAwesomeIcon icon={stat.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 text-3xl font-bold text-primary">{stat.value}</h3>
                    <p className="text-xs font-medium text-body-color dark:text-body-color-dark">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Our Expertise</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              Every Website, Perfectly Tailored
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              No cookie-cutter templates. No one-size-fits-all solutions. Every website we build is custom-crafted 
              to match your brand, your goals, and your users' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faRocket,
                title: "Landing Pages That Convert",
                description: "High-converting landing pages designed with psychology and data in mind. Clear CTAs, compelling copy, and optimized user flows that turn visitors into customers.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: faLayerGroup,
                title: "Corporate Websites",
                description: "Professional, brand-focused websites that establish credibility and showcase your values. Multiple pages, rich content, and seamless navigation.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: faGlobe,
                title: "E-Commerce Platforms",
                description: "Full-featured online stores with product catalogs, shopping carts, payment gateways, inventory management, and admin dashboards.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: faCogs,
                title: "Web Applications",
                description: "Complex, interactive web apps with real-time features, user dashboards, data visualization, and powerful backend systems.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: faDatabase,
                title: "SaaS Platforms",
                description: "Scalable software-as-a-service platforms with multi-tenancy, subscription management, and sophisticated admin controls.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: faChartLine,
                title: "Progressive Web Apps",
                description: "App-like experiences that work across all devices. Offline functionality, push notifications, and native features in a web package.",
                gradient: "from-yellow-500 to-amber-500"
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="glass-card hover-lift h-full rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <FontAwesomeIcon icon={service.icon} className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Technology Stack</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              Built with Tomorrow's Technology, Today
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              We don't chase trends – we master them. Our tech stack represents the perfect balance 
              between cutting-edge innovation and battle-tested reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                category: "Frontend Excellence",
                icon: faPalette,
                color: "from-blue-500 to-cyan-500",
                technologies: [
                  { name: "React & Next.js", desc: "Lightning-fast, SEO-friendly interfaces" },
                  { name: "Vue.js & Nuxt.js", desc: "Progressive, flexible web apps" },
                  { name: "TypeScript", desc: "Type-safe, maintainable code" },
                  { name: "Tailwind CSS", desc: "Beautiful, responsive designs" },
                ]
              },
              {
                category: "Backend Power",
                icon: faServer,
                color: "from-green-500 to-emerald-500",
                technologies: [
                  { name: "Node.js & Express", desc: "Scalable server architecture" },
                  { name: "Python & Django", desc: "Robust backend systems" },
                  { name: "GraphQL & REST", desc: "Efficient data fetching" },
                  { name: "PostgreSQL & MongoDB", desc: "Reliable data storage" },
                ]
              },
              {
                category: "Cloud & DevOps",
                icon: faCloud,
                color: "from-purple-500 to-indigo-500",
                technologies: [
                  { name: "AWS & Azure", desc: "Enterprise cloud infrastructure" },
                  { name: "Docker & Kubernetes", desc: "Containerized deployment" },
                  { name: "CI/CD Pipelines", desc: "Automated testing & deployment" },
                  { name: "CDN Integration", desc: "Global content delivery" },
                ]
              },
              {
                category: "Security & Performance",
                icon: faShieldAlt,
                color: "from-orange-500 to-red-500",
                technologies: [
                  { name: "SSL/TLS Encryption", desc: "Secure data transmission" },
                  { name: "OAuth 2.0 & JWT", desc: "Secure authentication" },
                  { name: "Performance Optimization", desc: "Sub-second load times" },
                  { name: "SEO Best Practices", desc: "Maximum search visibility" },
                ]
              },
            ].map((stack, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="glass-card rounded-2xl p-8 dark:glass-card-dark">
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stack.color} shadow-lg`}>
                      <FontAwesomeIcon icon={stack.icon} className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {stack.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-start gap-3 rounded-lg bg-white/50 p-4 dark:bg-gray-800/50">
                        <FontAwesomeIcon icon={faCheckCircle} className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <h4 className="mb-1 font-semibold text-black dark:text-white">{tech.name}</h4>
                          <p className="text-sm text-body-color dark:text-body-color-dark">{tech.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">How We Work</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              A Process Designed for Success
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              From concept to launch and beyond, we've perfected a development process that delivers 
              exceptional results on time, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                icon: faLightbulb,
                title: "Discovery & Strategy",
                description: "Deep dive into your business, users, competitors, and goals. We map out the perfect strategy before writing a single line of code.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                icon: faPalette,
                title: "Design & Prototyping",
                description: "Wireframes, mockups, and interactive prototypes bring your vision to life. Iterate until every pixel is perfect.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                step: "03",
                icon: faCode,
                title: "Development Sprint",
                description: "Our developers build with clean, maintainable code. Weekly demos keep you connected to the progress.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                step: "04",
                icon: faShieldAlt,
                title: "Testing & QA",
                description: "Rigorous testing across devices, browsers, and scenarios. Security audits, performance testing, accessibility checks.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                step: "05",
                icon: faRocket,
                title: "Launch & Deployment",
                description: "Smooth deployment with zero downtime. DNS configuration, SSL setup, CDN integration – we handle it all.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                step: "06",
                icon: faChartLine,
                title: "Growth & Optimization",
                description: "Post-launch analytics, A/B testing, and continuous optimization. Your website gets better with age.",
                gradient: "from-yellow-500 to-amber-500"
              },
            ].map((process, index) => (
              <div key={index} className="animate-fade-in-up group">
                <div className="glass-card h-full rounded-2xl p-8 dark:glass-card-dark">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-6xl font-bold text-primary/20">
                      {process.step}
                    </span>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${process.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <FontAwesomeIcon icon={process.icon} className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {process.title}
                  </h3>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              We're Not Your Average Web Agency
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Here's what makes Orion App Tech the partner of choice for businesses that refuse to settle for ordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                icon: faMobile,
                title: "Mobile-First, Always",
                description: "Over 60% of web traffic is mobile. We design for mobile first, then scale up – ensuring perfect experiences on every device, every time."
              },
              {
                icon: faSearch,
                title: "SEO Built-In, Not Bolted-On",
                description: "Search engine optimization isn't an afterthought. From semantic HTML to lightning-fast load times, we build websites that Google loves to rank."
              },
              {
                icon: faBolt,
                title: "Performance That Wows",
                description: "Sub-second load times aren't luck – they're engineering. Code splitting, lazy loading, image optimization – we obsess over every millisecond."
              },
              {
                icon: faLock,
                title: "Security as Standard",
                description: "SSL encryption, SQL injection prevention, XSS protection, CSRF tokens – security isn't optional. Your users' data is sacred."
              },
              {
                icon: faUsers,
                title: "Accessibility for All",
                description: "WCAG 2.1 AA compliance, screen reader support, keyboard navigation – we build websites that everyone can use, regardless of ability."
              },
              {
                icon: faClock,
                title: "Delivered On Time, Every Time",
                description: "We've never missed a deadline. Clear milestones, transparent communication, and agile methodology keep projects on track and on budget."
              },
            ].map((feature, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="glass-card hover-lift group h-full rounded-2xl p-8 dark:glass-card-dark">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-24 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <FontAwesomeIcon icon={faHeart} className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Build Something Extraordinary?
            </h2>
            <div className="mb-12 space-y-4 text-lg leading-relaxed text-white/95 md:text-xl">
              <p>
                Your website should be more than just another page on the internet. It should be a 
                growth engine, a brand ambassador, and a competitive advantage.
              </p>
              <p className="text-xl font-semibold md:text-2xl">
                Let's build a website that doesn't just meet expectations – it exceeds them.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20"
              >
                <FontAwesomeIcon icon={faHandshake} className="h-6 w-6" />
                Start Your Project Today
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-white px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary"
              >
                <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      </section>
    </>
  );
}
