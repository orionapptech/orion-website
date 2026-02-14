import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faGem, faTrophy, faUsers, faCoins, faChartLine, faShieldAlt, faMobileAlt, faServer, faCrown, faFire, faStar } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Casino Game Development | Online Casino Platform Solutions",
  description:
    "Build complete casino platforms with slots, blackjack, roulette, baccarat, real money gaming, and live dealer features.",
};

const features = [
  {
    icon: faDice,
    title: "Multiple Casino Games",
    description: "Slots, Blackjack, Roulette, Baccarat, Video Poker, Craps, Keno with stunning 3D graphics.",
  },
  {
    icon: faGem,
    title: "Slot Machine Engine",
    description: "Custom slot games with multiple paylines, bonus rounds, free spins, and progressive jackpots.",
  },
  {
    icon: faUsers,
    title: "Live Dealer Games",
    description: "Real-time live casino with professional dealers, HD streaming, and interactive gameplay.",
  },
  {
    icon: faCoins,
    title: "Real Money System",
    description: "Secure deposits, withdrawals, bonus management, comp points, and VIP rewards program.",
  },
  {
    icon: faShieldAlt,
    title: "Provably Fair Gaming",
    description: "Blockchain-based RNG verification, game fairness proof, and transparent odds display.",
  },
  {
    icon: faTrophy,
    title: "Jackpot System",
    description: "Progressive jackpots, daily drops, network-wide pools with real-time prize tracking.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "VIP Tiers" },
  { icon: faFire, text: "Hot Games" },
  { icon: faStar, text: "Daily Bonuses" },
  { icon: faMobileAlt, text: "Cross-Platform" },
  { icon: faServer, text: "24/7 Support" },
  { icon: faChartLine, text: "Player Analytics" },
];

const technologies = [
  "Unity 3D",
  "Unreal Engine",
  "Node.js",
  "WebRTC",
  "MongoDB",
  "Redis",
  "Blockchain",
  "AWS",
  "WebGL",
  "Socket.io",
];

export default function CasinoGame() {
  return (
    <>
      <Breadcrumb
        pageName="Casino Game Development"
        description="Create world-class casino platforms with stunning games and unbeatable player experience"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-500/10 via-transparent to-red-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Casino Games That <span className="gradient-text">Hit Jackpots</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Launch your online casino with premium games, live dealers, progressive jackpots,
                  and a platform that delivers Las Vegas excitement anywhere, anytime.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-opacity-90 animate-pulse-glow">
                    Start Development
                  </a>
                  <a href="#features" className="glass-effect rounded-lg px-8 py-4 text-base font-semibold text-black dark:text-white transition hover-lift">
                    View Features
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-float lg:ml-auto lg:max-w-[500px]">
                <div className="glass-card rounded-2xl p-10 dark:glass-card-dark">
                  <FontAwesomeIcon icon={faDice} className="mx-auto h-64 w-64 text-primary opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="pb-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Complete Casino Platform
            </h2>
            <p className="text-lg text-body-color">Full-featured online casino solutions</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-600 to-red-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-500/5 to-red-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Platform Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-600 to-red-600 text-white">
                  <FontAwesomeIcon icon={feature.icon} className="h-6 w-6" />
                </div>
                <span className="font-semibold text-black dark:text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="glass-effect rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-red-600 to-pink-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Launch Your Online Casino?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's build a casino platform that delivers excitement and wins
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-red-600 transition hover:bg-gray-100 hover:scale-105">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
