/**
 * Alternative SMTP Configuration for Hostinger
 * Try this if port 465 doesn't work
 */

// Option 1: Port 587 with STARTTLS (Most Compatible)
export const smtpConfig587 = {
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false, // false for STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3',
  },
};

// Option 2: Port 465 with SSL (Secure)
export const smtpConfig465 = {
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

// Option 3: Alternative Hostinger SMTP (some accounts use this)
export const smtpConfigAlt = {
  host: 'mail.orionapptech.com', // Sometimes domain-specific
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

/**
 * How to use:
 * 
 * In src/app/api/send-email/route.ts, replace the transporter creation with:
 * 
 * import { smtpConfig587 } from '@/config/smtp';
 * const transporter = nodemailer.createTransporter(smtpConfig587);
 * 
 * Or try each configuration until one works.
 */

console.log('SMTP Configuration Options:');
console.log('1. Port 587 (STARTTLS) - Most compatible');
console.log('2. Port 465 (SSL) - More secure');
console.log('3. Domain-specific host - For some Hostinger accounts');
