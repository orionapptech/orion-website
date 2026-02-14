import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions | Orion App Tech",
  description: "Read the terms and conditions governing the use of Orion App Tech's website and services. Understand your rights and responsibilities when engaging with our software development services.",
  keywords: "terms and conditions, terms of service, legal agreement, software development, Orion App Tech",
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Please read these terms carefully before using our website or services."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Terms and Conditions
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Welcome to Orion App Tech. These Terms and Conditions ("Terms") govern your access to and use of our website (orionapptech.com) and the services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 rounded-lg border border-stroke bg-gray-2 p-6 dark:border-dark-3 dark:bg-dark-2">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Table of Contents
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#definitions" className="text-primary hover:underline">
                        1. Definitions
                      </a>
                    </li>
                    <li>
                      <a href="#acceptance" className="text-primary hover:underline">
                        2. Acceptance of Terms
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-primary hover:underline">
                        3. Services Overview
                      </a>
                    </li>
                    <li>
                      <a href="#website-use" className="text-primary hover:underline">
                        4. Website Use
                      </a>
                    </li>
                    <li>
                      <a href="#service-engagement" className="text-primary hover:underline">
                        5. Service Engagement
                      </a>
                    </li>
                    <li>
                      <a href="#intellectual-property" className="text-primary hover:underline">
                        6. Intellectual Property
                      </a>
                    </li>
                    <li>
                      <a href="#payment-terms" className="text-primary hover:underline">
                        7. Payment Terms
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#confidentiality" className="text-primary hover:underline">
                        8. Confidentiality
                      </a>
                    </li>
                    <li>
                      <a href="#warranties" className="text-primary hover:underline">
                        9. Warranties & Disclaimers
                      </a>
                    </li>
                    <li>
                      <a href="#limitation-liability" className="text-primary hover:underline">
                        10. Limitation of Liability
                      </a>
                    </li>
                    <li>
                      <a href="#termination" className="text-primary hover:underline">
                        11. Termination
                      </a>
                    </li>
                    <li>
                      <a href="#gaming-specific" className="text-primary hover:underline">
                        12. Gaming-Specific Terms
                      </a>
                    </li>
                    <li>
                      <a href="#general-provisions" className="text-primary hover:underline">
                        13. General Provisions
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-primary hover:underline">
                        14. Contact Information
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div id="definitions" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  1. Definitions
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  For the purposes of these Terms:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>"Company," "We," "Us," or "Orion"</strong> refers to Orion App Tech</li>
                  <li><strong>"Client," "You," or "Your"</strong> refers to the individual or entity accessing our website or engaging our services</li>
                  <li><strong>"Services"</strong> refers to software development, AI/ML solutions, game development, and related services provided by Orion App Tech</li>
                  <li><strong>"Agreement"</strong> refers to the contractual relationship between Orion and the Client, including these Terms and any project-specific contracts</li>
                  <li><strong>"Deliverables"</strong> refers to the software, applications, code, documentation, or other work products created by Orion for the Client</li>
                  <li><strong>"Website"</strong> refers to orionapptech.com and all associated domains</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div id="acceptance" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  2. Acceptance of Terms
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  By accessing our website, submitting an inquiry, or engaging our services, you acknowledge that:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>You have read, understood, and agree to be bound by these Terms</li>
                  <li>You are at least 18 years old and have the legal capacity to enter into binding contracts</li>
                  <li>If representing a company, you have the authority to bind that entity to these Terms</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>You have reviewed our Privacy Policy and consent to our data practices</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="services" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  3. Services Overview
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion App Tech provides custom software development services across multiple domains:
                </p>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.1 Core Development Services
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Website Development:</strong> Landing pages, corporate websites, e-commerce platforms, web applications, PWAs, CMS implementation, and API development</li>
                  <li><strong>App Development:</strong> Native iOS (Swift), native Android (Kotlin), and cross-platform (React Native, Flutter) mobile applications</li>
                  <li><strong>AI & Machine Learning:</strong> Natural language processing, computer vision, predictive analytics, chatbots, sentiment analysis, and custom ML models</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.2 Game Development
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Multiplayer gaming platforms (Ludo, Rummy, Poker, 3 Patti)</li>
                  <li>Casino and roulette games</li>
                  <li>Sports games (Cricket, Football, Fantasy Sports)</li>
                  <li>E-sports platforms and virtual money games</li>
                  <li>Real-money gaming infrastructure with secure payment integration</li>
                  <li>Tournament systems and anti-cheat mechanisms</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.3 Industry-Specific Solutions
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Specialized solutions for Finance, Healthcare (HIPAA-compliant), E-commerce, Travel, Real Estate, Education, Logistics, NGOs, Fitness, Taxi/Ride-sharing, Food Delivery, and other industries.
                </p>
              </div>

              {/* Section 4 */}
              <div id="website-use" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  4. Website Use
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  4.1 Permitted Use
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  You may use our website to:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Learn about our services and company</li>
                  <li>Request quotes and submit inquiries</li>
                  <li>Contact us for business purposes</li>
                  <li>Subscribe to newsletters and updates</li>
                  <li>View case studies and testimonials</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  4.2 Prohibited Activities
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  You agree NOT to:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Use automated systems (bots, scrapers) to access the website without permission</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Copy, reproduce, or distribute our content without authorization</li>
                  <li>Use the website for illegal, fraudulent, or malicious purposes</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="service-engagement" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  5. Service Engagement Terms
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.1 Project Initiation Process
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Discovery Phase:</strong> Initial consultation to understand requirements</li>
                  <li><strong>Proposal:</strong> Detailed project scope, timeline, and cost estimate</li>
                  <li><strong>Agreement:</strong> Signed contract or statement of work (SOW)</li>
                  <li><strong>Advance Payment:</strong> Initial payment to commence work</li>
                  <li><strong>Execution:</strong> Development according to agreed milestones</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.2 Project Scope and Changes
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  The project scope will be defined in the proposal or SOW. Any changes to the scope, timeline, or budget require:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Written change request from the Client</li>
                  <li>Impact assessment by Orion (time, cost, and feasibility)</li>
                  <li>Mutual written approval of changes</li>
                  <li>Updated timeline and payment schedule if applicable</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.3 Client Responsibilities
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  To ensure successful project delivery, Clients must:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Provide clear, complete, and accurate project requirements</li>
                  <li>Supply necessary content, assets, branding materials, and access credentials</li>
                  <li>Respond to communications and provide feedback within agreed timeframes</li>
                  <li>Review and approve deliverables at each milestone</li>
                  <li>Ensure timely payments according to the agreement</li>
                  <li>Designate a primary point of contact for the project</li>
                  <li>Obtain necessary licenses for third-party services, APIs, or content</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.4 Milestone-Based Delivery
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Projects are typically delivered in milestones with Client review and approval at each stage. Delays caused by Client feedback, content provision, or approvals may extend project timelines accordingly.
                </p>
              </div>

              {/* Section 6 */}
              <div id="intellectual-property" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  6. Intellectual Property Rights
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  6.1 Client Ownership of Deliverables
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Upon receipt of full payment, the Client owns all custom code, designs, and deliverables specifically created for the project. Orion transfers all intellectual property rights to the Client for custom work developed during the engagement.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  6.2 Orion's Retained Rights
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion retains ownership of:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Pre-existing code, frameworks, libraries, and tools</li>
                  <li>Proprietary methodologies and processes</li>
                  <li>Reusable components and templates</li>
                  <li>General knowledge and expertise gained during the project</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  The Client receives a non-exclusive, perpetual license to use these pre-existing materials as part of the delivered solution.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  6.3 Third-Party Components
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Deliverables may include third-party open-source libraries, frameworks, or components. These remain subject to their original licenses (MIT, Apache, GPL, etc.). The Client is responsible for complying with these licenses.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  6.4 Client-Provided Materials
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  The Client warrants that all content, assets, trademarks, and materials provided to Orion:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Are owned by the Client or properly licensed</li>
                  <li>Do not infringe on third-party intellectual property rights</li>
                  <li>Are provided with authorization for use in the project</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  6.5 Portfolio Rights
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Unless otherwise agreed in writing, Orion reserves the right to:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Showcase the project in our portfolio, case studies, and marketing materials</li>
                  <li>Reference the Client and project in proposals and presentations</li>
                  <li>Use screenshots and descriptions of the work (with Client's brand visible)</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Clients may request confidential treatment by notifying us in writing prior to or during the project.
                </p>
              </div>

              {/* Section 7 */}
              <div id="payment-terms" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  7. Payment Terms
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.1 Payment Structure
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Unless otherwise specified in the agreement, projects typically follow a milestone-based payment structure:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>30% Advance:</strong> Due upon signing the agreement to initiate the project</li>
                  <li><strong>40% Midway:</strong> Due upon completion of mid-project milestones</li>
                  <li><strong>30% Final:</strong> Due upon project completion and before final delivery</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Specific payment schedules will be outlined in the project proposal or SOW.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.2 Payment Methods
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We accept payments via:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Bank transfer (wire transfer)</li>
                  <li>Credit/debit cards (Visa, Mastercard, American Express)</li>
                  <li>Online payment platforms (PayPal, Stripe, Wise)</li>
                  <li>Other methods as agreed in writing</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.3 Currency and Invoicing
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Payments are typically quoted in USD or INR as specified in the agreement</li>
                  <li>Invoices will be sent via email with payment instructions</li>
                  <li>Payment is due within the timeframe specified in the invoice (typically 7-15 days)</li>
                  <li>Taxes (VAT, GST, or other applicable taxes) will be added as required by law</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.4 Late Payments
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Late payments may result in:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Suspension of work until payment is received</li>
                  <li>Late payment fees (as specified in the agreement or allowed by law)</li>
                  <li>Withholding of deliverables and source code</li>
                  <li>Termination of the agreement for non-payment</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.5 Additional Costs
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Unless included in the project quote, the following are Client's responsibility:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Domain registration and hosting services</li>
                  <li>Third-party API licenses and subscriptions</li>
                  <li>SSL certificates and security services</li>
                  <li>App store developer accounts (Apple, Google)</li>
                  <li>Premium plugins, themes, or software licenses</li>
                  <li>Stock photos, fonts, or other licensed assets</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div id="confidentiality" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  8. Confidentiality
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Both parties agree to maintain the confidentiality of proprietary and sensitive information exchanged during the engagement.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  8.1 Orion's Confidentiality Commitment
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion treats all Client information as confidential, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Business strategies and plans</li>
                  <li>Project requirements and specifications</li>
                  <li>Technical documentation and architecture</li>
                  <li>User data and analytics</li>
                  <li>Financial information</li>
                  <li>Source code and proprietary algorithms</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  All Orion team members sign non-disclosure agreements and are trained on confidentiality practices.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  8.2 Non-Disclosure Agreements (NDAs)
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  For projects requiring additional confidentiality protections, we are willing to sign mutual NDAs before discussing project details.
                </p>
              </div>

              {/* Section 9 */}
              <div id="warranties" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  9. Warranties and Disclaimers
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  9.1 Our Warranties
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion warrants that:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Services will be performed with professional skill and care</li>
                  <li>Deliverables will substantially conform to agreed specifications</li>
                  <li>Custom code will be free from material defects for a warranty period (typically 30-90 days post-launch)</li>
                  <li>Work will not infringe on third-party intellectual property rights</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  9.2 Warranty Limitations
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  The warranty does not cover:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Issues caused by Client modifications or third-party actions</li>
                  <li>Hosting, server, or infrastructure problems not under Orion's control</li>
                  <li>Third-party services, APIs, or integrations</li>
                  <li>Browser compatibility beyond agreed specifications</li>
                  <li>Normal wear, aging, or technology obsolescence</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  9.3 Disclaimers
                </h4>
                <p className="mb-4 text-base font-semibold uppercase text-body-color dark:text-body-color-dark">
                  EXCEPT AS EXPRESSLY STATED, ALL SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion does not guarantee:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Specific business results, revenue, or user engagement metrics</li>
                  <li>Search engine rankings or SEO performance</li>
                  <li>App store approval or featured placement</li>
                  <li>Uninterrupted or error-free operation after launch</li>
                  <li>Compatibility with future operating system or browser updates</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div id="limitation-liability" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  10. Limitation of Liability
                </h3>
                <p className="mb-4 text-base font-semibold uppercase text-body-color dark:text-body-color-dark">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORION'S TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC PROJECT GIVING RISE TO THE CLAIM.
                </p>
                <p className="mb-4 text-base font-semibold uppercase text-body-color dark:text-body-color-dark">
                  IN NO EVENT SHALL ORION BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Some jurisdictions do not allow the exclusion or limitation of certain damages, so these limitations may not apply to you.
                </p>
              </div>

              {/* Section 11 */}
              <div id="termination" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  11. Termination
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  11.1 Termination by Client
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Clients may terminate the engagement by providing 7 days' written notice. In such cases:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Client is responsible for payment of all completed work</li>
                  <li>Current milestone will be prorated based on work completed</li>
                  <li>Advance payments are non-refundable (see Refund Policy)</li>
                  <li>Orion will provide work completed to date upon final payment</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  11.2 Termination by Orion
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion may terminate the engagement if:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Client fails to make payments as agreed</li>
                  <li>Client breaches material terms of the agreement</li>
                  <li>Client fails to provide necessary information, approvals, or cooperation</li>
                  <li>Project requirements violate laws or ethical standards</li>
                  <li>The working relationship becomes untenable</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  11.3 Effect of Termination
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Upon termination:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Client must pay for all work completed through the termination date</li>
                  <li>Orion will deliver work completed and paid for</li>
                  <li>Each party returns or destroys the other's confidential information</li>
                  <li>Sections regarding intellectual property, confidentiality, and limitation of liability survive termination</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div id="gaming-specific" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  12. Gaming-Specific Terms
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  For clients engaging our game development services, particularly real-money gaming platforms, the following additional terms apply:
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  12.1 Legal Compliance
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>Client Responsibility:</strong> The Client is solely responsible for:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Obtaining all necessary licenses and certifications for operating gaming platforms</li>
                  <li>Compliance with gambling laws in jurisdictions where the platform operates</li>
                  <li>Age verification and geo-blocking requirements</li>
                  <li>Responsible gaming policies and player protection measures</li>
                  <li>Anti-money laundering (AML) and Know Your Customer (KYC) compliance</li>
                  <li>Tax reporting and obligations</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  12.2 Payment Gateway Disclaimer
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion integrates third-party payment gateways as specified by the Client. We are not responsible for:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Payment gateway approvals, account suspensions, or service disruptions</li>
                  <li>Transaction fees, chargebacks, or payment disputes</li>
                  <li>Financial reconciliation or accounting</li>
                  <li>Client's agreements with payment service providers</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  12.3 Responsible Gaming Features
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We implement responsible gaming features as requested (deposit limits, self-exclusion, session timers). However, the Client is responsible for monitoring player behavior and enforcing responsible gaming policies.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  12.4 Fairness and Security
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We implement industry-standard randomization algorithms and anti-cheat mechanisms. However, the Client is responsible for ongoing monitoring, audits, and certification by gaming authorities if required.
                </p>
              </div>

              {/* Section 13 */}
              <div id="general-provisions" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  13. General Provisions
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.1 Indemnification
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Client agrees to indemnify and hold Orion harmless from any claims, damages, or expenses arising from:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Client's use of deliverables in violation of laws or third-party rights</li>
                  <li>Client-provided content, data, or materials</li>
                  <li>Client's breach of these Terms</li>
                  <li>Client's business operations using the delivered solution</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.2 Dispute Resolution
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  In the event of a dispute:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Negotiation:</strong> Parties will first attempt to resolve disputes through good-faith negotiation</li>
                  <li><strong>Mediation:</strong> If negotiation fails, parties agree to mediation before pursuing legal action</li>
                  <li><strong>Arbitration:</strong> Disputes may be resolved through binding arbitration as agreed</li>
                  <li><strong>Governing Law:</strong> These Terms are governed by the laws of India, without regard to conflict of law principles</li>
                  <li><strong>Jurisdiction:</strong> Exclusive jurisdiction in Indian courts for legal proceedings</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.3 Force Majeure
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Natural disasters, pandemics, or health emergencies</li>
                  <li>War, terrorism, or civil unrest</li>
                  <li>Government actions, regulations, or embargoes</li>
                  <li>Internet service disruptions or infrastructure failures</li>
                  <li>Labor strikes or disputes</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.4 Severability
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.5 Entire Agreement
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  These Terms, together with any project-specific agreements, constitute the entire agreement between the parties and supersede all prior communications and understandings.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.6 Amendments
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion reserves the right to modify these Terms at any time. Material changes will be communicated via email or website notice. Continued use of services after changes constitutes acceptance of the revised Terms.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.7 Waiver
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  13.8 Assignment
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Clients may not assign or transfer their rights or obligations without Orion's prior written consent. Orion may assign these Terms in connection with a merger, acquisition, or sale of assets.
                </p>
              </div>

              {/* Section 14 */}
              <div id="contact" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  14. Contact Information
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  For questions about these Terms or our services, please contact us:
                </p>
                
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
                  <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                    Orion App Tech
                  </h4>
                  <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                    <li>
                      <strong>General Support:</strong>{" "}
                      <a href="mailto:support@orionapptech.com" className="text-primary underline">
                        support@orionapptech.com
                      </a>
                    </li>
                    <li>
                      <strong>Regional Offices:</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>
                          USA: <a href="mailto:usa@orionapptech.com" className="text-primary underline">usa@orionapptech.com</a>
                        </li>
                        <li>
                          India: <a href="mailto:india@orionapptech.com" className="text-primary underline">india@orionapptech.com</a>
                        </li>
                        <li>
                          Europe: <a href="mailto:europe@orionapptech.com" className="text-primary underline">europe@orionapptech.com</a>
                        </li>
                        <li>
                          Asia: <a href="mailto:asia@orionapptech.com" className="text-primary underline">asia@orionapptech.com</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Website:</strong>{" "}
                      <a href="https://orionapptech.com" className="text-primary underline">
                        orionapptech.com
                      </a>
                    </li>
                    <li>
                      <strong>Response Time:</strong> Within 8 hours during business days
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acceptance Notice */}
            <div className="mt-12 border-t border-stroke pt-8 dark:border-dark-3">
              <p className="text-center text-sm text-body-color dark:text-body-color-dark">
                By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
