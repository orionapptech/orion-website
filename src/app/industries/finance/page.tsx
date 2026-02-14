import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faShieldHalved,
  faChartLine,
  faCreditCard,
  faLock,
  faCheckCircle,
  faArrowRight,
  faEye,
  faMobileAlt,
  faCloud,
  faRobot,
  faBolt,
  faGlobe,
  faUsers,
  faMoneyBillTransfer,
  faWallet,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Finance & Fintech Software Development - Banking Apps & Payment Solutions | Orion App Tech",
  description:
    "Enterprise-grade fintech solutions with PCI-DSS compliance. Banking apps, payment gateways, trading platforms, and blockchain integration. 500M+ transactions processed securely.",
  keywords: "fintech development, banking app, payment gateway, trading platform, blockchain, financial software, PCI DSS compliance",
};

export default function FinanceIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: Financial Dashboard Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-green-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Live Transactions Dashboard */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Live Transaction Monitor</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Secure</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">$500M+</div>
                        <div className="text-sm text-white/70">Processed</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">10M+</div>
                        <div className="text-sm text-white/70">Users</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">99.99%</div>
                        <div className="text-sm text-white/70">Uptime</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">&lt;2s</div>
                        <div className="text-sm text-white/70">Response</div>
                      </div>
                    </div>
                  </div>

                  {/* Security Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faShieldHalved, label: "PCI-DSS", color: "from-blue-400 to-indigo-500" },
                      { icon: faLock, label: "256-bit SSL", color: "from-green-400 to-emerald-500" },
                      { icon: faRobot, label: "AI Fraud", color: "from-purple-400 to-pink-500" },
                      { icon: faChartLine, label: "Real-Time", color: "from-orange-400 to-red-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Transaction Flow */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Recent Transactions</div>
                    <div className="space-y-2">
                      {[
                        { type: 'Payment', amount: '$1,234', status: 'Success', color: 'green' },
                        { type: 'Transfer', amount: '$5,678', status: 'Processing', color: 'yellow' },
                        { type: 'Withdrawal', amount: '$890', status: 'Success', color: 'green' },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{tx.type}</div>
                            <div className="text-xs text-white/60">{tx.amount}</div>
                          </div>
                          <span className={`text-xs font-semibold text-${tx.color}-400`}>{tx.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faUniversity} className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faCreditCard} className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-900/30">
                <FontAwesomeIcon icon={faUniversity} className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Finance & Fintech Solutions
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Banking & Fintech Software
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> That Scales</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Enterprise-grade financial solutions with bank-level security. From mobile banking to payment gateways, trading platforms to blockchain integration – we build fintech that handles millions of transactions securely.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">$500M+</div>
                  <div className="text-sm text-body-color">Processed</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">10M+</div>
                  <div className="text-sm text-body-color">Users</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">99.99%</div>
                  <div className="text-sm text-body-color">Uptime</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">PCI-DSS</div>
                  <div className="text-sm text-body-color">Certified</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Build Your Fintech Solution</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Finance Portfolio</span>
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
                  <span className="text-sm text-body-color">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">256-bit Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Comprehensive Fintech Solutions
            </h2>
            <p className="text-lg text-body-color">
              From digital banking to blockchain – we build financial software that meets the highest security and compliance standards
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faMobileAlt,
                title: 'Mobile & Digital Banking',
                description: 'Feature-rich banking apps with account management, fund transfers, bill payments, and biometric authentication.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faCreditCard,
                title: 'Payment Gateway Integration',
                description: 'Secure payment processing with support for cards, wallets, UPI, and international payment methods.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faChartLine,
                title: 'Trading & Investment Platforms',
                description: 'Real-time stock trading, portfolio management, market analytics, and robo-advisory systems.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faMoneyBillTransfer,
                title: 'Loan Management Systems',
                description: 'End-to-end loan processing from application to approval, disbursement, and EMI management.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faWallet,
                title: 'Digital Wallets & UPI',
                description: 'E-wallet solutions with P2P transfers, merchant payments, and loyalty program integration.',
                gradient: 'from-indigo-400 to-blue-500'
              },
              {
                icon: faChartBar,
                title: 'Financial Analytics & BI',
                description: 'Real-time dashboards, predictive analytics, risk assessment, and compliance reporting.',
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
              Bank-Grade Technology Stack
            </h2>
            <p className="text-lg text-body-color">
              Built on enterprise technologies with military-grade security and 99.99% uptime SLA
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Security & Compliance</h3>
              <ul className="space-y-3">
                {[
                  'PCI-DSS Level 1 Compliance',
                  'SOC 2 Type II Certification',
                  'GDPR & Data Privacy',
                  '256-bit AES Encryption',
                  'Multi-Factor Authentication',
                  'AI-Powered Fraud Detection'
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
                <FontAwesomeIcon icon={faCloud} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Infrastructure & Backend</h3>
              <ul className="space-y-3">
                {[
                  'Microservices Architecture',
                  'AWS / Azure Cloud Infrastructure',
                  'Kubernetes Container Orchestration',
                  'PostgreSQL & MongoDB',
                  'Redis In-Memory Caching',
                  'Real-Time WebSocket APIs'
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
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Frontend & Mobile</h3>
              <ul className="space-y-3">
                {[
                  'React Native iOS & Android',
                  'Next.js Web Applications',
                  'Progressive Web Apps (PWA)',
                  'Biometric Authentication',
                  'Offline Mode Support',
                  'Real-Time Notifications'
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-indigo-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Banks & Fintechs Trust Us
            </h2>
            <p className="text-lg text-body-color">
              We've built fintech platforms that process $500M+ in transactions with zero security breaches
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faShieldHalved,
                title: 'Bank-Grade Security',
                description: 'Multi-layer security with encryption, fraud detection, and real-time monitoring. Zero data breaches in 8+ years.',
                gradient: 'from-blue-400 to-indigo-500'
              },
              {
                icon: faCheckCircle,
                title: 'Regulatory Compliance',
                description: 'PCI-DSS, SOC 2, GDPR, KYC, AML – we build compliance into every line of code, not as an afterthought.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faBolt,
                title: 'High-Performance Systems',
                description: 'Handle millions of transactions per day with sub-2-second response times and 99.99% uptime guarantee.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faRobot,
                title: 'AI-Powered Fraud Prevention',
                description: 'Machine learning models that detect suspicious patterns and prevent fraud in real-time.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faGlobe,
                title: 'Multi-Currency & Cross-Border',
                description: 'Support for 150+ currencies, international payment gateways, and cross-border compliance.',
                gradient: 'from-cyan-400 to-blue-500'
              },
              {
                icon: faUsers,
                title: 'Scalable for Growth',
                description: 'From MVP to millions of users – our architecture scales seamlessly without performance degradation.',
                gradient: 'from-orange-400 to-red-500'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Build Your Fintech Platform?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join leading banks and fintech startups who trust us with their financial software. From concept to 10 million users – we've been there, scaled that.
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
                <div className="mb-3 text-3xl font-bold text-white">$500M+</div>
                <div className="text-white/80">Transactions Processed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">10M+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">99.99%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
