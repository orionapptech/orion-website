import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faTrophy, faUsers, faCoins, faChartLine, faShieldAlt, faMobileAlt, faServer, faCrown, faFire, faGem, faDice } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Call Break Game Development | Online Call Break Solutions",
  description:
    "Build engaging Call Break card games with multiplayer tables, tournaments, real money gaming, and smooth gameplay.",
};

const features = [
  {
    icon: faDiamond,
    title: "Authentic Call Break Gameplay",
    description: "Classic rules, trump suits, bidding system, and traditional scoring mechanics.",
  },
  {
    icon: faUsers,
    title: "4-Player Multiplayer",
    description: "Real-time multiplayer tables, private rooms, quick match, and friend invitations.",
  },
  {
    icon: faCoins,
    title: "Real Money & Free Play",
    description: "Dual mode support with secure payments, wallet system, and practice tables.",
  },
  {
    icon: faTrophy,
    title: "Tournaments & Leagues",
    description: "Daily tournaments, seasonal leagues, knockout events with prize pools and rankings.",
  },
  {
    icon: faShieldAlt,
    title: "Fair Play System",
    description: "Random card dealing, anti-cheat measures, secure gameplay, and transparent results.",
  },
  {
    icon: faChartLine,
    title: "Statistics & Analytics",
    description: "Track wins, losses, bidding accuracy, game history, and performance metrics.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "VIP Tables" },
  { icon: faFire, text: "Quick Match" },
  { icon: faGem, text: "Daily Bonuses" },
  { icon: faMobileAlt, text: "Mobile Optimized" },
  { icon: faServer, text: "24/7 Support" },
  { icon: faDice, text: "Multiple Variations" },
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

export default function CallBreakGame() {
  return (
    <>
      <Breadcrumb
        pageName="Call Break Game Development"
        description="Create Nepal's favorite card game with engaging features and smooth multiplayer"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Call Break Games That <span className="gradient-text">Players Call For</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Build captivating Call Break platforms with authentic gameplay, real-time multiplayer,
                  tournaments, and features that honor this beloved South Asian card game.
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
                  <FontAwesomeIcon icon={faDiamond} className="mx-auto h-64 w-64 text-primary opacity-20" />
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
              Complete Call Break Platform
            </h2>
            <p className="text-lg text-body-color">Authentic card gaming with modern features</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Game Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Launch Your Call Break Platform?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's build card games that South Asian players love
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-indigo-600 transition hover:bg-gray-100 hover:scale-105">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
