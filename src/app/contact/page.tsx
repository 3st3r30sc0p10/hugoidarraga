'use client';

import React, { useState } from 'react';
import SectionLayout from '../components/SectionLayout';

interface ContactMethod {
  type: string;
  value: string;
  icon: string;
  link?: string;
}

const contactMethods: ContactMethod[] = [
  {
    type: "Email",
    value: "hugo.idarraga@duke.edu",
    icon: "✉️",
    link: "mailto:hugo.idarraga@duke.edu"
  },
  {
    type: "Office",
    value: "Smith Warehouse, Bay 10, Duke University",
    icon: "🏛️"
  },
  {
    type: "Academic Profile",
    value: "Duke University Profile",
    icon: "🎓",
    link: "https://duke.edu/profile"
  },
  {
    type: "Social",
    value: "Follow on Twitter/X",
    icon: "🐦",
    link: "https://twitter.com/username"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <SectionLayout title="Contact">
      <p className="mb-8">
        Feel free to reach out for collaborations, research inquiries, or general discussions about AI, critical theory, and technology.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl" role="img" aria-label={method.type}>
                  {method.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{method.type}</h3>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-accent hover:text-dark transition-colors duration-300"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-gray-700">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="Message subject"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="Your message..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-accent hover:bg-dark text-white'
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </section>
      </div>
    </SectionLayout>
  );
} 