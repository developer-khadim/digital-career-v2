import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

// Service options extracted from your data.js
const services = [
  "Frontend Engineers",
  "Full-stack Engineers",
  "Android Developers",
  "AI ML Engineers",
  "UI UX Engineers",
  "Data Scientists",
  "WordPress Developers",
  "Video Editing",
  "Photo Editing",
  "CSIT Degree Assignments",
  "Academic Assignment",
  "Social Media Marketing"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', service: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-7xl container mx-auto py-16">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our services? Reach out and let&apos;s start a conversation.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-16   rounded-3xl shadow-2xl p-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-400">+92 307 2645564</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-400">digitalcareeerit@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office</h3>
                  <p className="text-gray-400">123 Creative Street<br />Karachi, Sindh Pakistan</p>
                </div>
              </div> */}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-lg font-medium mb-2">What service do you need?</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, idx) => (
                    <option value={service} key={idx}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-black py-4 rounded-lg font-bold hover:bg-lime-300 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
