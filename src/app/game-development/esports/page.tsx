import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faTrophy, faUsers, faChartLine, faVideo, faMobileAlt, faServer, faCrown, faFire, faGem, faShieldAlt, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faTwitch as faTwitchBrand } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "E-Sports Platform Development | Gaming Tournament Solutions",
  description:
    "Build comprehensive e-sports platforms with tournament management, live streaming, team features, and prize pools.",
};

const features = [
  {
    icon: faGamepad,
    title: "Multi-Game Support",
    description: "Support for MOBA, FPS, Battle Royale, Fighting games with game-specific features and rules.",
  },
  {
    icon: faTrophy,
    title: "Tournament Management",
    description: "Create brackets, schedules, match reporting, automated seeding, and championship tracking.",
  },
  {
    icon: faUsers,
    title: "Team & Clan System",
    description: "Create teams, recruit players, team chat, practice matches, and team statistics.",
  },
  {
    icon: faVideo,
    title: "Live Streaming Integration",
    description: "Stream matches, spectator mode, replays, commentary, and integration with Twitch/YouTube.",
  },
  {
    icon: faShieldAlt,
    title: "Anti-Cheat System",
    description: "Advanced cheat detection, fair play monitoring, player reporting, and automated bans.",
  },
  {
    icon: faCoins,
    title: "Prize Pool Management",
    description: "Crowdfunding, sponsor management, automated payouts, and transparent prize distribution.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "Ranked Leaderboards" },
  { icon: faFire, text: "Live Matches" },
  { icon: faGem, text: "Achievements & Badges" },
  { icon: faMobileAlt, text: "Mobile App" },
  { icon: faServer, text: "Custom Servers" },
  { icon: faChartLine, text: "Player Analytics" },
];

const technologies = [
  "Unity",
  "Unreal Engine",
  "Node.js",
  "Socket.io",
  "MongoDB",
  "Redis",
  "AWS",
  "WebRTC",
  "React",
  "Docker",
];

export default function ESportsGame() {
  return (
    <>
      <Breadcrumb
        pageName="E-Sports Platform Development"
        description="Build the next big e-sports platform for competitive gaming and tournaments"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  E-Sports Platforms That <span className="gradient-text">Champion Success</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Create competitive gaming platforms with tournament systems, team management, live streaming,
                  and everything needed for the next generation of e-sports.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-opacity-90 animate-pulse-glow">
                    Launch Your Platform
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
                  <FontAwesomeIcon icon={faGamepad} className="mx-auto h-64 w-64 text-primary opacity-20" />
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
              Complete E-Sports Solutions
            </h2>
            <p className="text-lg text-body-color">Everything you need for competitive gaming platforms</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Platform Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Build the Next E-Sports Empire?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's create competitive gaming platforms that define the future of e-sports
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-purple-600 transition hover:bg-gray-100 hover:scale-105">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
