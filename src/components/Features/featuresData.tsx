import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    title: "Game Development",
    paragraph:
      "End-to-end game development, multiplayer infrastructure, in-game economy systems, and real-time analytics. From casual mobile games to complex multiplayer platforms.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: "App Development",
    paragraph:
      "Cross-platform and native mobile experiences for iOS and Android. We leverage React Native, Flutter, Swift, and Kotlin to build apps that users love.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Website Development",
    paragraph:
      "Enterprise-grade web applications built with React, Next.js, Angular, and Vue.js. We deliver responsive, accessible, and performant solutions that scale with your business.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
        <polyline points="7.5 19.79 7.5 14.6 3 12"/>
        <polyline points="21 12 16.5 14.6 16.5 19.79"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "AI & ML Services",
    paragraph:
      "Intelligent automation, predictive analytics, and custom ML models for data-driven decisions. From chatbots to computer vision, we bring AI to your business.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Industry Solutions",
    paragraph:
      "Specialized solutions for Finance, Healthcare, E-commerce, Travel, Real Estate, Education, Logistics, and more. We understand your industry's unique challenges.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "24/7 Support & Maintenance",
    paragraph:
      "Round-the-clock technical support with guaranteed SLA response times. Regular updates, security patches, and performance optimization to keep your apps running smoothly.",
  },
];
export default featuresData;
