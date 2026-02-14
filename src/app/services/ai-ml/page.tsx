import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faRobot,
  faChartLine,
  faEye,
  faComments,
  faDatabase,
  faLightbulb,
  faShieldAlt,
  faCheckCircle,
  faUsers,
  faRocket,
  faTrophy,
  faStar,
  faHeadset,
  faCode,
  faServer,
  faCloud,
  faLock,
  faKey,
  faBug,
  faCodeBranch,
  faPencilRuler,
  faMicrochip,
  faCogs,
  faSearch,
  faCamera,
  faLanguage,
  faShoppingBag,
  faArrowRight,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faAws,
  faDocker
} from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "AI & ML Services | Orion App Tech - Machine Learning Solutions",
  description: "Transform your business with custom AI & Machine Learning solutions. NLP, Computer Vision, Predictive Analytics, and more.",
};

export default function AIMLServices() {
  return (
    <>
      <Breadcrumb
        pageName="AI & Machine Learning Services"
        description="Intelligent automation and predictive analytics powered by cutting-edge AI"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20" />
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 opacity-20 blur-3xl" />
        
        <div className="container relative">
          <div className="flex flex-wrap items-center gap-8">
            {/* Left Content - 55% */}
            <div className="w-full lg:w-[55%]">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                Intelligence That <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Thinks Ahead</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-body-color md:text-xl">
                Transform raw data into actionable insights. Our AI & Machine Learning solutions don't just automate – they predict, adapt, and continuously improve. From natural language processing to computer vision, we build intelligent systems that give you a competitive edge.
              </p>
              <p className="mb-10 text-base text-body-color">
                Whether you need predictive analytics, intelligent automation, or custom ML models, our team of AI specialists delivers solutions that scale with your ambitions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Start AI Journey</span>
                  <FontAwesomeIcon icon={faRocket} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-purple-600/30 bg-white/50 px-8 py-4 text-lg font-semibold text-purple-600 backdrop-blur-sm transition-all hover:bg-purple-50 dark:bg-black/30 dark:text-purple-400"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>

            {/* Right Stats - 40% */}
            <div className="w-full lg:w-[40%]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: faBrain, value: '50+', label: 'AI Projects Delivered', color: 'from-purple-500 to-pink-600' },
                  { icon: faChartLine, value: '95%', label: 'Model Accuracy Rate', color: 'from-blue-500 to-cyan-600' },
                  { icon: faRobot, value: '10M+', label: 'Predictions Made', color: 'from-green-500 to-emerald-600' },
                  { icon: faTrophy, value: '98%', label: 'Client Satisfaction', color: 'from-amber-500 to-orange-600' },
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

      {/* What We Offer Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-purple-50/50 dark:from-gray-900 dark:via-black dark:to-purple-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              AI Solutions We Deliver
            </h2>
            <p className="text-lg text-body-color">
              From proof-of-concept to production-grade systems, we build AI solutions that solve real business problems
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* NLP Solutions */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faLanguage} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Natural Language Processing</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Intelligent chatbots, sentiment analysis, language translation, and text summarization that understand context and intent
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                  Conversational AI & chatbots
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                  Sentiment & emotion analysis
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
                  Document classification
                </li>
              </ul>
            </div>

            {/* Computer Vision */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faCamera} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Computer Vision</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Image recognition, object detection, facial recognition, and visual search capabilities for modern applications
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                  Object detection & tracking
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                  Facial recognition systems
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                  Quality inspection automation
                </li>
              </ul>
            </div>

            {/* Predictive Analytics */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faChartLine} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Predictive Analytics</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Forecast trends, customer behavior, demand, and business outcomes using advanced machine learning models
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  Sales & demand forecasting
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  Customer churn prediction
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                  Risk assessment models
                </li>
              </ul>
            </div>

            {/* Recommendation Systems */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faShoppingBag} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Recommendation Systems</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Personalized product, content, and service recommendations that boost engagement and conversions
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  E-commerce recommendations
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  Content personalization
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  Collaborative filtering
                </li>
              </ul>
            </div>

            {/* Intelligent Automation */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faRobot} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Intelligent Automation</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                AI-powered RPA that learns, adapts, and automates complex business processes with minimal human intervention
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500" />
                  Process automation
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500" />
                  Document processing
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500" />
                  Workflow optimization
                </li>
              </ul>
            </div>

            {/* Custom ML Models */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <FontAwesomeIcon icon={faBrain} className="mb-6 h-12 w-12 text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Custom ML Models</h3>
              <p className="mb-6 text-body-color leading-relaxed">
                Tailored machine learning models built from scratch for your unique business challenges and datasets
              </p>
              <ul className="space-y-3 text-sm text-body-color">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                  Deep learning architectures
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                  Model training & optimization
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                  Transfer learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Our AI/ML Technology Stack
            </h2>
            <p className="text-lg text-body-color">
              We leverage industry-leading frameworks and tools to build robust, scalable AI solutions
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* ML Frameworks */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">ML Frameworks</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faPython, name: 'TensorFlow', color: 'from-orange-400 to-amber-500' },
                  { icon: faPython, name: 'PyTorch', color: 'from-red-400 to-rose-500' },
                  { icon: faCode, name: 'Scikit-learn', color: 'from-blue-400 to-cyan-500' },
                  { icon: faBrain, name: 'Keras', color: 'from-red-500 to-pink-500' },
                  { icon: faRobot, name: 'OpenAI', color: 'from-green-400 to-emerald-500' },
                  { icon: faCode, name: 'Hugging Face', color: 'from-yellow-400 to-orange-500' },
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

            {/* Data & Processing */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <FontAwesomeIcon icon={faDatabase} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Data & Processing</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faPython, name: 'Pandas', color: 'from-blue-400 to-indigo-500' },
                  { icon: faPython, name: 'NumPy', color: 'from-cyan-400 to-blue-500' },
                  { icon: faChartLine, name: 'Matplotlib', color: 'from-orange-400 to-red-500' },
                  { icon: faDatabase, name: 'Apache Spark', color: 'from-amber-400 to-orange-500' },
                  { icon: faDatabase, name: 'PostgreSQL', color: 'from-blue-500 to-indigo-500' },
                  { icon: faDatabase, name: 'MongoDB', color: 'from-green-500 to-teal-500' },
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

            {/* Cloud & Deployment */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <FontAwesomeIcon icon={faCloud} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Cloud & Deployment</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faAws, name: 'AWS SageMaker', color: 'from-orange-400 to-amber-500' },
                  { icon: faCloud, name: 'Google Cloud AI', color: 'from-blue-400 to-sky-500' },
                  { icon: faCloud, name: 'Azure ML', color: 'from-blue-500 to-indigo-500' },
                  { icon: faDocker, name: 'Docker', color: 'from-blue-400 to-cyan-500' },
                  { icon: faServer, name: 'Kubernetes', color: 'from-indigo-400 to-purple-500' },
                  { icon: faRocket, name: 'MLflow', color: 'from-purple-400 to-pink-500' },
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

            {/* MLOps & Monitoring */}
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
                  <FontAwesomeIcon icon={faCogs} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">MLOps & Monitoring</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: faChartLine, name: 'Weights & Biases', color: 'from-yellow-400 to-orange-500' },
                  { icon: faCodeBranch, name: 'Git/DVC', color: 'from-orange-400 to-red-500' },
                  { icon: faRocket, name: 'CI/CD', color: 'from-purple-400 to-pink-500' },
                  { icon: faBug, name: 'Model Testing', color: 'from-green-400 to-emerald-500' },
                  { icon: faSearch, name: 'A/B Testing', color: 'from-blue-400 to-indigo-500' },
                  { icon: faCheckCircle, name: 'Quality Assurance', color: 'from-cyan-400 to-blue-500' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Our AI Development Process
            </h2>
            <p className="text-lg text-body-color">
              A data-driven methodology that transforms business problems into intelligent solutions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: faSearch,
                step: '01',
                title: 'Problem Discovery',
                description: 'We analyze your business challenge, define success metrics, and determine if AI/ML is the optimal solution. We identify data sources, feasibility, and expected impact.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faDatabase,
                step: '02',
                title: 'Data Collection & Prep',
                description: 'Gather, clean, and prepare quality datasets. We handle data labeling, feature engineering, and ensure data quality for training robust ML models.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faBrain,
                step: '03',
                title: 'Model Development',
                description: 'Build and train custom models using appropriate algorithms. We experiment with architectures, tune hyperparameters, and optimize for accuracy and performance.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faBug,
                step: '04',
                title: 'Testing & Validation',
                description: 'Rigorous testing across diverse datasets and scenarios. We validate model accuracy, identify edge cases, and ensure reliability before deployment.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faRocket,
                step: '05',
                title: 'Deployment & Integration',
                description: 'Deploy models to production with scalable infrastructure. We integrate with your existing systems, implement APIs, and ensure smooth rollout.',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: faChartLine,
                step: '06',
                title: 'Monitoring & Optimization',
                description: 'Continuous monitoring of model performance, accuracy, and drift. We retrain models with new data, optimize based on real-world feedback, and scale as needed.',
                gradient: 'from-yellow-400 to-amber-500'
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
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 dark:from-gray-900 dark:to-black lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Choose Orion App Tech for AI
            </h2>
            <p className="text-lg text-body-color">
              We don't just build models – we solve business problems with AI that delivers measurable ROI
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faTrophy,
                title: '50+ AI Projects',
                description: 'From startups to enterprises, we\'ve delivered AI solutions that improved efficiency by 10x and generated millions in value.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faStar,
                title: '95% Model Accuracy',
                description: 'Our models consistently achieve industry-leading accuracy through rigorous training, validation, and continuous improvement.',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                icon: faUsers,
                title: 'Expert AI Team',
                description: 'PhD-level data scientists, ML engineers, and domain experts who\'ve published research and worked at top tech companies.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faRocket,
                title: 'Rapid Prototyping',
                description: 'We build POCs in weeks, not months. Validate AI feasibility and ROI before committing to full-scale development.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faShieldAlt,
                title: 'Enterprise-Grade Security',
                description: 'Data encryption, compliance with regulations (GDPR, HIPAA), and secure model deployment in your infrastructure.',
                gradient: 'from-red-400 to-rose-500'
              },
              {
                icon: faHeadset,
                title: 'End-to-End Support',
                description: 'From data strategy to production deployment and ongoing optimization. We\'re with you through the entire AI journey.',
                gradient: 'from-indigo-400 to-purple-500'
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Your AI solution should be more than just accurate – it should be transformative, driving real business value and competitive advantage. Let's create that together.
            </p>
            <p className="mb-12 text-lg text-white/80">
              See our full portfolio, connect with our team, and discuss your project with AI experts who've delivered 50+ successful implementations.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="glass-effect group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your AI Journey</span>
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
