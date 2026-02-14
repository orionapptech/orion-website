import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAppleAlt, 
  faHeartbeat, 
  faRunning, 
  faBed, 
  faWater, 
  faBrain, 
  faLeaf, 
  faPills, 
  faChartLine, 
  faMobileAlt, 
  faUtensils, 
  faYinYang,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faSpa
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Health & Nutrition App Development | Wellness Platform Solutions",
  description: "Build comprehensive health apps with nutrition tracking, diet planning, wellness monitoring, and personalized health insights. 10M+ meals logged, 3M+ users.",
  keywords: "health app development, nutrition tracking, wellness platform, diet planning app, health monitoring, nutrition software, wellness technology"
};

export default function HealthIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-400/20 to-green-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-green-400/20 to-lime-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-green-600/10 to-lime-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/20 to-green-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Health Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Tracking</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">10M+</div>
                        <div className="text-sm text-white/70">Meals Logged</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">3M+</div>
                        <div className="text-sm text-white/70">Users</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50M+</div>
                        <div className="text-sm text-white/70">Vitals Tracked</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">85%</div>
                        <div className="text-sm text-white/70">Goals Achieved</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faAppleAlt, label: "Nutrition", color: "from-red-400 to-orange-500" },
                      { icon: faHeartbeat, label: "Vitals", color: "from-pink-400 to-red-500" },
                      { icon: faBrain, label: "Wellness", color: "from-purple-400 to-pink-500" },
                      { icon: faBed, label: "Sleep", color: "from-indigo-400 to-blue-500" },
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
                    <div className="mb-2 text-sm font-semibold text-white/90">Today's Summary</div>
                    <div className="space-y-2">
                      {[
                        { metric: 'Calories', value: '1,850 kcal', target: '75% of goal' },
                        { metric: 'Water Intake', value: '6 glasses', target: '75% of goal' },
                        { metric: 'Sleep Quality', value: '8.2 hrs', target: 'Excellent' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.metric}</div>
                            <div className="text-xs text-white/60">{item.value} · {item.target}</div>
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
                  <FontAwesomeIcon icon={faAppleAlt} className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faLeaf} className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-800 dark:bg-emerald-900/30">
                <FontAwesomeIcon icon={faAppleAlt} className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  Health & Nutrition
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Health Apps That
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> Inspire Wellness</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Comprehensive health platforms with nutrition tracking, diet planning, wellness monitoring, and personalized insights. Empower 3M+ users to log 10M+ meals and achieve health goals.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">10M+</div>
                  <div className="text-sm text-body-color">Meals</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">3M+</div>
                  <div className="text-sm text-body-color">Users</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">50M+</div>
                  <div className="text-sm text-body-color">Vitals</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">85%</div>
                  <div className="text-sm text-body-color">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                  <span>Start Building</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border-2 border-emerald-600 px-8 py-4 text-lg font-semibold text-emerald-600 transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Barcode Scanning</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">AI Meal Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Wearable Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-lime-50/50 dark:from-emerald-950/20 dark:via-green-950/10 dark:to-lime-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Complete Health & Wellness Solutions</h2>
            <p className="text-lg text-body-color">From nutrition tracking to mental wellness – comprehensive health technology</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faAppleAlt,
                title: 'Nutrition Tracking & Logging',
                description: 'Barcode scanning, food database, meal logging, calorie counting, macro tracking, vitamin monitoring, and nutrition insights.',
                gradient: 'from-red-400 to-orange-500'
              },
              {
                icon: faUtensils,
                title: 'Personalized Diet Planning',
                description: 'Custom meal plans, dietary restrictions, allergies, weight goals, recipe recommendations, and grocery lists.',
                gradient: 'from-orange-400 to-yellow-500'
              },
              {
                icon: faHeartbeat,
                title: 'Health Monitoring Systems',
                description: 'Track blood pressure, blood sugar, heart rate, medications, symptoms, medical appointments, and health trends.',
                gradient: 'from-pink-400 to-red-500'
              },
              {
                icon: faBrain,
                title: 'Mental Wellness & Mindfulness',
                description: 'Meditation guides, stress tracking, mood journals, breathing exercises, therapy connections, and mental health resources.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faBed,
                title: 'Sleep Tracking & Analysis',
                description: 'Sleep duration, quality monitoring, sleep stages, smart alarms, sleep debt tracking, and improvement recommendations.',
                gradient: 'from-indigo-400 to-blue-500'
              },
              {
                icon: faWater,
                title: 'Hydration & Habit Tracking',
                description: 'Water intake reminders, habit formation, streaks, daily routines, wellness challenges, and achievement systems.',
                gradient: 'from-blue-400 to-cyan-500'
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
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Enterprise Health Technology Stack</h2>
            <p className="text-lg text-body-color">Built on secure platforms with nutrition APIs and AI-powered insights</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                <FontAwesomeIcon icon={faAppleAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Nutrition & Food Data</h3>
              <ul className="space-y-3">
                {['Nutritionix API', 'USDA Food Database', 'Barcode Scanning', 'Recipe Analysis', 'Macro Calculators', 'Allergen Detection'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faHeartbeat} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Health & Wearables</h3>
              <ul className="space-y-3">
                {['Apple HealthKit', 'Google Fit', 'Fitbit Integration', 'Vital Signs Monitoring', 'FHIR Standards', 'HIPAA Compliance'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Platform & AI</h3>
              <ul className="space-y-3">
                {['React Native Apps', 'Node.js & Python', 'TensorFlow AI', 'PostgreSQL/MongoDB', 'AWS Cloud', 'Push Notifications'].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-lime-50/50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-lime-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">Why Health Brands Choose Us</h2>
            <p className="text-lg text-body-color">Empowering 3M+ users to log 10M+ meals with 85% goal achievement rate</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: faBolt, title: 'Easy Tracking', description: 'Barcode scanning, voice logging, photo recognition, and quick meal templates that make nutrition tracking effortless.', gradient: 'from-yellow-400 to-orange-500' },
              { icon: faShieldHalved, title: 'Privacy & Security', description: 'HIPAA-compliant data encryption, privacy controls, secure health records, and medical-grade data protection.', gradient: 'from-blue-400 to-cyan-500' },
              { icon: faBrain, title: 'AI Personalization', description: 'Smart meal recommendations, adaptive diet plans, nutrition insights, and personalized health coaching powered by AI.', gradient: 'from-purple-400 to-pink-500' },
              { icon: faHeartbeat, title: 'Holistic Health', description: 'Track nutrition, fitness, sleep, stress, hydration, and mental wellness – complete health in one platform.', gradient: 'from-red-400 to-pink-500' },
              { icon: faSpa, title: 'Wellness Focus', description: 'Beyond calories – mindfulness, stress management, sleep optimization, and sustainable lifestyle changes.', gradient: 'from-green-400 to-emerald-500' },
              { icon: faChartLine, title: 'Actionable Insights', description: 'Comprehensive dashboards with health trends, goal tracking, progress reports, and data-driven recommendations.', gradient: 'from-indigo-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-lime-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Transform Health & Wellness?</h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 3M+ users tracking nutrition, wellness, and health goals. Build platforms that inspire healthier lifestyles with data-driven insights.
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
                <div className="mb-3 text-3xl font-bold text-white">10M+</div>
                <div className="text-white/80">Meals Logged</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">3M+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">85%</div>
                <div className="text-white/80">Goal Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
