import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faRocket, 
  faUsers, 
  faGlobe, 
  faLightbulb, 
  faShieldAlt, 
  faBolt,
  faHandshake,
  faTrophy,
  faChartLine,
  faStar,
  faCode,
  faClock,
  faCheckCircle,
  faAward,
  faCompass
} from "@fortawesome/free-solid-svg-icons";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story | Orion App Tech",
  description:
    "Discover the story behind Orion App Tech. 8 years of passion, innovation, and dedication to transforming businesses through cutting-edge software solutions across USA, India, and Netherlands.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Story"
        description="More than a software agency – we're your partners in digital excellence, crafting solutions that transform dreams into reality."
      />

      {/* Hero Section - Who We Are */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="animate-fade-in-up">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Est. 2016 • 8 Years of Excellence
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                  We Build More Than Software – 
                  <span className="text-primary"> We Build Dreams</span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  Every line of code we write carries a promise. A promise to transform your vision into reality, 
                  to innovate fearlessly, and to stand beside you as a true partner in your digital journey.
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Born from a simple belief that technology should empower, not complicate, Orion App Tech has grown 
                  from a small team of passionate developers into a global force in software innovation. Today, we're 
                  proud to serve clients across three continents, yet we've never forgotten what matters most – 
                  the human connection behind every project.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="hover-lift inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
                  >
                    <FontAwesomeIcon icon={faHandshake} className="h-5 w-5" />
                    Partner With Us
                  </Link>
                  <Link
                    href="/services/website-development"
                    className="glass-effect hover-lift inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary duration-300 hover:bg-primary hover:text-white"
                  >
                    <FontAwesomeIcon icon={faCode} className="h-5 w-5" />
                    Our Expertise
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="animate-scale-in grid grid-cols-2 gap-6">
                {[
                  { icon: faTrophy, value: "100+", label: "Projects Delivered", color: "from-blue-500 to-blue-600" },
                  { icon: faClock, value: "8+", label: "Years Experience", color: "from-purple-500 to-purple-600" },
                  { icon: faUsers, value: "40+", label: "Expert Team", color: "from-green-500 to-green-600" },
                  { icon: faGlobe, value: "3", label: "Countries", color: "from-orange-500 to-orange-600" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card hover-lift group rounded-2xl p-8 text-center dark:glass-card-dark"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                      <FontAwesomeIcon icon={stat.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-4xl font-bold text-primary">{stat.value}</h3>
                    <p className="text-sm font-medium text-body-color dark:text-body-color-dark">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              A Story of Passion & Perseverance
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              From humble beginnings to global impact – every milestone marks a chapter of relentless dedication, 
              continuous learning, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary to-primary/20 lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2016",
                  title: "The Spark of Innovation",
                  description: "Founded with a vision to make technology accessible and impactful. Started with 3 passionate developers and one dream – to build software that matters.",
                  icon: faLightbulb,
                  side: "left"
                },
                {
                  year: "2018",
                  title: "Breaking Boundaries",
                  description: "Expanded to 15 team members and delivered our 25th project. Established our first international partnership, marking our entry into the global market.",
                  icon: faGlobe,
                  side: "right"
                },
                {
                  year: "2021",
                  title: "Scaling Heights",
                  description: "Crossed 50 successful projects. Opened offices in India and Netherlands. Our team grew to 30+ professionals, bringing diverse expertise under one roof.",
                  icon: faRocket,
                  side: "left"
                },
                {
                  year: "2024",
                  title: "Achieving Excellence",
                  description: "Proud to celebrate 100+ successful projects and a team of 40+ experts. Recognized for innovation in gaming, healthcare, and enterprise solutions.",
                  icon: faAward,
                  side: "right"
                },
                {
                  year: "2026",
                  title: "Shaping Tomorrow",
                  description: "Today, we serve clients across 3 continents with cutting-edge AI/ML solutions, game development expertise, and enterprise-grade applications. The journey continues...",
                  icon: faCompass,
                  side: "left"
                },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${milestone.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                  <div className={`w-full lg:w-5/12 ${milestone.side === 'left' ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="glass-card hover-lift animate-fade-in-up rounded-2xl p-8 dark:glass-card-dark" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
                        {milestone.year}
                      </span>
                      <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-body-color dark:text-body-color-dark">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 hidden lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-lg ring-4 ring-white dark:ring-gray-dark">
                      <FontAwesomeIcon icon={milestone.icon} className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Our Core Values</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              The Principles That Guide Us
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              These aren't just words on a wall – they're the heartbeat of every decision we make, 
              every line of code we write, and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faHeart,
                title: "Passion First",
                description: "We don't just work on projects; we fall in love with them. Your success becomes our obsession, your challenges fuel our creativity.",
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: faShieldAlt,
                title: "Integrity Always",
                description: "Transparency isn't optional – it's our foundation. We believe in honest communication, ethical practices, and building trust through actions.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: faLightbulb,
                title: "Innovation Mindset",
                description: "Comfort zones are for sleeping, not creating. We push boundaries, embrace new technologies, and turn 'impossible' into 'watch this'.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: faUsers,
                title: "People Over Profit",
                description: "Behind every client is a human with dreams and aspirations. We measure success not just in revenue, but in relationships and positive impact.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: faBolt,
                title: "Excellence Delivered",
                description: "Good enough is never enough. We obsess over details, refine relentlessly, and deliver solutions that don't just meet expectations – they shatter them.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: faGlobe,
                title: "Global Perspective",
                description: "With teams across continents, we bring diverse insights and cultural richness to every project, creating solutions that resonate globally.",
                gradient: "from-teal-500 to-blue-500"
              },
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="glass-card hover-lift h-full rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <FontAwesomeIcon icon={value.icon} className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              We're Different, And Proud Of It
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              In a world of cookie-cutter solutions and assembly-line development, we dare to be different. 
              Here's what sets us apart from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                icon: faCheckCircle,
                title: "You'll Know What's Happening",
                description: "No black boxes, no mysterious delays. We believe in radical transparency. Daily updates, weekly calls, and a dedicated project dashboard keep you in the loop. You're not just a client – you're part of the team."
              },
              {
                icon: faClock,
                title: "8-Hour Response Time",
                description: "Got a question at 2 AM? An urgent bug to fix? We're here. Our global presence across USA, India, and Netherlands means someone's always awake, always ready to help. We don't just promise fast response – we guarantee it."
              },
              {
                icon: faUsers,
                title: "Your Dedicated Dream Team",
                description: "Tired of talking to different people every time you call? With us, you get a dedicated team that learns your business inside out. They celebrate your wins and lose sleep over your challenges – because they genuinely care."
              },
              {
                icon: faChartLine,
                title: "Results That Speak Volumes",
                description: "We're not satisfied with just delivering code. We obsess over metrics, user experience, and business impact. From 340% patient engagement increases to 280% revenue boosts, our clients' success stories are our greatest achievement."
              },
              {
                icon: faRocket,
                title: "Future-Proof Technology",
                description: "We don't just follow trends – we anticipate them. AI/ML, blockchain, cloud-native architectures – we master emerging technologies before they become mainstream, ensuring your solution stays relevant for years to come."
              },
              {
                icon: faAward,
                title: "Quality That's Non-Negotiable",
                description: "Security audits, performance testing, code reviews, accessibility compliance – we're obsessive about quality. Every release goes through rigorous testing because we know you're trusting us with your brand's reputation."
              },
            ].map((feature, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Our Promise */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-24 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <FontAwesomeIcon icon={faStar} className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Our Promise to You
            </h2>
            <div className="mb-12 space-y-6 text-lg leading-relaxed text-white/95 md:text-xl">
              <p>
                When you partner with Orion App Tech, you're not just hiring developers – you're gaining allies 
                who will fight for your success as if it were our own.
              </p>
              <p>
                We promise to listen deeply, innovate fearlessly, communicate transparently, and never settle for 
                anything less than exceptional. We promise to treat your project with the same care we'd give our own.
              </p>
              <p className="text-xl font-semibold md:text-2xl">
                Because at the end of the day, your success is the only metric that truly matters to us.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20"
            >
              <FontAwesomeIcon icon={faHandshake} className="h-6 w-6" />
              Let's Build Something Amazing Together
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      </section>
    </>
  );
};

export default AboutPage;

