import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTrophy, faUsers, faCoins, faGlasses, faShieldAlt, faMobileAlt, faServer, faCrown, faDiamond, faFire, faChartLine } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Poker Game Development | Online Poker Platform Solutions",
  description:
    "Build professional poker platforms with Texas Hold'em, Omaha, real money games, tournaments, and live dealer features.",
};

const features = [
  {
    icon: faUsers,
    title: "Multi-Table Tournaments",
    description: "Host massive MTTs, Sit & Go, cash games with advanced table management and player pooling.",
  },
  {
    icon: faCoins,
    title: "Real Money Gaming",
    description: "Secure cash games, buy-ins, rake management, instant payouts, and comprehensive wallet system.",
  },
  {
    icon: faTrophy,
    title: "Tournament Engine",
    description: "Freerolls, satellites, bounty tournaments, knockout games with customizable structures.",
  },
  {
    icon: faShieldAlt,
    title: "RNG & Fair Play",
    description: "Certified Random Number Generator, hand history, anti-collusion detection, and fair play algorithms.",
  },
  {
    icon: faDiamond,
    title: "Multiple Variants",
    description: "Texas Hold'em, Omaha, Seven Card Stud, Five Card Draw, and custom poker variants.",
  },
  {
    icon: faGlasses,
    title: "Advanced Features",
    description: "Auto-rebuy, add-on chips, table chat, emotes, player notes, and hand replays.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "VIP Loyalty Program" },
  { icon: faFire, text: "Hot Tables" },
  { icon: faChartLine, text: "Player Statistics" },
  { icon: faMobileAlt, text: "Mobile & Desktop" },
  { icon: faServer, text: "Live Support" },
  { icon: faCircle, text: "Private Tables" },
];

const technologies = [
  "Unity 3D",
  "Node.js",
  "Socket.io",
  "Redis",
  "PostgreSQL",
  "WebRTC",
  "AWS",
  "Blockchain",
  "React Native",
  "WebGL",
];

export default function PokerGame() {
  return (
    <>
      <Breadcrumb
        pageName="Poker Game Development"
        description="Build world-class poker platforms with stunning graphics and professional gameplay"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Poker Games That <span className="gradient-text">Deal Success</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Create professional poker platforms with realistic gameplay, tournament systems, real money integration,
                  and features that rival PokerStars and 888poker.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-opacity-90 animate-pulse-glow">
                    Start Your Project
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
                  <FontAwesomeIcon icon={faCircle} className="mx-auto h-64 w-64 text-primary opacity-20" />
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
              Professional Poker Platform
            </h2>
            <p className="text-lg text-body-color">Enterprise-grade poker solutions for serious gaming businesses</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Advanced Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Build Your Poker Empire?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's create a poker platform that professionals and casual players both love
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-green-600 transition hover:bg-gray-100 hover:scale-105">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
