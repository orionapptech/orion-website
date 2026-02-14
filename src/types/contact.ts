/**
 * Contact Form Types
 * Type definitions for contact form data and API responses
 */

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  message: string;
  formSource: 'home' | 'contact';
}

// API response interface
export interface ContactApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Form submission state
export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

// Validation errors
export interface ValidationErrors {
  [key: string]: string;
}
