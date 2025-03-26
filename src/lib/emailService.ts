import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // Replace these with your EmailJS service details
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    
    // Form data to send
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    };

    // Initialize EmailJS with your public key
    emailjs.init(publicKey);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    if (response.status === 200) {
      return true;
    } else {
      console.error('Failed to send email:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
} 