import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Orion App Tech",
  description: "Learn how Orion App Tech collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your privacy rights.",
  keywords: "privacy policy, data protection, GDPR, personal information, Orion App Tech",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Privacy Policy
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                At Orion App Tech, we are committed to protecting the privacy and security of our website visitors, clients, and partners. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                <a href="https://orionapptech.com" className="text-primary underline">
                  orionapptech.com
                </a>{" "}
                or engage with our services. Please read this policy carefully to understand our practices regarding your personal information.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 rounded-lg border border-stroke bg-gray-2 p-6 dark:border-dark-3 dark:bg-dark-2">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Table of Contents
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#information-collection" className="text-primary hover:underline">
                    1. Information We Collect
                  </a>
                </li>
                <li>
                  <a href="#information-usage" className="text-primary hover:underline">
                    2. How We Use Your Information
                  </a>
                </li>
                <li>
                  <a href="#data-sharing" className="text-primary hover:underline">
                    3. Data Sharing and Disclosure
                  </a>
                </li>
                <li>
                  <a href="#international-transfers" className="text-primary hover:underline">
                    4. International Data Transfers
                  </a>
                </li>
                <li>
                  <a href="#data-security" className="text-primary hover:underline">
                    5. Data Security
                  </a>
                </li>
                <li>
                  <a href="#your-rights" className="text-primary hover:underline">
                    6. Your Privacy Rights
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-primary hover:underline">
                    7. Cookies and Tracking Technologies
                  </a>
                </li>
                <li>
                  <a href="#third-party-links" className="text-primary hover:underline">
                    8. Third-Party Links
                  </a>
                </li>
                <li>
                  <a href="#children-privacy" className="text-primary hover:underline">
                    9. Children's Privacy
                  </a>
                </li>
                <li>
                  <a href="#data-retention" className="text-primary hover:underline">
                    10. Data Retention
                  </a>
                </li>
                <li>
                  <a href="#policy-changes" className="text-primary hover:underline">
                    11. Changes to This Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:underline">
                    12. Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div id="information-collection" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  1. Information We Collect
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  1.1 Information from Website Visitors
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>IP address and approximate geographic location</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referral source and exit pages</li>
                  <li>Click-stream data and navigation patterns</li>
                  <li>Device identifiers and screen resolution</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  1.2 Information You Provide to Us
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We collect information that you voluntarily provide when you:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Fill out contact forms or request a quote</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Create an account or engage our services</li>
                  <li>Communicate with us via email, phone, or chat</li>
                  <li>Participate in surveys, webinars, or events</li>
                  <li>Submit a job application</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  This information may include:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Name and title</li>
                  <li>Email address and phone number</li>
                  <li>Company name and industry</li>
                  <li>Business address</li>
                  <li>Project details and requirements</li>
                  <li>Payment and billing information</li>
                  <li>Resume and professional qualifications (for job applicants)</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  1.3 Information from Service Clients
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  When you engage our software development, AI/ML, or game development services, we collect:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Detailed project specifications and requirements</li>
                  <li>Technical documentation and assets</li>
                  <li>Communication records and feedback</li>
                  <li>Account credentials for project-related platforms (securely encrypted)</li>
                  <li>Usage data from delivered solutions (for support and maintenance)</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div id="information-usage" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  2. How We Use Your Information
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion App Tech uses the collected information for the following purposes:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our software development, AI/ML, and game development services</li>
                  <li><strong>Project Management:</strong> To plan, execute, and deliver custom software solutions according to client specifications</li>
                  <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send project updates</li>
                  <li><strong>Marketing:</strong> To send newsletters, promotional materials, case studies, and relevant industry insights (with your consent and opt-out option)</li>
                  <li><strong>Website Improvement:</strong> To analyze website traffic, identify trends, and enhance user experience</li>
                  <li><strong>Security:</strong> To detect, prevent, and address fraud, security breaches, and technical issues</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                  <li><strong>Business Operations:</strong> To process payments, maintain records, and conduct internal analytics</li>
                  <li><strong>Recruitment:</strong> To evaluate job applications and conduct hiring processes</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="data-sharing" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  3. Data Sharing and Disclosure
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.1 No Third-Party Sharing Without Consent
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>Orion App Tech does not sell, rent, or trade your personal information to third parties.</strong> We will not share your personal information with unaffiliated third parties for their marketing purposes without your explicit written consent.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.2 Client Project Confidentiality
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  All project specifications, technical details, business requirements, and deliverables collected during the provision of our services are considered <strong>your intellectual property</strong> and are treated as <strong>highly confidential</strong>. We maintain strict confidentiality agreements with our team members and do not share these details with any third party unless required by law or with your explicit permission.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.3 Service Providers
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We may share limited information with trusted third-party service providers who assist us in operating our business, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Website hosting and cloud infrastructure providers</li>
                  <li>Email service providers for communications</li>
                  <li>Payment processors for billing and invoicing</li>
                  <li>Analytics platforms for website performance monitoring</li>
                  <li>Customer relationship management (CRM) systems</li>
                </ul>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  These service providers are contractually obligated to keep your information confidential and use it only for the services they provide to us.
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.4 Legal Requirements
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We may disclose your information when required by law or in response to valid legal processes, such as:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Court orders or subpoenas</li>
                  <li>Government investigations</li>
                  <li>Legal proceedings or litigation</li>
                  <li>Protection of our legal rights and safety</li>
                  <li>Prevention of fraud or illegal activities</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div id="international-transfers" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  4. International Data Transfers
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion App Tech operates globally with offices and team members in the United States, India, Europe, and Asia. By providing your personal information to us, you acknowledge and consent to the transfer, storage, and processing of your information in these countries.
                </p>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We take appropriate measures to ensure that your data is treated securely and in accordance with this Privacy Policy, regardless of where it is processed. For data transfers from the European Economic Area (EEA), we implement appropriate safeguards such as Standard Contractual Clauses approved by the European Commission.
                </p>
              </div>

              {/* Section 5 */}
              <div id="data-security" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  5. Data Security
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Protecting your personal information is a top priority at Orion App Tech. We implement industry-standard security measures to safeguard your data, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission and AES encryption for data at rest</li>
                  <li><strong>Access Controls:</strong> Role-based access restrictions and multi-factor authentication</li>
                  <li><strong>Secure Infrastructure:</strong> Firewalls, intrusion detection systems, and regular security audits</li>
                  <li><strong>Employee Training:</strong> Regular security awareness training for all team members</li>
                  <li><strong>Confidentiality Agreements:</strong> All employees and contractors sign non-disclosure agreements</li>
                  <li><strong>Regular Backups:</strong> Automated data backups with secure off-site storage</li>
                  <li><strong>Incident Response:</strong> Established procedures for detecting and responding to security breaches</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security due to the inherent nature of the internet.
                </p>
              </div>

              {/* Section 6 */}
              <div id="your-rights" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  6. Your Privacy Rights
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Depending on your location and applicable laws (including GDPR and CCPA), you may have the following rights regarding your personal information:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Right to Restriction:</strong> Request limitation on how we process your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object:</strong> Object to processing of your personal information for certain purposes</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing at any time</li>
                  <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications using the link in our emails</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  To exercise any of these rights, please contact us at <a href="mailto:support@orionapptech.com" className="text-primary underline">support@orionapptech.com</a>. We will respond to your request within 30 days.
                </p>
              </div>

              {/* Section 7 */}
              <div id="cookies" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  7. Cookies and Tracking Technologies
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website performance. Cookies are small text files stored on your device that help us:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Remember your preferences (such as dark mode settings)</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of certain features on our website.
                </p>
              </div>

              {/* Section 8 */}
              <div id="third-party-links" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  8. Third-Party Links
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Our website may contain links to third-party websites, applications, or services that are not owned or controlled by Orion App Tech. We are not responsible for the privacy practices or content of these external sites.
                </p>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We encourage you to read the privacy policies of every website you visit. This Privacy Policy applies only to information collected by Orion App Tech through our own website and services.
                </p>
              </div>

              {/* Section 9 */}
              <div id="children-privacy" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  9. Children's Privacy
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Our website and services are not intended for children under the age of 16. We do not knowingly collect or store personal information from children under 16 years of age.
                </p>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If we discover that we have inadvertently collected information from a child under 16, we will promptly delete such information from our records. If you believe we may have collected information from a child under 16, please contact us immediately at <a href="mailto:support@orionapptech.com" className="text-primary underline">support@orionapptech.com</a>.
                </p>
              </div>

              {/* Section 10 */}
              <div id="data-retention" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  10. Data Retention
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary depending on the type of information and purpose:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Website visitor data:</strong> Up to 24 months for analytics purposes</li>
                  <li><strong>Marketing communications:</strong> Until you unsubscribe or request deletion</li>
                  <li><strong>Client project data:</strong> Duration of the project plus 3 years for support and legal purposes</li>
                  <li><strong>Financial records:</strong> As required by tax and accounting regulations (typically 7 years)</li>
                  <li><strong>Job applications:</strong> Up to 2 years after the recruitment process</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  After the retention period expires, we securely delete or anonymize your personal information.
                </p>
              </div>

              {/* Section 11 */}
              <div id="policy-changes" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  11. Changes to This Privacy Policy
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion App Tech reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Update the "Last Updated" date at the top of this policy</li>
                  <li>Post the revised policy on our website</li>
                  <li>Notify you via email if the changes are significant (for registered users and clients)</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our website or services after changes are posted constitutes your acceptance of the revised policy.
                </p>
              </div>

              {/* Section 12 */}
              <div id="contact" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  12. Contact Us
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us:
                </p>
                
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
                  <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                    Orion App Tech
                  </h4>
                  <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                    <li>
                      <strong>General Inquiries:</strong>{" "}
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
                      <strong>Response Time:</strong> Within 8 hours during business days
                    </li>
                    <li>
                      <strong>Website:</strong>{" "}
                      <a href="https://orionapptech.com" className="text-primary underline">
                        orionapptech.com
                      </a>
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We are committed to resolving any privacy concerns you may have and typically respond to all inquiries within 8 hours during business days.
                </p>
              </div>
            </div>

            {/* Acceptance Notice */}
            <div className="mt-12 border-t border-stroke pt-8 dark:border-dark-3">
              <p className="text-center text-sm text-body-color dark:text-body-color-dark">
                By using our website or services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
