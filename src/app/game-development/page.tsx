import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faDice,
  faChess,
  faTrophy,
  faFutbol,
  faDharmachakra,
  faCoins,
  faUsers,
  faShieldHalved,
  faChartLine,
  faCloud,
  faMobileAlt,
  faServer,
  faLock,
  faBolt,
  faRocket,
  faCode,
  faCheckCircle,
  faArrowRight,
  faEye,
  faCreditCard,
  faGlobe,
  faCog
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Game Development Services - Build Engaging Gaming Platforms | Orion App Tech",
  description:
    "World-class game development services for Ludo, Rummy, Poker, Casino, Fantasy Sports, and more. Multiplayer infrastructure, real-money gaming, and engaging player experiences.",
  keywords: "game development, ludo game, rummy game, poker platform, casino games, fantasy sports, multiplayer games, real money gaming",
};

const gameTypes = [
  {
    name: "Ludo",
    slug: "ludo",
    icon: faDice,
    description: "Classic board game with multiplayer tournaments, real-money gaming, private rooms, and voice chat.",
    players: "10M+ Active Players",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "Rummy",
    slug: "rummy",
    icon: faChess,
    description: "Advanced card game platforms with AI opponents, cash games, tournament modes, and skill-based matchmaking.",
    players: "8M+ Active Players",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    name: "Poker",
    slug: "poker",
    icon: faTrophy,
    description: "Texas Hold'em, Omaha, and variants with secure payments, live tournaments, and professional tables.",
    players: "12M+ Active Players",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    name: "Casino Games",
    slug: "casino",
    icon: faDharmachakra,
    description: "Slots, Blackjack, Baccarat with RNG certification, live dealers, and progressive jackpots.",
    players: "15M+ Active Players",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    name: "Roulette",
    slug: "roulette",
    icon: faDharmachakra,
    description: "Live and virtual roulette with multiple betting options, beautiful 3D animations, and real-time statistics.",
    players: "5M+ Active Players",
    gradient: "from-red-400 to-rose-500",
  },
  {
    name: "Cricket Games",
    slug: "cricket",
    icon: faTrophy,
    description: "Cricket betting, prediction platforms, fantasy cricket, and live match score integration.",
    players: "20M+ Active Players",
    gradient: "from-indigo-400 to-blue-500",
  },
  {
    name: "Football Games",
    slug: "football",
    icon: faFutbol,
    description: "Football betting, fantasy leagues, live match predictions, and tournament management systems.",
    players: "18M+ Active Players",
    gradient: "from-green-400 to-teal-500",
  },
  {
    name: "E-Sports",
    slug: "esports",
    icon: faGamepad,
    description: "Tournament management, streaming integration, competitive gaming platforms, and prize distribution.",
    players: "25M+ Active Players",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "3 Patti (Teen Patti)",
    slug: "3-patti",
    icon: faChess,
    description: "Popular Indian card game with variations, private tables, social features, and tournament modes.",
    players: "30M+ Active Players",
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "Virtual Money Games",
    slug: "virtual-money",
    icon: faCoins,
    description: "In-game currency systems, virtual economies, NFT integration, and blockchain-based monetization.",
    players: "50M+ Active Players",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    name: "Call Break",
    slug: "call-break",
    icon: faTrophy,
    description: "Strategic card game with multiplayer modes, ranking systems, seasonal leagues, and rewards.",
    players: "6M+ Active Players",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    name: "Fantasy Sports",
    slug: "fantasy",
    icon: faTrophy,
    description: "Fantasy cricket, football, kabaddi, and multi-sport platforms with live scores and real-time updates.",
    players: "40M+ Active Players",
    gradient: "from-pink-400 to-rose-500",
  },
];

