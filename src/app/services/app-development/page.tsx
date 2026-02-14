import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faRocket,
  faShieldAlt,
  faBolt,
  faUsers,
  faChartLine,
  faCheckCircle,
  faBell,
  faDownload,
  faCloud,
  faLayerGroup,
  faDatabase,
  faPalette,
  faServer,
  faCode,
  faTrophy,
  faHeart,
  faLightbulb,
  faClock,
  faHandshake,
  faStar,
  faCogs,
  faLock,
  faSearch,
  faGlobe,
  faShoppingCart,
  faTruck,
  faWallet,
  faBuilding,
  faGamepad,
  faFire,
  faKey,
  faBug,
  faCodeBranch,
  faPencilRuler,
  faHeadset,
  faArrowRight,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faAndroid,
  faReact,
  faNodeJs,
  faAws,
  faDocker
} from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS & Android | Orion App Tech",
  description:
    "Transform your ideas into powerful mobile experiences. Native iOS, Android, and cross-platform app development that users love and businesses depend on.",
};

export default function AppDevelopment() {
  return (
    <>
      <Breadcrumb
        pageName="Mobile App Development"
        description="From concept to App Store – we build mobile experiences that users can't put down."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-[55%]">
              <div className="animate-fade-in-up">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2 h-4 w-4" />
                  Mobile App Development Excellence
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                  Apps That Don't Just Function –
                  <span className="text-primary"> They Delight</span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  In a world where the average person spends 4+ hours daily on mobile apps, your app needs 
                  to be more than functional – it needs to be irresistible. We craft mobile experiences that 
                  capture attention, drive engagement, and keep users coming back for more.
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Whether you need a sleek iOS app, a powerful Android application, or a cross-platform solution 
                  that works flawlessly everywhere – our team combines technical excellence with intuitive design 
                  to build apps that users love and businesses depend on.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="hover-lift inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
                  >
                    <FontAwesomeIcon icon={faRocket} className="h-5 w-5" />
                    Start Your App Project
                  </Link>
                  <Link
                    href="/contact"
                    className="glass-effect hover-lift inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary duration-300 hover:bg-primary hover:text-white"
                  >
                    <FontAwesomeIcon icon={faTrophy} className="h-5 w-5" />
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="animate-scale-in grid grid-cols-2 gap-4">
                {[
                  { icon: faMobileAlt, value: "40+", label: "Apps Launched", color: "from-blue-500 to-blue-600" },
                  { icon: faDownload, value: "5M+", label: "Downloads", color: "from-purple-500 to-purple-600" },
                  { icon: faUsers, value: "4.8", label: "Avg. Rating", color: "from-green-500 to-green-600" },
                  { icon: faChartLine, value: "85%", label: "Retention Rate", color: "from-orange-500 to-orange-600" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card hover-lift group rounded-2xl p-6 text-center dark:glass-card-dark"
                  >
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                      <FontAwesomeIcon icon={stat.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 text-3xl font-bold text-primary">{stat.value}</h3>
                    <p className="text-xs font-medium text-body-color dark:text-body-color-dark">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:via-transparent dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              What We Build
            </h2>
            <p className="text-lg text-body-color">
              From consumer apps to enterprise solutions, we craft mobile experiences that users love and businesses rely on
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Consumer Apps */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faUsers} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Consumer Apps</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Engaging B2C applications with intuitive interfaces, social features, and viral growth mechanics that keep users coming back
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500" />
                  Social networking & communities
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500" />
                  Content streaming & media
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500" />
                  Dating & lifestyle apps
                </li>
              </ul>
            </div>

            {/* E-Commerce Apps */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faShoppingCart} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">E-Commerce Apps</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Feature-rich shopping experiences with payment integration, inventory management, and personalized recommendations
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  Multi-vendor marketplaces
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  One-tap checkout & wallet integration
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  AR product visualization
                </li>
              </ul>
            </div>

            {/* On-Demand Services */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faTruck} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">On-Demand Services</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Location-based service platforms connecting providers with customers through real-time matching and GPS tracking
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  Ride-hailing & delivery apps
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  Home services & booking
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  Healthcare & telemedicine
                </li>
              </ul>
            </div>

            {/* Fintech Apps */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faWallet} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Fintech Apps</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Secure financial platforms with encryption, biometric auth, and compliance features for banking, investing, and payments
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                  Digital wallets & payment gateways
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                  Investment & trading platforms
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                  Crypto & blockchain apps
                </li>
              </ul>
            </div>

            {/* Enterprise Apps */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faBuilding} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Enterprise Apps</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Business-grade mobile solutions with offline capabilities, MDM integration, and enterprise security standards
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                  Field service & workforce management
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                  CRM & sales enablement
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                  Internal communication tools
                </li>
              </ul>
            </div>

            {/* Gaming Apps */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faGamepad} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Gaming Apps</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Immersive mobile games with real-time multiplayer, in-app purchases, leaderboards, and cloud save synchronization
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                  Casual & hyper-casual games
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                  Multiplayer & esports platforms
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                  AR/VR gaming experiences
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 dark:from-gray-900 dark:to-black lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Our Technology Stack
            </h2>
            <p className="text-lg text-body-color">
              We use cutting-edge mobile technologies to build fast, scalable, and secure applications
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Mobile Frameworks */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <FontAwesomeIcon icon={faMobileAlt} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Mobile Frameworks</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faReact, name: 'React Native', color: 'from-cyan-400 to-blue-500' },
                  { icon: faAndroid, name: 'Kotlin', color: 'from-green-400 to-emerald-500' },
                  { icon: faApple, name: 'Swift', color: 'from-gray-400 to-slate-500' },
                  { icon: faLayerGroup, name: 'Flutter', color: 'from-blue-400 to-sky-500' },
                  { icon: faCode, name: 'Expo', color: 'from-purple-400 to-indigo-500' },
                  { icon: faMobileAlt, name: 'Ionic', color: 'from-blue-500 to-indigo-600' },
                ].map((tech, idx) => (
                  <div key={idx} className="glass-effect group rounded-xl p-4 text-center transition-all hover:-translate-y-1">
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className={`mb-3 h-8 w-8 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                      style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
                    />
                    <p className="text-sm font-medium text-black dark:text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <FontAwesomeIcon icon={faServer} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Backend & APIs</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faNodeJs, name: 'Node.js', color: 'from-green-400 to-emerald-500' },
                  { icon: faDatabase, name: 'MongoDB', color: 'from-green-500 to-teal-500' },
                  { icon: faDatabase, name: 'PostgreSQL', color: 'from-blue-500 to-indigo-500' },
                  { icon: faServer, name: 'GraphQL', color: 'from-pink-500 to-rose-500' },
                  { icon: faFire, name: 'Firebase', color: 'from-yellow-400 to-orange-500' },
                  { icon: faCode, name: 'REST API', color: 'from-purple-400 to-violet-500' },
                ].map((tech, idx) => (
                  <div key={idx} className="glass-effect group rounded-xl p-4 text-center transition-all hover:-translate-y-1">
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className={`mb-3 h-8 w-8 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                      style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
                    />
                    <p className="text-sm font-medium text-black dark:text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <FontAwesomeIcon icon={faAws} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Cloud & Infrastructure</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faAws, name: 'AWS', color: 'from-orange-400 to-amber-500' },
                  { icon: faCloud, name: 'Google Cloud', color: 'from-blue-400 to-sky-500' },
                  { icon: faCloud, name: 'Azure', color: 'from-blue-500 to-indigo-500' },
                  { icon: faDocker, name: 'Docker', color: 'from-blue-400 to-cyan-500' },
                  { icon: faRocket, name: 'CI/CD', color: 'from-purple-400 to-pink-500' },
                  { icon: faChartLine, name: 'Analytics', color: 'from-green-400 to-teal-500' },
                ].map((tech, idx) => (
                  <div key={idx} className="glass-effect group rounded-xl p-4 text-center transition-all hover:-translate-y-1">
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className={`mb-3 h-8 w-8 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                      style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
                    />
                    <p className="text-sm font-medium text-black dark:text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Quality */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
                  <FontAwesomeIcon icon={faShieldAlt} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Security & Quality</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faShieldAlt, name: 'OAuth 2.0', color: 'from-red-400 to-rose-500' },
                  { icon: faLock, name: 'Encryption', color: 'from-yellow-400 to-orange-500' },
                  { icon: faKey, name: 'Biometric', color: 'from-purple-400 to-violet-500' },
                  { icon: faBug, name: 'Testing', color: 'from-green-400 to-emerald-500' },
                  { icon: faCodeBranch, name: 'Git', color: 'from-orange-400 to-red-500' },
                  { icon: faCheckCircle, name: 'Quality Assurance', color: 'from-blue-400 to-indigo-500' },
                ].map((tech, idx) => (
                  <div key={idx} className="glass-effect group rounded-xl p-4 text-center transition-all hover:-translate-y-1">
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className={`mb-3 h-8 w-8 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                      style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
                    />
                    <p className="text-sm font-medium text-black dark:text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Our Development Process
            </h2>
            <p className="text-lg text-body-color">
              A proven 6-step methodology that transforms your vision into a market-ready mobile app
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: faLightbulb,
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We start by understanding your business goals, target users, and competitive landscape. Through workshops and research, we define the app\'s core features, user journeys, and technical requirements.',
                gradient: 'from-amber-400 to-orange-500'
              },
              {
                icon: faPencilRuler,
                step: '02',
                title: 'UX/UI Design',
                description: 'Our designers craft intuitive interfaces and delightful user experiences. We create wireframes, interactive prototypes, and pixel-perfect designs that balance aesthetics with usability.',
                gradient: 'from-pink-400 to-rose-500'
              },
              {
                icon: faCode,
                step: '03',
                title: 'Development',
                description: 'Our expert developers bring designs to life using cutting-edge technologies. We follow agile sprints with regular code reviews, automated testing, and continuous integration.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faBug,
                step: '04',
                title: 'Quality Assurance',
                description: 'Rigorous testing across devices, OS versions, and scenarios. We perform functional testing, performance optimization, security audits, and user acceptance testing.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faRocket,
                step: '05',
                title: 'Launch & Deployment',
                description: 'We handle App Store and Play Store submissions, including metadata optimization, screenshots, and compliance. We ensure a smooth launch with monitoring and support.',
                gradient: 'from-purple-400 to-violet-500'
              },
              {
                icon: faChartLine,
                step: '06',
                title: 'Growth & Maintenance',
                description: 'Post-launch, we monitor analytics, gather user feedback, and iterate. We provide ongoing maintenance, feature updates, performance optimization, and scaling support.',
                gradient: 'from-red-400 to-pink-500'
              },
            ].map((process, idx) => (
              <div key={idx} className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${process.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`} />
                <div className="relative">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${process.gradient}`}>
                    <FontAwesomeIcon icon={process.icon} className="h-8 w-8 text-white" />
                  </div>
                  <div className={`mb-4 inline-block rounded-full bg-gradient-to-r ${process.gradient} px-4 py-1 text-sm font-bold text-white`}>
                    {process.step}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{process.title}</h3>
                  <p className="text-body-color leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Choose Orion App Tech
            </h2>
            <p className="text-lg text-body-color">
              We're not just developers – we're your partners in creating mobile experiences that users love
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faTrophy,
                title: '40+ Apps Launched',
                description: 'From startups to enterprises, we\'ve delivered apps that collectively reached 5M+ downloads and generated millions in revenue.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: faStar,
                title: '4.8 Average Rating',
                description: 'Our apps consistently receive stellar ratings thanks to our focus on user experience, performance, and reliability.',
                gradient: 'from-blue-400 to-indigo-500'
              },
              {
                icon: faUsers,
                title: 'User-First Approach',
                description: 'Every design decision is backed by user research. We create apps that feel natural, intuitive, and delightful to use.',
                gradient: 'from-pink-400 to-rose-500'
              },
              {
                icon: faRocket,
                title: 'Lightning-Fast Development',
                description: 'Our agile process and experienced team mean faster time-to-market without compromising on quality or features.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faShieldAlt,
                title: 'Enterprise-Grade Security',
                description: 'We implement industry-standard security practices, encryption, and compliance measures to protect your users\' data.',
                gradient: 'from-red-400 to-pink-500'
              },
              {
                icon: faHeadset,
                title: 'Lifetime Support',
                description: 'We don\'t disappear after launch. Get ongoing maintenance, updates, and support to keep your app thriving.',
                gradient: 'from-purple-400 to-violet-500'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Your mobile app should be more than just functional – it should be an experience that users love, recommend, and can't live without. Let's create that together.
            </p>
            <p className="mb-12 text-lg text-white/80">
              See our full portfolio, connect with our team, and discuss your project with experts who've launched 40+ successful apps.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your App Project</span>
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
                <div className="mb-3 text-3xl font-bold text-white">8 Hours</div>
                <div className="text-white/80">Average Response Time</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">3 Offices</div>
                <div className="text-white/80">USA • India • Netherlands</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">100% Satisfaction</div>
                <div className="text-white/80">Client Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
