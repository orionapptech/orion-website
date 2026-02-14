import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faTrophy, faUsers, faCoins, faChartLine, faShieldAlt, faMobileAlt, faServer, faCrown, faFire, faGem, faDiamond } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "3 Patti Game Development | Teen Patti App Solutions",
  description:
    "Build engaging 3 Patti games with real money integration, multiplayer tables, tournaments, and live dealer features.",
};

const features = [
  {
    icon: faDiamond,
    title: "Multiple Game Variants",
    description: "Classic 3 Patti, AK47, Muflis, Joker, and custom variations with flexible rules.",
  },
  {
    icon: faUsers,
    title: "Multi-Player Tables",
    description: "2-6 player tables, private rooms, quick join, and friend invitations for social gaming.",
  },
  {
    icon: faCoins,
    title: "Real Money Gaming",
    description: "Secure wallet, instant deposits, quick withdrawals, and multiple payment gateways.",
  },
  {
    icon: faTrophy,
    title: "Tournaments & Challenges",
    description: "Daily tournaments, sit & go, knockout events with massive prize pools and leaderboards.",
  },
  {
    icon: faShieldAlt,
    title: "Fair Play System",
    description: "RNG certified shuffling, anti-collusion detection, secure gameplay, and fair dealing.",
  },
  {
    icon: faChartLine,
    title: "Player Analytics",
    description: "Detailed statistics, win rates, hand history, and performance tracking dashboard.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "VIP Tables" },
  { icon: faFire, text: "Hot Tables" },
  { icon: faGem, text: "Daily Bonuses" },
  { icon: faMobileAlt, text: "Cross-Platform" },
  { icon: faServer, text: "24/7 Support" },
  { icon: faDice, text: "Side Bets" },
];

const technologies = [
  "Unity",
  "Node.js",
  "Socket.io",
  "Redis",
  "MongoDB",
  "WebRTC",
  "AWS",
  "Razorpay",
  "Firebase",
  "React Native",
];

export default function ThreePattiGame() {
  return (
    <>
      <Breadcrumb
        pageName="3 Patti Game Development"
        description="Create India's favorite card game with stunning graphics and engaging gameplay"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  3 Patti Games That <span className="gradient-text">Win Hearts</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Build captivating Teen Patti platforms with authentic gameplay, real money features,
                  social elements, and everything Indian card game enthusiasts love.
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
              Complete 3 Patti Platform
            </h2>
            <p className="text-lg text-body-color">Authentic Teen Patti with modern features</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-red-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-500/5 to-red-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Game Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Launch Your 3 Patti Platform?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's build Teen Patti games that Indian players love
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-orange-600 transition hover:bg-gray-100 hover:scale-105">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
