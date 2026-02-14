import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faChartLine, faBullhorn, faHandshake, faShoppingBag, faCalendarAlt, faMobileAlt, faDollarSign, faCamera, faUserFriends, faStar, faRocket, faCheckCircle, faArrowRight, faEye, faShieldHalved, faBolt, faBrain, faHeart } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Influencer Marketing Platform Development | Creator Collaboration Software",
  description:
    "Build powerful influencer platforms with 100M+ engagements, 50K+ creators, 10K+ brands. Campaign management, analytics, and creator marketplaces.",
  keywords: "influencer marketing platform, creator collaboration software, brand partnerships, influencer marketplace, social media management, campaign analytics, content creator platform",
};

export default function InfluencersIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-400/20 to-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-purple-600/10 to-pink-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-pink-600/20 to-purple-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Influencer Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">100M+</div>
                        <div className="text-sm text-white/70">Engagements</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50K+</div>
                        <div className="text-sm text-white/70">Creators</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">10K+</div>
                        <div className="text-sm text-white/70">Brands</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">4.8★</div>
                        <div className="text-sm text-white/70">Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faUsers, label: "Creators", color: "from-pink-400 to-rose-500" },
                      { icon: faBullhorn, label: "Campaigns", color: "from-blue-400 to-cyan-500" },
                      { icon: faChartLine, label: "Analytics", color: "from-purple-400 to-indigo-500" },
                      { icon: faHandshake, label: "Collaborate", color: "from-green-400 to-emerald-500" },
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
                    <div className="mb-2 text-sm font-semibold text-white/90">Active Campaigns</div>
                    <div className="space-y-2">
                      {[
                        { brand: 'Nike Sportswear', creator: '@fitnessguru', engagement: '2.5M' },
                        { brand: 'Sephora Beauty', creator: '@makeupqueen', engagement: '1.8M' },
                        { brand: 'Apple Tech', creator: '@techreview', engagement: '3.2M' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.brand}</div>
                            <div className="text-xs text-white/60">{item.creator} · {item.engagement} reach</div>
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
                  <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 text-pink-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faYoutube} className="h-8 w-8 text-red-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 dark:border-pink-800 dark:bg-pink-900/30">
                <FontAwesomeIcon icon={faUsers} className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                  Influencer Marketing
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Creator Platforms That
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Amplify Brands</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Complete influencer marketing platforms connecting 50K+ creators with 10K+ brands. Campaign management, analytics, and collaboration tools driving 100M+ engagements.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">100M+</div>
                  <div className="text-sm text-body-color">Engagements</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">50K+</div>
                  <div className="text-sm text-body-color">Creators</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">10K+</div>
                  <div className="text-sm text-body-color">Brands</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">4.8★</div>
                  <div className="text-sm text-body-color">Rating</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Launch Platform</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-pink-600 px-8 py-4 text-lg font-semibold text-pink-600 transition-all hover:bg-pink-50 dark:hover:bg-pink-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Demo</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Creator Discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Campaign ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">AI Matching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-pink-50/50 dark:from-pink-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete Influencer Marketing Solutions</h2>
            <p className="text-lg text-body-color">From discovery to payment – end-to-end creator collaboration technology</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faHandshake,
                title: 'Influencer Marketplaces',
                description: 'Creator discovery, profile verification, portfolio showcase, niche filtering, audience demographics, and collaboration matching.',
                gradient: 'from-pink-400 to-rose-500'
              },
              {
                icon: faBullhorn,
                title: 'Campaign Management',
                description: 'Create campaigns, set objectives, manage deliverables, track deadlines, approve content, and monitor performance.',
                gradient: 'from-purple-400 to-indigo-500'
              },
              {
                icon: faChartLine,
                title: 'Analytics & Insights',
                description: 'Track engagement, reach, impressions, conversions, ROI, audience insights, and comprehensive performance reports.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faCamera,
                title: 'Content Management',
                description: 'Upload content, version control, approval workflows, feedback tools, content calendar, and rights management.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faDollarSign,
                title: 'Payment & Contracts',
                description: 'Automated payments, contract generation, milestone tracking, secure escrow, invoicing, and tax documentation.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faUsers,
                title: 'Influencer CRM',
                description: 'Relationship management, communication history, performance tracking, collaboration notes, and partnership analytics.',
                gradient: 'from-red-400 to-pink-500'
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise Influencer Technology Stack</h2>
            <p className="text-lg text-body-color">Built on social media APIs with AI matching and analytics</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                <FontAwesomeIcon icon={faInstagram} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Social Media & APIs</h3>
              <ul className="space-y-3">
                {['Instagram Graph API', 'YouTube Analytics API', 'TikTok Marketing API', 'Twitter API v2', 'Facebook Business', 'LinkedIn Creator API'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
                <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Analytics & AI</h3>
              <ul className="space-y-3">
                {['TensorFlow ML Models', 'Natural Language Processing', 'Sentiment Analysis', 'Audience Insights', 'Fraud Detection', 'Predictive Analytics'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faRocket} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Platform & Payments</h3>
              <ul className="space-y-3">
                {['React & Next.js', 'Node.js Microservices', 'PostgreSQL Database', 'Stripe Payments', 'AWS Cloud', 'Real-Time Dashboards'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-purple-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-purple-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Influencers & Brands Choose Us</h2>
            <p className="text-lg text-body-color">Powering 100M+ engagements with 50K+ creators and 10K+ brands</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBrain, title: 'AI-Powered Discovery', description: 'Smart creator matching using AI algorithms analyzing audience demographics, engagement rates, content quality, and brand alignment.', gradient: 'from-purple-400 to-indigo-500' },
              { icon: faChartLine, title: 'Data-Driven Decisions', description: 'Real-time analytics tracking engagement, reach, conversions, ROI, audience insights, and campaign performance metrics.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faHandshake, title: 'Seamless Collaboration', description: 'Streamlined workflows for campaign briefs, content approval, feedback, revisions, and deliverable management.', gradient: 'from-pink-400 to-rose-500' },
              { icon: faShieldHalved, title: 'Authentic Partnerships', description: 'Profile verification, fraud detection, authentic engagement tracking, and transparent performance reporting.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faBolt, title: 'Scale Efficiently', description: 'Manage hundreds of campaigns simultaneously, automate workflows, bulk operations, and team collaboration tools.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faHeart, title: 'Complete Transparency', description: 'Full visibility into campaign progress, content status, payment tracking, performance metrics, and ROI calculation.', gradient: 'from-red-400 to-pink-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Transform Influencer Marketing?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 50K+ creators and 10K+ brands. Build platforms that drive 100M+ engagements and authentic partnerships.
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
                <div className="mb-3 text-3xl font-bold text-white">100M+</div>
                <div className="text-white/80">Total Engagements</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80">Active Creators</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">4.8★</div>
                <div className="text-white/80">Platform Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
