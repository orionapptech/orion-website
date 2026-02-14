import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, 
  faBook, 
  faChalkboardTeacher, 
  faVideo, 
  faCertificate, 
  faUsers, 
  faClipboardCheck, 
  faBrain, 
  faLaptopCode, 
  faComments, 
  faAward, 
  faChartLine,
  faCheckCircle,
  faArrowRight,
  faEye,
  faShieldHalved,
  faBolt,
  faGlobe,
  faMobileAlt,
  faRobot
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Education Software Development | LMS & E-Learning Solutions",
  description: "Build world-class learning platforms with LMS, virtual classrooms, student management, and AI tutoring. 5M+ learners empowered.",
  keywords: "education software, LMS, learning management system, e-learning platform, virtual classroom, student information system, online education, EdTech"
};

export default function EducationIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: Learning Dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-indigo-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Learning Analytics */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Learning Platform</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">5M+</div>
                        <div className="text-sm text-white/70">Learners</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50K+</div>
                        <div className="text-sm text-white/70">Courses</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">95%</div>
                        <div className="text-sm text-white/70">Satisfaction</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">24/7</div>
                        <div className="text-sm text-white/70">Access</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faGraduationCap, label: "Courses", color: "from-purple-400 to-pink-500" },
                      { icon: faVideo, label: "Live Class", color: "from-blue-400 to-cyan-500" },
                      { icon: faBrain, label: "AI Tutor", color: "from-green-400 to-emerald-500" },
                      { icon: faCertificate, label: "Certs", color: "from-orange-400 to-red-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Active Courses */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Top Courses</div>
                    <div className="space-y-2">
                      {[
                        { course: 'Full Stack Development', students: '12K', progress: '85%' },
                        { course: 'Data Science & AI', students: '8K', progress: '92%' },
                        { course: 'Mobile App Development', students: '6.5K', progress: '78%' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{item.course}</div>
                            <div className="text-xs text-white/60">{item.students} students · {item.progress}</div>
                          </div>
                          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-white/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faBook} className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faGraduationCap} className="h-8 w-8 text-pink-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-900/30">
                <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  Education Solutions
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                EdTech That
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Transforms Learning</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                Comprehensive learning platforms with LMS, virtual classrooms, student management, and AI tutoring. Empower 5M+ learners with engaging educational experiences.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">5M+</div>
                  <div className="text-sm text-body-color">Learners</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">50K+</div>
                  <div className="text-sm text-body-color">Courses</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">95%</div>
                  <div className="text-sm text-body-color">Satisfaction</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">24/7</div>
                  <div className="text-sm text-body-color">Access</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Build Your Platform</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-purple-600 px-8 py-4 text-lg font-semibold text-purple-600 transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">SCORM Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">GDPR Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">Mobile-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Complete Education Solutions
            </h2>
            <p className="text-lg text-body-color">
              From LMS to virtual classrooms – comprehensive technology for modern learning
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faGraduationCap,
                title: 'Learning Management Systems',
                description: 'Full-featured LMS with course management, assignments, quizzes, grading, certificates, and progress tracking analytics.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faVideo,
                title: 'Virtual Classrooms',
                description: 'Interactive live classes with video conferencing, screen sharing, whiteboard, breakout rooms, and recording.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faUsers,
                title: 'Student Information Systems',
                description: 'Complete SIS with admissions, attendance, grades, schedules, parent portals, and communication tools.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faBook,
                title: 'E-Learning Content Platforms',
                description: 'Create, distribute, monetize educational content with SCORM, interactive modules, and multimedia support.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faBrain,
                title: 'AI-Powered Tutoring',
                description: 'Personalized learning paths with adaptive assessments, intelligent recommendations, and automated grading.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faCertificate,
                title: 'Assessment & Certification',
                description: 'Online exams, auto-grading, anti-cheating proctoring, and blockchain-verified digital certificates.',
                gradient: 'from-yellow-400 to-amber-500'
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
            ))}</div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Modern EdTech Stack
            </h2>
            <p className="text-lg text-body-color">
              Built on cutting-edge technologies with AI, video streaming, and scalable infrastructure
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faVideo} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Video & Streaming</h3>
              <ul className="space-y-3">
                {[
                  'WebRTC Live Streaming',
                  'Zoom SDK Integration',
                  'Video Recording & Replay',
                  'Interactive Whiteboard',
                  'Screen Sharing',
                  'Breakout Rooms'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">AI & Learning</h3>
              <ul className="space-y-3">
                {[
                  'TensorFlow AI Models',
                  'Adaptive Learning Paths',
                  'Auto-Grading Systems',
                  'Content Recommendations',
                  'Plagiarism Detection',
                  'Predictive Analytics'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Platform & Mobile</h3>
              <ul className="space-y-3">
                {[
                  'React & Next.js',
                  'React Native Apps',
                  'Progressive Web Apps',
                  'SCORM Compliance',
                  'MongoDB & PostgreSQL',
                  'AWS/Azure Cloud'
                ].map((tech, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-blue-50/50 dark:from-pink-950/20 dark:via-purple-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Leading Institutions Choose Us
            </h2>
            <p className="text-lg text-body-color">
              Empowering 5M+ learners across 50K+ courses with 95% satisfaction
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faBolt,
                title: 'Engaging Experiences',
                description: 'Gamification, badges, leaderboards, interactive content, and social learning that boost engagement by 3x.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faShieldHalved,
                title: 'Enterprise Security',
                description: 'GDPR compliance, SSL encryption, role-based access, secure exams, and data protection.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faBrain,
                title: 'AI-Powered Learning',
                description: 'Personalized paths, adaptive assessments, smart recommendations, and automated insights.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faGlobe,
                title: 'Global Accessibility',
                description: 'Multi-language support, mobile apps, offline mode, and accessibility standards (WCAG 2.1).',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faUsers,
                title: 'Collaborative Learning',
                description: 'Discussion forums, group projects, peer reviews, live Q&A, and community building.',
                gradient: 'from-red-400 to-pink-500'
              },
              {
                icon: faChartLine,
                title: 'Advanced Analytics',
                description: 'Real-time dashboards for enrollments, completion rates, engagement, and learning outcomes.',
                gradient: 'from-indigo-400 to-blue-500'
              },
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Transform Education?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 5M+ learners and educators. Build platforms with LMS, virtual classrooms, AI tutoring, and gamification.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <FontAwesomeIcon icon={faEye} />
                <span>View Portfolio</span>
              </Link>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">5M+</div>
                <div className="text-white/80">Active Learners</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80">Courses Available</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">95%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
