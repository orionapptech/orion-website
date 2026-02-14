import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | Orion App Tech",
  description: "Understand Orion App Tech's refund and cancellation policy for software development services. Learn about our fair and transparent approach to project terminations and refunds.",
  keywords: "refund policy, cancellation policy, refunds, project cancellation, Orion App Tech",
};

const RefundPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Refund and Cancellation Policy"
        description="Our transparent policy on refunds and project cancellations."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Refund and Cancellation Policy
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                At Orion App Tech, we strive to deliver exceptional custom software development services that exceed our clients' expectations. This policy outlines our approach to refunds and cancellations, which reflects the unique nature of custom software development as a service-based business. Please read this policy carefully before engaging our services.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 rounded-lg border border-stroke bg-gray-2 p-6 dark:border-dark-3 dark:bg-dark-2">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Table of Contents
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#understanding" className="text-primary hover:underline">
                    1. Understanding Our Service Model
                  </a>
                </li>
                <li>
                  <a href="#payment-structure" className="text-primary hover:underline">
                    2. Payment Structure
                  </a>
                </li>
                <li>
                  <a href="#refund-eligibility" className="text-primary hover:underline">
                    3. Refund Eligibility
                  </a>
                </li>
                <li>
                  <a href="#cancellation-terms" className="text-primary hover:underline">
                    4. Project Cancellation Terms
                  </a>
                </li>
                <li>
                  <a href="#non-refundable" className="text-primary hover:underline">
                    5. Non-Refundable Scenarios
                  </a>
                </li>
                <li>
                  <a href="#dispute-resolution" className="text-primary hover:underline">
                    6. Dispute Resolution Process
                  </a>
                </li>
                <li>
                  <a href="#refund-process" className="text-primary hover:underline">
                    7. How to Request a Refund
                  </a>
                </li>
                <li>
                  <a href="#exceptional-circumstances" className="text-primary hover:underline">
                    8. Exceptional Circumstances
                  </a>
                </li>
                <li>
                  <a href="#service-guarantee" className="text-primary hover:underline">
                    9. Our Service Delivery Guarantee
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:underline">
                    10. Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div id="understanding" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  1. Understanding Our Service Model
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  1.1 Custom Software Development Services
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Orion App Tech provides <strong>custom software development services</strong>, not off-the-shelf products. Each project is tailored to the specific requirements, specifications, and business needs of individual clients. This means:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Every project involves unique planning, design, and development work</li>
                  <li>Time and resources are allocated specifically for your project</li>
                  <li>Team members are assigned based on project requirements and timeline</li>
                  <li>Development work begins immediately upon project initiation</li>
                  <li>The work product is customized and cannot be resold to other clients</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  1.2 Why Standard Refund Policies Don't Apply
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Unlike physical products or standardized software licenses, custom software development involves:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Significant upfront investment:</strong> Planning, research, architecture design, and team allocation</li>
                  <li><strong>Progressive delivery:</strong> Work is delivered in stages with client feedback and approval at each milestone</li>
                  <li><strong>Intellectual effort:</strong> Creative and technical work that, once performed, cannot be "returned"</li>
                  <li><strong>Resource commitment:</strong> Dedicated team members whose time is allocated exclusively to your project</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  For these reasons, our refund policy is structured around the work-for-payment principle: <strong>you pay for the work we complete</strong>.
                </p>
              </div>

              {/* Section 2 */}
              <div id="payment-structure" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  2. Payment Structure
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Our typical payment structure for custom software development projects is milestone-based:
                </p>
                
                <div className="mb-6 space-y-4">
                  <div className="rounded-lg border border-stroke bg-gray-2 p-4 dark:border-dark-3 dark:bg-dark-2">
                    <h5 className="mb-2 font-semibold text-black dark:text-white">
                      Phase 1: Advance Payment (30%)
                    </h5>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Due upon signing the agreement. Covers:
                    </p>
                    <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-body-color dark:text-body-color-dark">
                      <li>Initial project setup and planning</li>
                      <li>Requirements gathering and documentation</li>
                      <li>Technical architecture design</li>
                      <li>Team allocation and project kickoff</li>
                      <li>Development environment setup</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-stroke bg-gray-2 p-4 dark:border-dark-3 dark:bg-dark-2">
                    <h5 className="mb-2 font-semibold text-black dark:text-white">
                      Phase 2: Midway Payment (40%)
                    </h5>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Due upon completion of mid-project milestones. Covers:
                    </p>
                    <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-body-color dark:text-body-color-dark">
                      <li>Core development work</li>
                      <li>Feature implementation</li>
                      <li>Mid-project review and adjustments</li>
                      <li>Initial testing and quality assurance</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-stroke bg-gray-2 p-4 dark:border-dark-3 dark:bg-dark-2">
                    <h5 className="mb-2 font-semibold text-black dark:text-white">
                      Phase 3: Final Payment (30%)
                    </h5>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Due upon project completion before final delivery. Covers:
                    </p>
                    <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-body-color dark:text-body-color-dark">
                      <li>Final testing and bug fixes</li>
                      <li>Documentation and training</li>
                      <li>Deployment assistance</li>
                      <li>Source code transfer</li>
                      <li>Post-launch support (warranty period)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>Note:</strong> Specific payment schedules may vary based on project size, duration, and complexity, and will be outlined in your project proposal or Statement of Work (SOW).
                </p>
              </div>

              {/* Section 3 */}
              <div id="refund-eligibility" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  3. Refund Eligibility
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.1 Before Project Commencement
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you decide to cancel before development work begins (after payment but before the kickoff meeting):
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Eligible for partial refund:</strong> Advance payment minus setup costs (typically 10-15% for administrative processing, initial consultation, and documentation)</li>
                  <li><strong>Timeframe:</strong> Cancellation must be within 48 hours of payment and before the project kickoff meeting</li>
                  <li><strong>Refund amount:</strong> 85-90% of advance payment</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.2 After Project Starts (Early Stage)
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you cancel during the first milestone (before midway payment):
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Eligible for prorated refund:</strong> Advance payment minus the value of work completed up to cancellation date</li>
                  <li><strong>Assessment:</strong> Our team will provide a detailed breakdown of hours worked and deliverables completed</li>
                  <li><strong>Work delivery:</strong> You will receive all work completed to date upon processing the final invoice</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.3 Mid-Project or Later Stages
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you cancel after the midway milestone:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Completed milestones:</strong> Non-refundable (work has been delivered and approved)</li>
                  <li><strong>Current milestone:</strong> Prorated based on percentage of work completed</li>
                  <li><strong>Remaining milestones:</strong> No payment required if work hasn't started</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  3.4 After Project Completion
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Once the project is completed and delivered:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>No refunds available:</strong> All work has been delivered according to specifications</li>
                  <li><strong>Warranty support:</strong> Bug fixes during the warranty period (typically 30-90 days) are covered at no additional charge</li>
                  <li><strong>Dispute resolution:</strong> If you're unsatisfied with the deliverables, please refer to Section 6</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div id="cancellation-terms" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  4. Project Cancellation Terms
                </h3>
                
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  4.1 Cancellation by Client
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>Notice Requirement:</strong> 7 business days' written notice via email to support@orionapptech.com
                </p>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>Financial Settlement:</strong>
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Payment for all completed milestones</li>
                  <li>Prorated payment for current in-progress milestone based on work completed</li>
                  <li>Any outstanding third-party costs already incurred (hosting setup, API licenses, etc.)</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>Work Delivery:</strong> Upon final payment settlement, you will receive:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>All completed and paid-for deliverables</li>
                  <li>Source code in current state</li>
                  <li>Documentation created to date</li>
                  <li>Asset files and design resources</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  4.2 Cancellation by Orion App Tech
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  In rare circumstances, we may need to cancel a project if:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Technical impossibility is discovered that makes the project unfeasible</li>
                  <li>Client repeatedly fails to provide necessary information, feedback, or approvals</li>
                  <li>Client requests work that violates laws or ethical standards</li>
                  <li>Force majeure events prevent project completion</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <strong>In such cases:</strong>
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Full refund of any unearned payments</li>
                  <li>Delivery of all work completed to date</li>
                  <li>Detailed explanation of the reasons for cancellation</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  4.3 Mutual Termination
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Both parties may agree to terminate the engagement amicably. In such cases, payment and delivery terms will be negotiated in good faith based on work completed.
                </p>
              </div>

              {/* Section 5 */}
              <div id="non-refundable" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  5. Non-Refundable Scenarios
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Refunds will <strong>not</strong> be provided in the following situations:
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.1 Client-Caused Delays
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Failure to provide required content, assets, or information in a timely manner</li>
                  <li>Delayed feedback or approval cycles</li>
                  <li>Lack of response to communications for extended periods (30+ days)</li>
                  <li>Repeated changes to project scope without formal change requests</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.2 Scope Changes and Feature Creep
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Dissatisfaction due to features not included in the original scope</li>
                  <li>Requests for changes after approval of specifications</li>
                  <li>Expectations beyond what was agreed in the project proposal</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.3 Subjective Dissatisfaction
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>"Change of mind" after project has begun</li>
                  <li>Dissatisfaction with approved designs or features</li>
                  <li>Personal preference changes that don't relate to technical deficiencies</li>
                  <li>Lack of feedback during development leading to misalignment</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.4 Third-Party Costs Already Incurred
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Domain registrations and SSL certificates purchased on your behalf</li>
                  <li>Hosting setup fees and initial subscription periods</li>
                  <li>Third-party API licenses or subscriptions</li>
                  <li>App store developer accounts (Apple, Google)</li>
                  <li>Premium plugins, libraries, or software licenses</li>
                  <li>Stock assets or fonts purchased specifically for the project</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.5 Completed and Approved Deliverables
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Work that has been reviewed, approved, and accepted by the client</li>
                  <li>Milestones that have been signed off</li>
                  <li>Deliverables that meet the agreed specifications</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  5.6 Business Outcome Expectations
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Specific sales, revenue, or conversion targets not achieved</li>
                  <li>User acquisition or engagement metrics below expectations</li>
                  <li>Search engine rankings or SEO performance</li>
                  <li>App store featured placement or download numbers</li>
                  <li>Social media virality or market reception</li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <em>We deliver quality software solutions, but business success depends on many factors beyond our control, including marketing, market conditions, competition, and business strategy.</em>
                </p>
              </div>

              {/* Section 6 */}
              <div id="dispute-resolution" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  6. Dispute Resolution Process
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you're dissatisfied with deliverables or have concerns about the project, we encourage you to:
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Step 1: Raise Concerns Promptly
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Contact us within <strong>7 days</strong> of receiving a milestone delivery</li>
                  <li>Provide specific, detailed feedback about what doesn't meet expectations</li>
                  <li>Reference the original specifications and point out discrepancies</li>
                  <li>Email: <a href="mailto:support@orionapptech.com" className="text-primary underline">support@orionapptech.com</a></li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Step 2: Revision Attempts
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>We will work with you in good faith to resolve the issues</li>
                  <li>Typically includes 2-3 rounds of revisions per milestone</li>
                  <li>Revisions must address legitimate deficiencies (not scope changes)</li>
                  <li>Clear communication and collaboration during this phase</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Step 3: Mediation
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>If revisions don't resolve the dispute, we'll arrange a meeting between project stakeholders</li>
                  <li>Review original specifications and expectations</li>
                  <li>Seek mutually acceptable solutions</li>
                  <li>May involve senior management or technical leads</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Step 4: Formal Resolution
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>If mediation fails, formal dispute resolution as per Terms and Conditions</li>
                  <li>Independent technical assessment may be conducted</li>
                  <li>Resolution based on whether deliverables meet original specifications</li>
                </ul>

                <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-base leading-relaxed text-body-color dark:bg-primary/10 dark:text-body-color-dark">
                  <strong>Our Commitment:</strong> We genuinely want every client to be satisfied. The vast majority of concerns are resolved in Steps 1-2 through clear communication and reasonable revisions. We approach every dispute with good faith and a commitment to fair outcomes.
                </p>
              </div>

              {/* Section 7 */}
              <div id="refund-process" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  7. How to Request a Refund
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you believe you're eligible for a refund based on this policy:
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.1 Submit a Written Request
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Send an email to <a href="mailto:support@orionapptech.com" className="text-primary underline">support@orionapptech.com</a></li>
                  <li>Subject line: "Refund Request - [Project Name/ID]"</li>
                  <li>Include your name, company, project details, and invoice numbers</li>
                  <li>Clearly state the reason for the refund request</li>
                  <li>Provide any supporting documentation or evidence</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.2 Review Process
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>We will acknowledge your request within 2 business days</li>
                  <li>Our team will review your case against this policy</li>
                  <li>May request additional information or clarification</li>
                  <li>Review typically completed within 5-7 business days</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.3 Refund Processing
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If your refund is approved:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Timeline:</strong> Processed within 15-30 business days</li>
                  <li><strong>Method:</strong> Refund via the original payment method</li>
                  <li><strong>Deductions:</strong> Payment processing fees (typically 2-5%) may be deducted from the refund amount</li>
                  <li><strong>Confirmation:</strong> You'll receive a refund confirmation email with transaction details</li>
                  <li><strong>Bank processing:</strong> May take an additional 5-10 business days depending on your financial institution</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  7.4 International Refunds
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  For international transactions:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Currency conversion rates apply as per the date of refund processing</li>
                  <li>International wire transfer fees may be deducted</li>
                  <li>Processing time may be longer (up to 45 days in some regions)</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div id="exceptional-circumstances" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  8. Exceptional Circumstances
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Refunds or special considerations may be granted in exceptional circumstances:
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  8.1 Force Majeure Events
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Natural disasters, pandemics, or health emergencies</li>
                  <li>War, terrorism, or civil unrest</li>
                  <li>Government actions preventing project completion</li>
                  <li>Major infrastructure failures beyond anyone's control</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  8.2 Technical Impossibility
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Discovery of insurmountable technical barriers</li>
                  <li>Third-party API or service discontinuation</li>
                  <li>Platform restrictions not foreseeable at project start</li>
                  <li>Legal or regulatory changes making the project impossible</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  8.3 Mutual Agreement
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  In cases where both parties agree that continuing the project is not in anyone's best interest, we will negotiate a fair settlement that considers work completed and expenses incurred.
                </p>
              </div>

              {/* Section 9 */}
              <div id="service-guarantee" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  9. Our Service Delivery Guarantee
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  While we maintain a firm refund policy that reflects the realities of custom software development, we stand behind the quality of our work:
                </p>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  9.1 Quality Commitment
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>All deliverables will meet the specifications outlined in the project agreement</li>
                  <li>Code quality follows industry best practices and standards</li>
                  <li>Thorough testing before milestone delivery</li>
                  <li>Responsive and professional communication throughout the project</li>
                  <li>Adherence to agreed timelines (barring client-caused delays)</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  9.2 Post-Launch Support
                </h4>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li><strong>Warranty Period:</strong> Typically 30-90 days post-launch (as specified in your agreement)</li>
                  <li><strong>Bug Fixes:</strong> Free resolution of defects discovered during the warranty period</li>
                  <li><strong>Technical Support:</strong> Assistance with deployment, setup, and initial configuration</li>
                  <li><strong>Documentation:</strong> Comprehensive technical and user documentation</li>
                  <li><strong>Knowledge Transfer:</strong> Training sessions for your team (if included in the agreement)</li>
                </ul>

                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  9.3 Ongoing Maintenance (Optional)
                </h4>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Beyond the warranty period, we offer:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-body-color dark:text-body-color-dark">
                  <li>Monthly or annual maintenance contracts</li>
                  <li>Priority support and updates</li>
                  <li>Feature enhancements and iterative improvements</li>
                  <li>Performance optimization and security updates</li>
                </ul>

                <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
                  <h5 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Our Track Record
                  </h5>
                  <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                    <li>✓ <strong>100+ projects</strong> successfully delivered</li>
                    <li>✓ <strong>8+ years</strong> of industry experience</li>
                    <li>✓ <strong>40+ expert</strong> team members</li>
                    <li>✓ <strong>10M+ users</strong> served by our solutions</li>
                    <li>✓ <strong>95%+ client</strong> satisfaction rate</li>
                  </ul>
                </div>
              </div>

              {/* Section 10 */}
              <div id="contact" className="scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  10. Contact Us
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  If you have questions about this Refund and Cancellation Policy, need to request a refund, or have concerns about your project:
                </p>
                
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
                  <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                    Orion App Tech
                  </h4>
                  <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                    <li>
                      <strong>Refund Requests & Support:</strong>{" "}
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
                  We are committed to addressing all concerns fairly and transparently. Our goal is not just to deliver software, but to build lasting partnerships with our clients.
                </p>
              </div>
            </div>

            {/* Policy Updates Notice */}
            <div className="mt-12 border-t border-stroke pt-8 dark:border-dark-3">
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                Policy Updates
              </h4>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Orion App Tech reserves the right to modify this Refund and Cancellation Policy at any time. Changes will be posted on our website with an updated "Last Updated" date. Material changes will be communicated to active clients via email.
              </p>
              <p className="text-center text-sm text-body-color dark:text-body-color-dark">
                By engaging our services, you acknowledge that you have read, understood, and agree to this Refund and Cancellation Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicyPage;
