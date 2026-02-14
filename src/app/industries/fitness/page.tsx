import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDumbbell, 
  faRunning, 
  faHeartbeat, 
  faAppleAlt, 
  faMobileAlt, 
  faTrophy, 
  faCalendarCheck, 
  faUsers, 
  faChartLine, 
  faVideo, 
  faWeightScale, 
  faBolt,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBrain,
  faFire
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Fitness & Wellness App Development | Gym & Workout Management",
  description: "Build world-class fitness apps with workout tracking, nutrition planning, virtual training, and gym management. 5M+ active users, 50M+ workouts completed.",
  keywords: "fitness app development, gym management software, workout tracking, nutrition app, virtual training platform, fitness technology, wearable integration"
};

export default function FitnessIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-lime-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-400/20 to-lime-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-lime-400/20 to-green-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-lime-600/10 to-emerald-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-green-500/20 to-lime-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-600/20 to-lime-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Fitness Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Active</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50M+</div>
                        <div className="text-sm text-white/70">Workouts</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">5M+</div>
                        <div className="text-sm text-white/70">Users</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">200M+</div>
                        <div className="text-sm text-white/70">Calories</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">90%</div>
                        <div className="text-sm text-white/70">Retention</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faDumbbell, label: "Strength", color: "from-green-400 to-lime-500" },
                      { icon: faRunning, label: "Cardio", color: "from-blue-400 to-cyan-500" },
                      { icon: faTrophy, label: "Goals", color: "from-yellow-400 to-orange-500" },
                      { icon: faAppleAlt, label: "Nutrition", color: "from-red-400 to-pink-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Recent Activity</div>
                    <div className="space-y-2">
                      {[
                        { workout: 'Full Body HIIT', calories: '450 kcal', duration: '45 min' },
                        { workout: 'Upper Body Strength', calories: '320 kcal', duration: '60 min' },
                        { workout: 'Morning Run', calories: '380 kcal', duration: '30 min' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.workout}</div>
                            <div className="text-xs text-white/60">{item.calories} · {item.duration}</div>
                          </div>
                          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-white/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faHeartbeat} className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faFire} className="h-8 w-8 text-orange-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 dark:border-green-800 dark:bg-green-900/30">
                <FontAwesomeIcon icon={faDumbbell} className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  Fitness & Wellness
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Fitness Apps That
                <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent"> Transform Lives</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Comprehensive fitness platforms with workout tracking, nutrition planning, virtual training, and gym management. Motivate 5M+ users to complete 50M+ workouts.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">50M+</div>
                  <div className="text-sm text-body-color">Workouts</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">5M+</div>
                  <div className="text-sm text-body-color">Users</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">200M+</div>
                  <div className="text-sm text-body-color">Calories</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">90%</div>
                  <div className="text-sm text-body-color">Retention</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-lime-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Start Building</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-600 transition-all hover:bg-green-50 dark:hover:bg-green-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Wearable Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">AI Workouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Nutrition Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-lime-50/30 to-emerald-50/50 dark:from-green-950/20 dark:via-lime-950/10 dark:to-emerald-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete Fitness Solutions</h2>
            <p className="text-lg text-body-color">From workout tracking to gym management – comprehensive fitness technology</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faDumbbell,
                title: 'Workout Tracking & Plans',
                description: 'Custom workout programs, exercise libraries, set/rep tracking, progress photos, body measurements, and achievement milestones.',
                gradient: 'from-green-400 to-lime-500'
              },
              {
                icon: faAppleAlt,
                title: 'Nutrition & Meal Planning',
                description: 'Calorie counting, macro tracking, meal plans, barcode scanning, recipe database, and dietary restriction support.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faVideo,
                title: 'Virtual Training Platforms',
                description: 'Live classes, on-demand videos, personal training, zoom integration, exercise demonstrations, and form feedback.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faCalendarCheck,
                title: 'Gym Management Systems',
                description: 'Membership management, class scheduling, billing automation, attendance tracking, access control, and trainer assignments.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faUsers,
                title: 'Social Fitness Communities',
                description: 'Connect with friends, join challenges, share progress, create groups, leaderboards, and motivational feeds.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faHeartbeat,
                title: 'Wearable Device Integration',
                description: 'Sync with Fitbit, Apple Watch, Garmin, Whoop for heart rate, steps, calories, sleep, and activity data.',
                gradient: 'from-pink-400 to-red-500'
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise Fitness Technology Stack</h2>
            <p className="text-lg text-body-color">Built on proven platforms with wearable integration and AI capabilities</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-lime-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Mobile & Wearables</h3>
              <ul className="space-y-3">
                {['React Native & Flutter', 'Apple HealthKit', 'Google Fit API', 'Fitbit SDK', 'Garmin Connect', 'Offline-First Apps'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">AI & Analytics</h3>
              <ul className="space-y-3">
                {['TensorFlow/PyTorch', 'Personalized Workouts', 'Form Analysis', 'Nutrition Recommendations', 'Progress Predictions', 'ML-Powered Insights'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faVideo} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Backend & Video</h3>
              <ul className="space-y-3">
                {['Node.js & Python', 'MongoDB & PostgreSQL', 'WebRTC Streaming', 'AWS Cloud', 'Firebase Push', 'Stripe Subscriptions'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 via-green-50/30 to-emerald-50/50 dark:from-lime-950/20 dark:via-green-950/10 dark:to-emerald-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Fitness Brands Choose Us</h2>
            <p className="text-lg text-body-color">Empowering 5M+ users to complete 50M+ workouts with 90% retention</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBolt, title: 'Engaging Experience', description: 'Gamified workouts, challenges, streaks, achievements, and social features that keep users coming back daily.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faShieldHalved, title: 'Secure & Private', description: 'HIPAA-ready health data encryption, privacy controls, and secure wearable device integration.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faBrain, title: 'Smart Personalization', description: 'AI-powered workout recommendations, adaptive difficulty, personalized nutrition plans, and form analysis.', gradient: 'from-purple-400 to-pink-500' },
              { icon: faHeartbeat, title: 'Wearable Integration', description: 'Seamless sync with Fitbit, Apple Watch, Garmin, Whoop for real-time heart rate and activity data.', gradient: 'from-red-400 to-pink-500' },
              { icon: faUsers, title: 'Community Building', description: 'Social feeds, friend challenges, group workouts, leaderboards, and motivational support networks.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faChartLine, title: 'Progress Tracking', description: 'Comprehensive analytics with body metrics, workout history, nutrition logs, and goal achievement tracking.', gradient: 'from-indigo-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-lime-600 to-emerald-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Transform Fitness?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 5M+ active users and 10K+ fitness professionals. Build platforms that motivate workouts, track progress, and deliver results.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl">
                <span>Start Your Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                <FontAwesomeIcon icon={faEye} />
                <span>View Portfolio</span>
              </Link>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">50M+</div>
                <div className="text-white/80">Workouts Completed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">5M+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">90%</div>
                <div className="text-white/80">User Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