export default function GameDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-pink-400/20 to-orange-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: Gaming Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-orange-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Gaming Stats Dashboard */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Live Gaming Metrics</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">250M+</div>
                        <div className="text-sm text-white/70">Active Players</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">5B+</div>
                        <div className="text-sm text-white/70">Games Played</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">99.9%</div>
                        <div className="text-sm text-white/70">Uptime</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">&lt;50ms</div>
                        <div className="text-sm text-white/70">Latency</div>
                      </div>
                    </div>
                  </div>

                  {/* Game Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faUsers, label: "Multiplayer", color: "from-blue-400 to-cyan-500" },
                      { icon: faShieldHalved, label: "Anti-Cheat", color: "from-green-400 to-emerald-500" },
                      { icon: faCreditCard, label: "Payments", color: "from-purple-400 to-pink-500" },
                      { icon: faChartLine, label: "Analytics", color: "from-orange-400 to-red-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Code Snippet */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm backdrop-blur-sm">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-1 text-white/80">
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">game</span> = <span className="text-green-400">createMultiplayerGame</span>({'{'})</div>
                      <div className="pl-4">type: <span className="text-orange-400">'realtime'</span>,</div>
                      <div className="pl-4">players: <span className="text-cyan-400">1000000</span>,</div>
                      <div className="pl-4">latency: <span className="text-cyan-400">&lt;50</span>ms,</div>
                      <div className="pl-4">security: <span className="text-orange-400">'enterprise'</span></div>
                      <div>{'}'});</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faGamepad} className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faTrophy} className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-900/30">
                <FontAwesomeIcon icon={faGamepad} className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  Game Development Excellence
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Build Gaming Platforms That Keep Players
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Hooked</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                From casual mobile games to complex multiplayer platforms – we build engaging gaming experiences with robust infrastructure, real-money gaming systems, and features that drive retention and monetization.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">12+</div>
                  <div className="text-sm text-body-color">Game Types</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">250M+</div>
                  <div className="text-sm text-body-color">Players Served</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">5B+</div>
                  <div className="text-sm text-body-color">Games Played</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">99.9%</div>
                  <div className="text-sm text-body-color">Uptime SLA</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Start Your Game Project</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-purple-600 px-8 py-4 text-lg font-semibold text-purple-600 transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Gaming Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">RNG Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">PCI-DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Anti-Cheat Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Game Types Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-orange-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Games We Build & Scale
            </h2>
            <p className="text-lg text-body-color">
              From classic card games to modern fantasy sports – we've built platforms that handle millions of concurrent players with zero downtime
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gameTypes.map((game, idx) => (
              <Link
                key={game.slug}
                href={`/game-development/${game.slug}`}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${game.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-30`} />
                
                <div className="relative">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${game.gradient} transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                    <FontAwesomeIcon icon={game.icon} className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{game.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-body-color">{game.description}</p>
                  
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 dark:from-purple-900/30 dark:to-pink-900/30">
                    <FontAwesomeIcon icon={faUsers} className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{game.players}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <span className="text-sm font-medium">Explore</span>
                    <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Gaming Infrastructure That Scales
            </h2>
            <p className="text-lg text-body-color">
              Built on cutting-edge technology that handles millions of concurrent players with &lt;50ms latency
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faServer} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Backend & Infrastructure</h3>
              <ul className="space-y-3">
                {[
                  'Node.js & Socket.io for Real-Time',
                  'Redis for In-Memory Caching',
                  'MongoDB & PostgreSQL Databases',
                  'Kubernetes Auto-Scaling',
                  'AWS/Google Cloud Infrastructure',
                  'Load Balancing & CDN'
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
                  'React Native for iOS & Android',
                  'Unity3D for 3D Games',
                  'WebGL for Browser Games',
                  'Next.js for Web Platforms',
                  'Progressive Web Apps (PWA)',
                  'Responsive UI/UX Design'
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
                <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Security & Payments</h3>
              <ul className="space-y-3">
                {[
                  'PCI-DSS Payment Integration',
                  'RNG Certification & Fairness',
                  'Anti-Cheat & Fraud Detection',
                  'JWT Authentication & Authorization',
                  'SSL/TLS Encryption',
                  'DDoS Protection & WAF'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Tech Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { name: 'Socket.io', icon: faBolt },
              { name: 'Redis', icon: faRocket },
              { name: 'Kubernetes', icon: faCloud },
              { name: 'MongoDB', icon: faServer },
              { name: 'React Native', icon: faMobileAlt },
              { name: 'Unity3D', icon: faGamepad },
            ].map((tech, i) => (
              <div key={i} className="glass-effect flex items-center gap-3 rounded-full px-6 py-3">
                <FontAwesomeIcon icon={tech.icon} className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold text-black dark:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              From Concept to Launch in 12-16 Weeks
            </h2>
            <p className="text-lg text-body-color">
              Our battle-tested process ensures your gaming platform launches on time, within budget, and ready to scale
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                step: '01',
                title: 'Discovery & Game Design',
                description: 'We analyze your target audience, competitors, and monetization strategy. Define game mechanics, UX flows, and create wireframes with player psychology in mind.',
                gradient: 'from-blue-500 to-cyan-500',
                features: ['Market Research', 'Game Mechanics Design', 'Wireframing', 'Monetization Strategy']
              },
              {
                step: '02',
                title: 'Architecture & Prototyping',
                description: 'Design scalable multiplayer architecture, database schemas, and API structure. Build clickable prototype to validate gameplay before full development.',
                gradient: 'from-purple-500 to-pink-500',
                features: ['System Architecture', 'Database Design', 'API Planning', 'Prototype Development']
              },
              {
                step: '03',
                title: 'Development & Integration',
                description: 'Agile sprints with regular demos. Build backend infrastructure, mobile apps, admin panels, payment systems, and integrate third-party services.',
                gradient: 'from-orange-500 to-red-500',
                features: ['Sprint Development', 'Real-Time Systems', 'Payment Integration', 'Admin Dashboard']
              },
              {
                step: '04',
                title: 'Testing, Launch & Scale',
                description: 'Comprehensive testing including load testing for millions of users. Beta launch, gather feedback, optimize, and scale infrastructure as you grow.',
                gradient: 'from-green-500 to-emerald-500',
                features: ['Load Testing', 'Security Audit', 'Beta Launch', 'Performance Optimization']
              },
            ].map((phase, idx) => (
              <div key={idx} className="glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${phase.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`} />
                
                <div className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${phase.gradient} text-2xl font-bold text-white`}>
                      {phase.step}
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">{phase.title}</h3>
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-body-color">{phase.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {phase.features.map((feature, i) => (
                      <span key={i} className={`rounded-full bg-gradient-to-r ${phase.gradient} bg-opacity-10 px-4 py-2 text-sm font-medium text-black dark:text-white`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Gaming Companies Choose Us
            </h2>
            <p className="text-lg text-body-color">
              We've built gaming platforms that handle millions of players. Here's what sets us apart
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBolt,
                title: 'Ultra-Low Latency',
                description: 'Our infrastructure is optimized for real-time gaming with &lt;50ms latency worldwide using edge computing and CDN distribution.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faShieldHalved,
                title: 'Anti-Cheat & Security',
                description: 'Advanced fraud detection, AI-powered anomaly detection, and multi-layer security to protect your platform and players.',
                gradient: 'from-red-400 to-pink-500'
              },
              {
                icon: faRocket,
                title: 'Auto-Scaling Infrastructure',
                description: 'Handle traffic spikes seamlessly. Our systems automatically scale from 1000 to 1 million concurrent players without downtime.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faCreditCard,
                title: 'Payment Expertise',
                description: 'Integrated with 50+ payment gateways. PCI-DSS compliant with instant deposits, withdrawals, and wallet management.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faChartLine,
                title: 'Analytics & Insights',
                description: 'Real-time player analytics, revenue tracking, behavior analysis, and AI-powered recommendations to boost retention.',
                gradient: 'from-purple-400 to-indigo-500'
              },
              {
                icon: faGlobe,
                title: 'Multi-Platform Excellence',
                description: 'Single codebase for iOS, Android, and Web. 100% feature parity across platforms with offline mode support.',
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Build the Next Big Gaming Platform?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Whether you're launching your first game or scaling to millions of players – we have the expertise, infrastructure, and track record to make it happen.
            </p>
            <p className="mb-12 text-lg text-white/80">
              Join 100+ gaming companies that trust us with their platforms. From concept to 10 million players – we've been there, done that.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your Gaming Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <FontAwesomeIcon icon={faEye} />
                <span>View Gaming Portfolio</span>
              </Link>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">12-16 Weeks</div>
                <div className="text-white/80">Average Development Time</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">250M+</div>
                <div className="text-white/80">Total Players Served</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}