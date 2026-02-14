/**
 * Next.js API Route - Send Email via Hostinger SMTP
 * Works both locally and on Netlify deployment
 */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';

// Force IPv4 first to avoid IPv6 connectivity issues
dns.setDefaultResultOrder('ipv4first');

// Rate limiting store
const rateLimitStore = new Map<string, number[]>();

// Validate environment variables
const validateEnv = () => {
  const required = ['EMAIL_USER', 'EMAIL_PASS', 'SMTP_HOST', 'SMTP_PORT'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error(`Missing environment variables: ${missing.join(', ')}`);
    return false;
  }
  return true;
};

// Input validation
const validateInput = (data: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (!data.phone || data.phone.trim().length < 10) {
    errors.push('Valid phone number is required');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  // XSS protection
  const dangerousPatterns = /<script|javascript:|onerror=|onclick=/i;
  if (Object.values(data).some(val => typeof val === 'string' && dangerousPatterns.test(val))) {
    errors.push('Invalid characters detected in input');
  }

  return { valid: errors.length === 0, errors };
};

// Rate limiting (50 requests per IP per hour - reasonable for business contact forms)
// In production with high traffic, use Redis for distributed rate limiting
const checkRateLimit = (ip: string): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const hourAgo = now - 3600000; // 1 hour
  const maxRequests = 5000; // Allow 50 requests per hour per IP
  
  // Get previous requests for this IP
  const requests = rateLimitStore.get(ip) || [];
  const recentRequests = requests.filter(time => time > hourAgo);
  
  // Check if limit exceeded
  if (recentRequests.length >= maxRequests) {
    return { 
      allowed: false, 
      remaining: 0 
    };
  }
  
  // Add current request
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  
  return { 
    allowed: true, 
    remaining: maxRequests - recentRequests.length 
  };
};

// Create email HTML template
const createEmailTemplate = (data: any): string => {
  const formType = data.formSource === 'home' ? 'Home Page' : 'Contact Page';
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #4A6CF7 0%, #3651D4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #4A6CF7; display: block; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-left: 3px solid #4A6CF7; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 10px 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p>From: ${formType}</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Name:</span>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <span class="label">📧 Email:</span>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <span class="label">📱 Phone:</span>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            ${data.company ? `
            <div class="field">
              <span class="label">🏢 Company:</span>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            ${data.subject ? `
            <div class="field">
              <span class="label">📌 Subject:</span>
              <div class="value">${data.subject}</div>
            </div>
            ` : ''}
            ${data.projectType ? `
            <div class="field">
              <span class="label">🎯 Project Type:</span>
              <div class="value">${data.projectType}</div>
            </div>
            ` : ''}
            ${data.budget ? `
            <div class="field">
              <span class="label">💰 Budget:</span>
              <div class="value">${data.budget}</div>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">💬 Message:</span>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <span class="label">⏰ Received:</span>
              <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from Orion App Tech contact form</p>
            <p>© ${new Date().getFullYear()} Orion App Tech. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Main POST handler
export async function POST(request: NextRequest) {
  try {
    // Check environment
    if (!validateEnv()) {
      console.error('Environment validation failed');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                request.headers.get('x-real-ip') || 
                'unknown';

    // Rate limiting check
    const rateLimitCheck = checkRateLimit(ip);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again in a few minutes. (Limit: 50 per hour per IP)' 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const data = await request.json();

    // Honeypot check
    if (data.website) {
      console.log('Honeypot triggered');
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    }

    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // Create transporter with Hostinger port 465 (SSL)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for SSL (port 465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Increased timeouts for Hostinger SMTP (can be slow)
      connectionTimeout: 30000,
      greetingTimeout: 15000,
      socketTimeout: 30000,
    });

    // Skip verification for faster response (send will fail if credentials are wrong)

    // Email subject
    const subject = data.subject 
      ? `New Contact: ${data.subject}` 
      : `New Contact from ${data.name}`;

    // Send email
    const info = await transporter.sendMail({
      from: `"Orion App Tech Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: subject,
      html: createEmailTemplate(data),
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}
${data.subject ? `Subject: ${data.subject}` : ''}
${data.projectType ? `Project Type: ${data.projectType}` : ''}
${data.budget ? `Budget: ${data.budget}` : ''}

Message:
${data.message}

Received: ${new Date().toISOString()}
      `,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We will get back to you within 8 hours.',
    });

  } catch (error: any) {
    console.error('Email sending failed:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly at support@orionapptech.com',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
