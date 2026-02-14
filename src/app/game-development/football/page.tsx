import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faTrophy, faUsers, faChartLine, faGamepad, faMobileAlt, faServer, faCrown, faFire, faGem, faShieldAlt, faCoins } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Football Game Development | Fantasy Football App Solutions",
  description:
    "Build immersive football games with realistic gameplay, fantasy leagues, career modes, and online multiplayer tournaments.",
};

const features = [
  {
    icon: faFutbol,
    title: "Realistic Football Simulation",
    description: "Stunning 3D graphics, advanced AI, realistic ball physics, and official team licenses.",
  },
  {
    icon: faUsers,
    title: "Fantasy Football Leagues",
    description: "Create teams, join leagues, transfer market, head-to-head matches, and prize pools.",
  },
  {
    icon: faTrophy,
    title: "Career & Manager Mode",
    description: "Build your club, transfer negotiations, tactics, training, and lead your team to glory.",
  },
  {
    icon: faGamepad,
    title: "Online Multiplayer",
    description: "Real-time PvP matches, ranked seasons, co-op gameplay, and friendly matches.",
  },
  {
    icon: faShieldAlt,
    title: "Tournament Modes",
    description: "World Cup, Champions League, domestic leagues with authentic competition formats.",
  },
  {
    icon: faCoins,
    title: "Ultimate Team Mode",
    description: "Collect player cards, build dream squad, chemistry system, and pack openings.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "FUT-Style Gameplay" },
  { icon: faFire, text: "Live Match Events" },
  { icon: faGem, text: "Player Evolution" },
  { icon: faMobileAlt, text: "Mobile & Console" },
  { icon: faServer, text: "Cloud Saves" },
  { icon: faChartLine, text: "Statistics Tracking" },
];

const technologies = [
  "Unity 3D",
  "Unreal Engine",
  "Node.js",
  "Socket.io",
  "MongoDB",
  "Redis",
  "AWS",
  "Firebase",
  "React Native",
  "WebGL",
];

export default function FootballGame() {
  return (
    <>
      <Breadcrumb
        pageName="Football Game Development"
        description="Create world-class football games that capture the beautiful game"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Football Games That <span className="gradient-text">Win Championships</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Build the next FIFA or PES with stunning graphics, realistic gameplay, fantasy leagues,
                  and features that football fans worldwide will love.
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
                  <FontAwesomeIcon icon={faFutbol} className="mx-auto h-64 w-64 text-primary opacity-20" />
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
              Complete Football Gaming Platform
            </h2>
            <p className="text-lg text-body-color">From simulation to fantasy - the complete football experience</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-blue-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-500/5 to-blue-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Advanced Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-green-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Score Your Next Big Win?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's build football games that unite fans worldwide
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
