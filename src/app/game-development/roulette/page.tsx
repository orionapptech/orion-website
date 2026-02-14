import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTrophy, faUsers, faCoins, faChartLine, faShieldAlt, faMobileAlt, faServer, faCrown, faDice, faFire, faGem } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Roulette Game Development | Online Roulette Platform Solutions",
  description:
    "Build engaging roulette games with 3D graphics, live dealers, multiple variants, real money gaming, and mobile support.",
};

const features = [
  {
    icon: faCircle,
    title: "Multiple Roulette Variants",
    description: "European, American, French roulette with mini roulette and multi-wheel options.",
  },
  {
    icon: faUsers,
    title: "Live Dealer Roulette",
    description: "HD video streaming with professional dealers, real-time betting, and interactive chat.",
  },
  {
    icon: faCoins,
    title: "Advanced Betting System",
    description: "Inside and outside bets, neighbor bets, special bets with bet history and statistics.",
  },
  {
    icon: faDice,
    title: "3D Graphics & Animation",
    description: "Realistic wheel physics, stunning 3D visuals, smooth animations, and customizable themes.",
  },
  {
    icon: faShieldAlt,
    title: "Fair Play & RNG",
    description: "Certified random number generation, provably fair system, and transparent game outcomes.",
  },
  {
    icon: faTrophy,
    title: "Tournament Mode",
    description: "Roulette tournaments, leaderboards, jackpots, and progressive prize pools.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "VIP Tables" },
  { icon: faFire, text: "Hot & Cold Numbers" },
  { icon: faGem, text: "Bonus Rounds" },
  { icon: faMobileAlt, text: "Mobile Optimized" },
  { icon: faServer, text: "Multi-Language" },
  { icon: faChartLine, text: "Statistics Tracker" },
];

const technologies = [
  "Unity 3D",
  "WebGL",
  "Node.js",
  "Socket.io",
  "MongoDB",
  "Redis",
  "WebRTC",
  "AWS",
  "Three.js",
  "React Native",
];

export default function RouletteGame() {
  return (
    <>
      <Breadcrumb
        pageName="Roulette Game Development"
        description="Create stunning roulette platforms with realistic gameplay and engaging features"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-red-500/10 via-transparent to-black/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Roulette Games That <span className="gradient-text">Spin Success</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Build captivating roulette platforms with photorealistic graphics, live dealers,
                  multiple game variants, and features that keep players on the edge of their seats.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-opacity-90 animate-pulse-glow">
                    Start Your Project
                  </a>
                  <a href="#features" className="glass-effect rounded-lg px-8 py-4 text-base font-semibold text-black dark:text-white transition hover-lift">
                    Explore Features
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
              Professional Roulette Platform
            </h2>
            <p className="text-lg text-body-color">Complete roulette game solutions for online casinos</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-black text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-500/5 to-black/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Game Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-black text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-red-500/10 to-black/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-black to-red-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Spin Your Success?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's build a roulette platform that delivers thrilling gameplay
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
