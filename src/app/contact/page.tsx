"use client";

import { useState, FormEvent } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faRocket,
  faCheckCircle,
  faUsers,
  faHandshake,
  faLightbulb,
  faShieldAlt,
  faGlobe,
  faHeart,
  faPaperPlane,
  faHeadset,
  faChartLine,
  faStar,
  faCalendarAlt,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import type { ContactFormData, FormState } from "@/types/contact";

const ContactPage = () => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Store form reference before async operations
    const formElement = e.currentTarget;
    
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });

    const formData = new FormData(formElement);
    
    // Validate form data before submission
    const formName = formData.get('name') as string;
    const formEmail = formData.get('email') as string;
    const formPhone = formData.get('phone') as string;
    const formMessage = formData.get('message') as string;
    
    if (!formName || !formEmail || !formPhone || !formMessage) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill in all required fields.',
      });
      return;
    }
    
    const data: ContactFormData = {
      name: formName,
      email: formEmail,
      phone: formPhone,
      company: formData.get('company') as string || undefined,
      projectType: formData.get('projectType') as string || undefined,
      budget: formData.get('budget') as string || undefined,
      message: formMessage,
      formSource: 'contact',
    };

    try {
      // No timeout - let the server handle it (SMTP can be slow)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        throw new Error('Invalid server response. Please try again.');
      }

      if (result.success) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message,
        });
        
        // Reset form safely
        if (formElement) {
          formElement.reset();
        }
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Clear success message after 10 seconds
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSuccess: false, message: '' }));
        }, 10000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error: any) {
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage,
      });
      
      // Scroll to top to show error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Clear error message after 8 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isError: false, message: '' }));
      }, 8000);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Let's Connect"
        description="Your next breakthrough is just a conversation away. Share your vision, and we'll help you build something extraordinary."
      />

      {/* Hero Contact Form Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                We're Here to Help
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                Ready to Build Something
                <span className="text-primary"> Amazing?</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Whether you have a fully-formed vision or just a spark of an idea, we're excited to hear from you. 
                Share your project details below, and our team will get back to you within 8 hours with insights, 
                recommendations, and a clear path forward.
              </p>
            </div>

            {/* Success Message */}
            {formState.isSuccess && (
              <div className="mb-8 rounded-2xl bg-green-50 border-2 border-green-200 p-6 shadow-lg dark:bg-green-900/20 dark:border-green-800 animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                      <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-2">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      {formState.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {formState.isError && (
              <div className="mb-8 rounded-2xl bg-red-50 border-2 border-red-200 p-6 shadow-lg dark:bg-red-900/20 dark:border-red-800 animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white">
                      <span className="text-2xl">⚠️</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                      Oops! Something went wrong
                    </h3>
                    <p className="text-red-700 dark:text-red-300">
                      {formState.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submitting Message */}
            {formState.isSubmitting && (
              <div className="mb-8 rounded-2xl bg-blue-50 border-2 border-blue-200 p-6 shadow-lg dark:bg-blue-900/20 dark:border-blue-800 animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
                      <div className="animate-spin">
                        <FontAwesomeIcon icon={faRocket} className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">
                      🚀 Sending Your Message...
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-3">
                      Please wait 0-15 seconds for submission based on server load. We're getting your message to our team right now!
                    </p>
                    <div className="w-full bg-blue-200 rounded-full h-2 dark:bg-blue-800 overflow-hidden">
                      <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form Card */}
            <div className="glass-card hover-lift animate-fade-in-up rounded-3xl p-8 dark:glass-card-dark sm:p-12 lg:p-16">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="w-full rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      className="w-full rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      required
                      className="w-full rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Inc."
                      className="w-full rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                  >
                    What Are You Looking For?
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Website Development</option>
                    <option value="app-development">Mobile App Development</option>
                    <option value="game-development">Game Development</option>
                    <option value="ai-ml">AI/ML Solutions</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                  >
                    Estimated Budget (Optional)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g., $50,000 or open to discussion"
                    className="w-full rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                  >
                    Tell Us About Your Project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Share your vision, challenges, goals, or any questions you have. The more details you provide, the better we can help you."
                    required
                    className="w-full resize-none rounded-xl border-2 border-transparent bg-gray-100 px-6 py-4 text-base text-body-color outline-none transition-all focus:border-primary dark:bg-gray-800 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-12 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState.isSubmitting ? (
                      <>
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        Send Your Message
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-sm text-body-color dark:text-body-color-dark">
                    {formState.isSubmitting 
                      ? 'Please wait while we process your request...'
                      : 'We typically respond within 8 hours during business days'
                    }
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Or Reach Us Directly
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Choose your preferred way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: faEnvelope,
                title: "Main Support",
                content: "support@orionapptech.com",
                description: "For all inquiries worldwide",
                gradient: "from-blue-500 to-blue-600",
                link: "mailto:support@orionapptech.com"
              },
              {
                icon: faPhone,
                title: "Quick Call",
                content: "(363) 999-0447",
                description: "Call us directly",
                gradient: "from-green-500 to-green-600",
                link: "tel:3639990447"
              },
              {
                icon: faClock,
                title: "Response Time",
                content: "Within 8 Hours",
                description: "On business days",
                gradient: "from-orange-500 to-orange-600",
                link: "#"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card hover-lift group rounded-2xl p-8 text-center dark:glass-card-dark"
              >
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <FontAwesomeIcon icon={item.icon} className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <a href={item.link} className="mb-2 block text-base font-semibold text-primary hover:underline">
                  {item.content}
                </a>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-primary py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <FontAwesomeIcon icon={faGlobe} className="mb-4 h-12 w-12 text-white/80" />
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Connect With Your Regional Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Get faster responses by reaching out to your regional office. Our local teams understand your market and timezone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                flag: "🇺🇸",
                region: "United States",
                email: "usa@orionapptech.com",
                description: "North America coverage",
                timezone: "EST/PST"
              },
              {
                flag: "🇮🇳",
                region: "India",
                email: "india@orionapptech.com",
                description: "South Asia operations",
                timezone: "IST"
              },
              {
                flag: "🇪🇺",
                region: "Europe",
                email: "europe@orionapptech.com",
                description: "European markets",
                timezone: "CET/GMT"
              },
              {
                flag: "🌏",
                region: "Asia Pacific",
                email: "asia@orionapptech.com",
                description: "APAC region",
                timezone: "SGT/JST"
              },
            ].map((office, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20"
              >
                <div className="mb-4 text-5xl">{office.flag}</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {office.region}
                </h3>
                <a 
                  href={`mailto:${office.email}`}
                  className="mb-2 block text-base font-semibold text-white/90 hover:text-white hover:underline transition-colors"
                >
                  {office.email}
                </a>
                <p className="mb-1 text-sm text-white/70">{office.description}</p>
                <p className="text-xs text-white/60">⏰ {office.timezone}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              💡 <strong>Pro Tip:</strong> Contact your regional office for faster responses and timezone-aligned communication
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Process
            </span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              What Happens After You Reach Out?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              We've streamlined our process to make it effortless for you to go from first contact to project kickoff.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                icon: faHeadset,
                title: "Quick Response",
                description: "Within 8 hours, a dedicated project consultant will reach out to you via email or phone to acknowledge your inquiry and schedule a discovery call.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                icon: faComments,
                title: "Discovery Call",
                description: "We dive deep into your vision, challenges, and goals. This 30-45 minute conversation helps us understand exactly what you need and how we can help.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                step: "03",
                icon: faLightbulb,
                title: "Custom Proposal",
                description: "Within 2-3 business days, you'll receive a detailed proposal with timeline, technology stack, team structure, and transparent pricing tailored to your project.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                step: "04",
                icon: faCheckCircle,
                title: "Agreement & Kickoff",
                description: "Once you approve the proposal, we finalize contracts and assign your dedicated team. Your project officially begins with a comprehensive kickoff meeting.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                step: "05",
                icon: faRocket,
                title: "Sprint Planning",
                description: "We break down your project into manageable sprints, set clear milestones, and establish communication channels so you're always in the loop.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                step: "06",
                icon: faStar,
                title: "Build & Iterate",
                description: "Our team starts building with regular demos, feedback sessions, and updates. You'll see progress every week and have the opportunity to refine along the way.",
                gradient: "from-yellow-500 to-amber-500"
              },
            ].map((item, index) => (
              <div key={index} className="animate-fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card h-full rounded-2xl p-8 dark:glass-card-dark">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-6xl font-bold text-primary/20">
                      {item.step}
                    </span>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
              Why Clients Love Working With Us
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              We're not just another development shop. Here's what makes partnering with Orion App Tech different.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                icon: faUsers,
                title: "Dedicated Team, Not Freelancers",
                description: "You get a full-stack team of designers, developers, QA specialists, and a project manager – all committed exclusively to your success. No juggling multiple clients or disappearing acts."
              },
              {
                icon: faShieldAlt,
                title: "Transparent Communication",
                description: "Access to a real-time project dashboard, weekly video updates, daily Slack communication, and monthly review calls. You'll always know exactly what's happening with your project."
              },
              {
                icon: faGlobe,
                title: "Global Expertise, Local Touch",
                description: "With presence in USA, India, and Netherlands, we combine international talent with local market understanding. Time zones become an advantage – we're always working on your project."
              },
              {
                icon: faChartLine,
                title: "Proven Track Record",
                description: "100+ successful projects across healthcare, gaming, fintech, and e-commerce. From startups to enterprises, we've helped businesses achieve 3x user growth and 280% revenue increases."
              },
              {
                icon: faHandshake,
                title: "Fixed Price or Flexible Models",
                description: "Whether you prefer fixed-price projects with guaranteed delivery or flexible time-and-material arrangements, we adapt to your needs and budget constraints."
              },
              {
                icon: faCalendarAlt,
                title: "Post-Launch Support",
                description: "We don't disappear after launch. Every project includes 90 days of complimentary support, maintenance packages, and ongoing optimization to ensure long-term success."
              },
            ].map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card hover-lift group h-full rounded-2xl p-8 dark:glass-card-dark">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-24 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <FontAwesomeIcon icon={faHeart} className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Let's Start Your Success Story
            </h2>
            <div className="mb-12 space-y-4 text-lg leading-relaxed text-white/95 md:text-xl">
              <p>
                Every great product starts with a conversation. Whether you're a startup with a bold idea, 
                an enterprise looking to innovate, or anywhere in between – we're here to listen.
              </p>
              <p className="text-xl font-semibold md:text-2xl">
                Your vision deserves the perfect execution. Let's make it happen together.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
                Fill Out The Form Above
              </a>
              <a
                href="mailto:support@orionapptech.com"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-white px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                Email Us Directly
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      </section>
    </>
  );
};

export default ContactPage;
