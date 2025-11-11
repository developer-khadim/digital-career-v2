import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  Sparkles,
  Send,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/digital-career-agency-76a00537b", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579067426818", label: "Facebook" },
  ];

  const services = [
    "UI/UX Design",
    "Web Development",
    "3D Designs",
    "Motion Graphics",
    "Brand Strategy",
    "Digital Marketing",
  ];

  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Work", path: "/projects" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  const contactInfo = [
    { icon: Mail, text: "digitalcareeerit@gmail.com" },
    { icon: FaWhatsapp, text: "+92 307 2645564" },
    { icon: MapPin, text: "Karachi, Sindh, Pakistan" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"></div>
      </div>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>

      <div className="relative container mx-auto max-w-8xl px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src="./dc.png" alt="Digital Career Logo" className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                Digital Career
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Empowering brands through innovative solutions. Let's build
              something extraordinary together.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 text-gray-400 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-gray-800"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-lime-400"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <div className="flex items-center gap-2 group cursor-pointer text-gray-400 hover:text-lime-400 transition-all duration-300 text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lime-400" />
                    <span>{service}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-lime-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 group text-gray-400 hover:text-lime-400 transition-all duration-300 text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lime-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-lime-400"></span>
              Stay Connected
            </h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-gray-400 hover:text-lime-400 transition-colors duration-300 group"
                >
                  <contact.icon className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-lime-400" />
                  <span className="text-xs sm:text-sm leading-relaxed">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter Box */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-800 hover:border-lime-400/30 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-lime-400" />
                <p className="text-xs sm:text-sm text-white font-semibold">
                  Subscribe to Newsletter
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2.5 sm:py-3 pr-12 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all text-xs sm:text-sm placeholder:text-gray-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-lime-400 text-black p-2 rounded-lg hover:bg-lime-500 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={subscribed}
                >
                  {subscribed ? (
                    <span className="text-xs px-1">✓</span>
                  ) : (
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-lime-400 font-semibold mt-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>&copy; 2024 Digital Career. All rights reserved.</p>
              <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
              <p className="flex items-center gap-2">
                Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-lime-400 font-semibold">Khadim Ali</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
              ].map((item) => (
                <button
                  key={item}
                  className="hover:text-lime-400 transition-colors font-medium text-xs sm:text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-lime-400 text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-110 hover:bg-lime-500 transition-all shadow-lg hover:shadow-lime-400/50 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
