import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faHandHoldingHeart, 
  faDonate, 
  faUsers, 
  faChartPie, 
  faCalendarAlt, 
  faHandsHelping, 
  faGlobe, 
  faBullhorn, 
  faFileInvoiceDollar, 
  faUserFriends, 
  faMobileAlt,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faChartLine,
  faBrain
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "NGO & Non-Profit Software Development | Donation & Impact Management",
  description: "Build world-class NGO platforms with donation management, volunteer coordination, fundraising campaigns, and impact tracking. $100M+ raised.",
  keywords: "NGO software, non-profit technology, donation platform, fundraising software, volunteer management, impact tracking, charity software, grant management"
};

export default function NGOIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-pink-50 to-red-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-400/20 to-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-red-600/10 to-orange-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-pink-600/20 to-red-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Impact Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Active</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">$100M+</div>
                        <div className="text-sm text-white/70">Raised</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">1M+</div>
                        <div className="text-sm text-white/70">Donors</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50K+</div>
                        <div className="text-sm text-white/70">Volunteers</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">500+</div>
                        <div className="text-sm text-white/70">Projects</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faDonate, label: "Donate", color: "from-pink-400 to-red-500" },
                      { icon: faUsers, label: "Volunteers", color: "from-purple-400 to-pink-500" },
                      { icon: faBullhorn, label: "Campaigns", color: "from-orange-400 to-red-500" },
                      { icon: faChartPie, label: "Impact", color: "from-blue-400 to-cyan-500" },
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
                        { campaign: 'Clean Water Initiative', raised: '$250K', goal: '65%' },
                        { campaign: 'Education for All', raised: '$180K', goal: '90%' },
                        { campaign: 'Medical Relief Fund', raised: '$320K', goal: '80%' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.campaign}</div>
                            <div className="text-xs text-white/60">{item.raised} · {item.goal} funded</div>
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
                  <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-pink-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="h-8 w-8 text-red-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 dark:border-pink-800 dark:bg-pink-900/30">
                <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                  NGO & Non-Profit
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Technology That
                <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent"> Changes Lives</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Comprehensive NGO platforms with donation management, volunteer coordination, fundraising campaigns, and impact tracking. Empower 1M+ donors to fund $100M+ in social impact.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">$100M+</div>
                  <div className="text-sm text-body-color">Raised</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">1M+</div>
                  <div className="text-sm text-body-color">Donors</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">50K+</div>
                  <div className="text-sm text-body-color">Volunteers</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">500+</div>
                  <div className="text-sm text-body-color">Projects</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-600 to-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Amplify Your Impact</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-pink-600 px-8 py-4 text-lg font-semibold text-pink-600 transition-all hover:bg-pink-50 dark:hover:bg-pink-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">PCI Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Tax Receipts</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Grant Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-red-50/30 to-orange-50/50 dark:from-pink-950/20 dark:via-red-950/10 dark:to-orange-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete NGO Solutions</h2>
            <p className="text-lg text-body-color">From donations to impact tracking – comprehensive technology for non-profits</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faDonate,
                title: 'Donation Management',
                description: 'Secure online donations, recurring giving, one-time gifts, tax receipts, donor CRM, and automated thank-you messages.',
                gradient: 'from-pink-400 to-red-500'
              },
              {
                icon: faUsers,
                title: 'Volunteer Management',
                description: 'Registration, scheduling, time tracking, skill matching, communication tools, and volunteer appreciation programs.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faBullhorn,
                title: 'Fundraising Campaigns',
                description: 'Create campaigns, peer-to-peer fundraising, crowdfunding, social sharing, and real-time progress tracking.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faCalendarAlt,
                title: 'Event Management',
                description: 'Charity events, galas, marathons with ticketing, registration, attendee management, and live donations.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faChartPie,
                title: 'Impact Tracking & Reporting',
                description: 'Monitor programs, measure outcomes, generate stakeholder reports, grant compliance, and impact visualization.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faGlobe,
                title: 'Beneficiary Management',
                description: 'Track aid distribution, beneficiary profiles, service delivery, program effectiveness, and success stories.',
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise NGO Technology Stack</h2>
            <p className="text-lg text-body-color">Built on secure platforms with payment processing and CRM integration</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-500">
                <FontAwesomeIcon icon={faDonate} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Payments & Finance</h3>
              <ul className="space-y-3">
                {['Stripe & PayPal', 'Recurring Donations', 'Tax Receipt Generation', 'Multi-Currency Support', 'Fraud Detection', 'PCI-DSS Compliance'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faUsers} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">CRM & Communication</h3>
              <ul className="space-y-3">
                {['Salesforce Integration', 'Email Campaigns', 'SMS Notifications', 'Donor Segmentation', 'Automated Workflows', 'Mailchimp/Twilio'].map((tech, i) => (
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
                {['React & Next.js', 'React Native Apps', 'Node.js Backend', 'MongoDB & PostgreSQL', 'AWS Cloud', 'Progressive Web Apps'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-pink-50/30 to-orange-50/50 dark:from-red-950/20 dark:via-pink-950/10 dark:to-orange-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Leading NGOs Choose Us</h2>
            <p className="text-lg text-body-color">Empowering 1M+ donors to fund $100M+ in social impact across 500+ projects</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBolt, title: 'Easy Giving Experience', description: 'One-click donations, saved payment methods, recurring gifts, and mobile-optimized forms that convert 3x better.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faShieldHalved, title: 'Secure & Compliant', description: 'PCI-DSS Level 1, encrypted data, fraud protection, GDPR compliance, and automated tax receipts.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faBrain, title: 'Smart Fundraising', description: 'AI donor insights, personalized appeals, optimal ask amounts, and automated stewardship campaigns.', gradient: 'from-purple-400 to-pink-500' },
              { icon: faGlobe, title: 'Multi-Channel Engagement', description: 'Web, mobile apps, social media, email, SMS, events – engage donors everywhere they are.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faUsers, title: 'Volunteer Excellence', description: 'Skill-based matching, automated scheduling, time tracking, and volunteer appreciation programs.', gradient: 'from-red-400 to-pink-500' },
              { icon: faChartLine, title: 'Impact Reporting', description: 'Real-time dashboards for donations, programs, outcomes, and automated stakeholder reports.', gradient: 'from-indigo-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-red-600 to-orange-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Amplify Your Impact?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 1M+ donors and 500+ organizations. Build platforms that power fundraising, volunteer coordination, and measurable social impact.
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
                <div className="mb-3 text-3xl font-bold text-white">$100M+</div>
                <div className="text-white/80">Donations Raised</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">1M+</div>
                <div className="text-white/80">Active Donors</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">500+</div>
                <div className="text-white/80">Impact Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
