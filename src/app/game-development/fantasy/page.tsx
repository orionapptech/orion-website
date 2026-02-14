import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUsers, faCoins, faChartLine, faShieldAlt, faMobileAlt, faServer, faCrown, faFire, faGem, faBaseball, faFootball } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Fantasy Sports Platform Development | Dream11 Clone Solutions",
  description:
    "Build engaging fantasy sports platforms for cricket, football, basketball with real-time scoring, contests, and prize pools.",
};

const features = [
  {
    icon: faUsers,
    title: "Multi-Sport Support",
    description: "Cricket, Football, Basketball, Kabaddi, Hockey with sport-specific rules and scoring.",
  },
  {
    icon: faTrophy,
    title: "Contest Management",
    description: "Create contests, entry fees, prize distribution, multiple contest types, and mega contests.",
  },
  {
    icon: faCoins,
    title: "Team Building Engine",
    description: "Player selection, salary cap, captain/vice-captain, team creation with points preview.",
  },
  {
    icon: faChartLine,
    title: "Live Match Updates",
    description: "Real-time scores, player points, leaderboard updates, and match commentary integration.",
  },
  {
    icon: faShieldAlt,
    title: "Secure Payments",
    description: "Wallet system, instant deposits, withdrawals, bonus management, and referral rewards.",
  },
  {
    icon: faServer,
    title: "API Integration",
    description: "Sports data APIs, real-time match feeds, player stats, and automated point calculation.",
  },
];

const gameFeatures = [
  { icon: faCrown, text: "Private Leagues" },
  { icon: faFire, text: "Live Contests" },
  { icon: faGem, text: "Guaranteed Prizes" },
  { icon: faMobileAlt, text: "Mobile Apps" },
  { icon: faBaseball, text: "Multiple Sports" },
  { icon: faChartLine, text: "Player Analytics" },
];

const technologies = [
  "React Native",
  "Flutter",
  "Node.js",
  "Socket.io",
  "MongoDB",
  "Redis",
  "AWS",
  "Sports APIs",
  "Razorpay",
  "Firebase",
];

export default function FantasyGame() {
  return (
    <>
      <Breadcrumb
        pageName="Fantasy Sports Development"
        description="Build the next big fantasy sports platform like Dream11 or FanDuel"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Fantasy Sports That <span className="gradient-text">Thrill Fans</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-body-color sm:text-xl">
                  Create engaging fantasy sports platforms where fans become team managers,
                  compete in contests, win cash prizes, and experience their favorite sports like never before.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-opacity-90 animate-pulse-glow">
                    Build Your Platform
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
                  <FontAwesomeIcon icon={faTrophy} className="mx-auto h-64 w-64 text-primary opacity-20" />
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
              Complete Fantasy Sports Platform
            </h2>
            <p className="text-lg text-body-color">Everything you need for a successful fantasy sports business</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-effect hover-lift animate-scale-in rounded-2xl p-8 transition-all duration-300 dark:glass-card-dark"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white transition group-hover:scale-110 group-hover:rotate-6">
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="text-body-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Platform Features</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="glass-card flex items-center gap-4 rounded-xl p-6 dark:glass-card-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
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
                  className="glass-effect rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-6 py-3 font-medium text-black transition hover:scale-105 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 pb-[120px] pt-[120px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ top: "10%", left: "10%" }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-white blur-3xl" style={{ bottom: "10%", right: "10%" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to Build the Next Fantasy Sports Giant?</h2>
            <p className="mb-10 text-xl text-white/90">
              Let's create platforms that engage millions of sports fans
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-emerald-600 transition hover:bg-gray-100 hover:scale-105">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
