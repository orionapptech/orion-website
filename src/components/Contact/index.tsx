"use client";

import { useState, FormEvent } from "react";
import type { ContactFormData, FormState } from "@/types/contact";

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });

    const formElement = e.currentTarget;
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
      subject: formData.get('subject') as string || undefined,
      message: formMessage,
      formSource: 'home',
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
        
        // Reset form
        formElement.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSuccess: false, message: '' }));
        }, 5000);
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
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isError: false, message: '' }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-gradient-to-br from-white via-primary/5 to-white dark:from-bg-color-dark dark:via-primary/10 dark:to-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="glass-card mb-12 rounded-2xl px-8 py-11 dark:glass-card-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Let's Build Something Great Together
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark">
                Get in touch with our team to discuss your project. We typically respond within 8 hours.
              </p>

              {/* Success Message */}
              {formState.isSuccess && (
                <div className="mb-8 rounded-lg bg-green-50 border border-green-200 p-4 dark:bg-green-900/20 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200">
                    ✅ {formState.message}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {formState.isError && (
                <div className="mb-8 rounded-lg bg-red-50 border border-red-200 p-4 dark:bg-red-900/20 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-200">
                    ❌ {formState.message}
                  </p>
                </div>
              )}

              {/* Submitting Message */}
              {formState.isSubmitting && (
                <div className="mb-8 rounded-lg bg-blue-50 border border-blue-200 p-4 dark:bg-blue-900/20 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <div className="animate-spin">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 dark:text-blue-200">
                        Sending your message...
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Please wait 0-15 seconds based on server load. We're getting it to our team! ⏳
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        disabled={formState.isSubmitting}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        disabled={formState.isSubmitting}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        disabled={formState.isSubmitting}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Brief project title"
                        disabled={formState.isSubmitting}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Query <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project requirements..."
                        required
                        disabled={formState.isSubmitting}
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none disabled:opacity-50"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button 
                      type="submit"
                      disabled={formState.isSubmitting}
                      className="hover-lift rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState.isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="glass-card rounded-2xl px-8 py-11 dark:glass-card-dark sm:p-[55px]">
              <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
                Contact Information
              </h3>
              
              <div className="mb-8 flex items-start">
                <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Global Offices
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Operating across USA, India, and Netherlands with services reply within 8 hours.
                  </p>
                </div>
              </div>

              <div className="mb-8 flex items-start">
                <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Email Us
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    support@orionapptech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Response Time
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Within 8 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
