import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16 bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="fade-in text-4xl sm:text-5xl font-bold mb-6 text-[#a259ff]">
            Contact Us
          </h1>
          <p className="fade-in-delay-1 text-lg text-[#d0d0d0] max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries, support, or to discuss your next project.
            We're here to help you succeed and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 shadow-2xl fade-in">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                <p className="text-[#d0d0d0] leading-relaxed">
                  Malviya National Institute of Technology<br />
                  Jaipur, Rajasthan, India
                </p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:gaurishankarbajpai9565@gmail.com"
                  className="text-[#a259ff] hover:text-white transition-colors duration-300"
                >
                  gaurishankarbajpai9565@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a
                  href="tel:+919628399841"
                  className="text-[#a259ff] hover:text-white transition-colors duration-300"
                >
                  +91 9628399841
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 shadow-2xl fade-in-delay-1">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Business Hours</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-[#d0d0d0]">Monday - Friday</span>
                <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-[#d0d0d0]">Saturday</span>
                <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-[#d0d0d0]">Sunday</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#a259ff]/10 rounded-xl border border-[#a259ff]/20">
              <p className="text-[#a259ff] text-center">
                <strong>Need help outside business hours?</strong><br />
                <span className="text-sm text-[#d0d0d0]">Send us an email and we'll respond within 24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8 fade-in-delay-2">Connect With Us</h2>
          
          <div className="flex justify-center space-x-6 fade-in-delay-2">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#5e2ccf] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#a259ff]/50"
            >
              <Linkedin className="h-8 w-8 text-white" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#5e2ccf] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#a259ff]/50"
            >
              <Instagram className="h-8 w-8 text-white" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#5e2ccf] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#a259ff]/50"
            >
              <Twitter className="h-8 w-8 text-white" />
            </a>
            <a
              href="mailto:gaurishankarbajpai9565@gmail.com"
              className="w-16 h-16 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#5e2ccf] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#a259ff]/50"
            >
              <Mail className="h-8 w-8 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 shadow-2xl fade-in-delay-3">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-[#d0d0d0] text-lg mb-8 leading-relaxed">
              Don't hesitate to reach out. We're excited to learn about your project and help you bring it to life.
            </p>
            <a
              href="/lets-talk"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#a259ff] hover:bg-[#5e2ccf] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#a259ff]/50"
            >
              Let's Talk
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;