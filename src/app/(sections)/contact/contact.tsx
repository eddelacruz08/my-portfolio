"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

// Define the contact form schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

// Type for the form data
type ContactFormData = z.infer<typeof contactSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    setIsInitialized(true);
  }, []);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!isInitialized) {
      setSubmitError('Email service not initialized. Please try again later.');
      return;
    }

    try {
      // Prepare the email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'edmondelacruz110@gmail.com' // The email that will receive the message
      };

      // Send the email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        console.log('Email sent successfully!', response);
        // Clear form after successful submission
        reset();
        
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to send email. Please try again.');
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 dark:bg-zinc-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-emerald-700 dark:bg-emerald-500 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="mt-4 text-lg text-gray-800 dark:text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <FaEnvelope className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-400">Email</h3>
                <p className="text-gray-800 dark:text-white">edmonddelacruz8@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <FaPhoneAlt className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-400">Phone</h3>
                <p className="text-gray-800 dark:text-white">+63 926 123 4567</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <FaMapMarkerAlt className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-400">Location</h3>
                <p className="text-gray-800 dark:text-white">Taguig City, Metro Manila, Philippines</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <FaLinkedin className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-400">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/edmon-dela-cruz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  linkedin.com/in/edmon-dela-cruz
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <FaGithub className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-400">GitHub</h3>
                <a 
                  href="https://github.com/eddelacruz08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  github.com/eddelacruz08
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-3 bg-gray-200 dark:bg-zinc-800 backdrop-blur-sm rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">Send Me a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-emerald-100/80 dark:bg-emerald-900/20 border border-emerald-400 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded">
                <p>Thank you for your message! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {submitError && (
                  <div className="bg-red-100/80 dark:bg-red-900/20 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
                    <p>{submitError}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-white"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-white"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-white"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 dark:hover:bg-emerald-600 transition-colors duration-300 disabled:opacity-50 w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 