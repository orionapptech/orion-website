import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faUserMd,
  faHeartbeat,
  faPills,
  faCalendarCheck,
  faMobileAlt,
  faShieldHalved,
  faCheckCircle,
  faArrowRight,
  faEye,
  faVideo,
  faBrain,
  faClipboardList,
  faStethoscope,
  faSyringe,
  faChartLine,
  faLock,
  faCloud
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Healthcare Software Development - HIPAA Compliant Medical Apps | Orion App Tech",
  description:
    "Transform healthcare with HIPAA-compliant solutions. Hospital management systems, telemedicine platforms, EHR, patient portals. 2M+ patients served securely.",
  keywords: "healthcare software, HIPAA compliant, telemedicine, hospital management, EHR, patient portal, medical app development",
};

export default function HealthcareIndustry() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-24 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
            {/* Left Side: Healthcare Dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card-dark relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-green-600/10" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
                
                <div className="relative">
                  {/* Patient Dashboard */}
                  <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Patient Care Dashboard</h3>
                      <div className="flex items-center gap-2">
                       <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                        <span className="text-sm text-green-400">HIPAA Compliant</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">2M+</div>
                        <div className="text-sm text-white/70">Patients</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">50K+</div>
                        <div className="text-sm text-white/70">Doctors</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">500+</div>
                        <div className="text-sm text-white/70">Hospitals</div>
                      </div>
                      <div className="rounded-xl bg-black/20 p-4">
                        <div className="mb-1 text-2xl font-bold text-white">99.9%</div>
                        <div className="text-sm text-white/70">Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: faShieldHalved, label: "HIPAA", color: "from-blue-400 to-cyan-500" },
                      { icon: faVideo, label: "Telemedicine", color: "from-green-400 to-emerald-500" },
                      { icon: faBrain, label: "AI Diagnostics", color: "from-purple-400 to-pink-500" },
                      { icon: faHeartbeat, label: "IoMT", color: "from-red-400 to-orange-500" },
                    ].map((feature, idx) => (
                      <div key={idx} className="glass-effect group rounded-xl p-5 transition-all hover:-translate-y-1">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <FontAwesomeIcon icon={feature.icon} className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                 {/* Appointment Status */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold text-white/90">Today's Appointments</div>
                    <div className="space-y-2">
                      {[
                        { patient: 'John Doe', time: '10:00 AM', status: 'Completed', color: 'green' },
                        { patient: 'Jane Smith', time: '11:30 AM', status: 'In Progress', color: 'yellow' },
                        { patient: 'Mike Johnson', time: '02:00 PM', status: 'Scheduled', color: 'blue' },
                      ].map((apt, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                          <div>
                            <div className="text-sm font-medium text-white">{apt.patient}</div>
                            <div className="text-xs text-white/60">{apt.time}</div>
                          </div>
                          <span className={`text-xs font-semibold text-${apt.color}-400`}>{apt.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-20 animate-bounce">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faHospital} className="h-8 w-8 text-cyan-500" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-32 animate-bounce delay-100">
                <div className="glass-effect rounded-2xl p-4">
                  <FontAwesomeIcon icon={faStethoscope} className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 dark:border-cyan-800 dark:bg-cyan-900/30">
                <FontAwesomeIcon icon={faHospital} className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  Healthcare Solutions
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white lg:text-6xl xl:text-7xl">
                Healthcare Software
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> That Saves Lives</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-body-color">
                HIPAA-compliant healthcare solutions that transform patient care. From telemedicine to hospital management, EHR to patient portals – we build secure medical software that healthcare professionals trust.
              </p>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">2M+</div>
                  <div className="text-sm text-body-color">Patients</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">500+</div>
                  <div className="text-sm text-body-color">Hospitals</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">99.9%</div>
                  <div className="text-sm text-body-color">Uptime</div>
                </div>
                <div className="rounded-xl border border-stroke bg-white p-4 dark:border-strokedark dark:bg-gray-dark">
                  <div className="mb-1 text-3xl font-bold text-black dark:text-white">HIPAA</div>
                  <div className="text-sm text-body-color">Compliant</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>Build Healthcare Solution</span>
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-cyan-600 px-8 py-4 text-lg font-semibold text-cyan-600 transition-all hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span>View Healthcare Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-stroke pt-8 dark:border-strokedark">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">HL7/FHIR Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-body-color">FDA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-purple-50/50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-purple-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-body-color">
              From telemedicine to hospital management – we build secure, compliant software that transforms patient care
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faHospital,
                title: 'Hospital Management Systems',
                description: 'Complete HMS with patient records, billing, inventory, OPD/IPD management, and revenue cycle management.',
                gradient: 'from-cyan-400 to-blue-500'
              },
              {
                icon: faVideo,
                title: 'Telemedicine Platforms',
                description: 'Video consultations, remote diagnosis, e-prescriptions, and secure patient-doctor communication.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faClipboardList,
                title: 'Electronic Health Records',
                description: 'Interoperable EHR systems compliant with HL7 and FHIR standards for seamless data exchange.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faMobileAlt,
                title: 'Patient Portal Apps',
                description: 'Patient-centric apps for appointments, medical records, test results, prescriptions, and billing.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faPills,
                title: 'Pharmacy Management',
                description: 'Digital prescriptions, inventory tracking, medicine delivery integration, and drug interaction alerts.',
                gradient: 'from-indigo-400 to-blue-500'
              },
              {
                icon: faBrain,
                title: 'AI-Powered Diagnostics',
                description: 'Machine learning for medical imaging analysis, disease prediction, and treatment recommendations.',
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
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-black dark:to-gray-900 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              HIPAA-Compliant Technology Stack
            </h2>
            <p className="text-lg text-body-color">
              Built on certified healthcare technology with military-grade security and 99.9% uptime
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Security & Compliance</h3>
              <ul className="space-y-3">
                {[
                  'HIPAA & HITECH Compliance',
                  'HL7 & FHIR Standards',
                  'FDA 21 CFR Part 11',
                  'End-to-End Encryption',
                  'Multi-Factor Authentication',
                  'Regular VAPT & Audits'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FontAwesomeIcon icon={faCloud} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Infrastructure & Backend</h3>
              <ul className="space-y-3">
                {[
                  'AWS HealthLake / Azure Health',
                  'Microservices Architecture',
                  'PostgreSQL & MongoDB',
                  'Redis Caching',
                  'WebRTC for Video Calls',
                  'DICOM for Medical Imaging'
                ].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-body-color">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">AI & Mobile</h3>
              <ul className="space-y-3">
                {[
                  'TensorFlow & PyTorch',
                  'Computer Vision for Diagnostics',
                  'React Native iOS & Android',
                  'Progressive Web Apps',
                  'IoMT Device Integration',
                  'Wearable Health Devices'
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-cyan-50/30 to-blue-50/50 dark:from-purple-950/20 dark:via-cyan-950/10 dark:to-blue-950/20" />
        
        <div className="container relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Why Healthcare Providers Choose Us
            </h2>
            <p className="text-lg text-body-color">
              We've built healthcare platforms serving 2M+ patients with zero security breaches
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faShieldHalved,
                title: 'HIPAA Compliance by Design',
                description: 'Every system built from ground-up with HIPAA, HITECH, and HL7/FHIR standards. Regular audits and certifications.',
                gradient: 'from-cyan-400 to-blue-500'
              },
              {
                icon: faLock,
                title: 'Enterprise-Grade Security',
                description: 'End-to-end encryption, role-based access, audit logs, and multi-factor authentication as standard.',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: faHeartbeat,
                title: 'Patient-Centric Design',
                description: 'Intuitive interfaces that improve patient engagement, reduce no-shows, and enhance care coordination.',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: faBrain,
                title: 'AI & Machine Learning',
                description: 'Predictive analytics, medical imaging analysis, and clinical decision support integrated seamlessly.',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                icon: faClipboardList,
                title: 'Interoperability',
                description: 'Seamless data exchange with EHR systems, labs, pharmacies, and insurance providers via HL7/FHIR.',
                gradient: 'from-indigo-400 to-blue-500'
              },
              {
                icon: faChartLine,
                title: 'Proven Track Record',
                description: '500+ healthcare implementations serving 2M+ patients. From clinics to multi-hospital chains.',
                gradient: 'from-yellow-400 to-amber-500'
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 500+ healthcare providers who trust us with their digital transformation. From telemedicine to hospital management – we build healthcare software that saves lives.
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
                <div className="mb-3 text-3xl font-bold text-white">2M+</div>
                <div className="text-white/80">Patients Served</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">500+</div>
                <div className="text-white/80">Healthcare Facilities</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-white">100%</div>
                <div className="text-white/80">HIPAA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
