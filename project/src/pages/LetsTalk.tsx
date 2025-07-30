import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { ConsultantService } from '../services/consultantService';
import type { ConsultantRequestInsert } from '../types/database';

const LetsTalk: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const requestData: ConsultantRequestInsert = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || undefined,
        company_name: formData.companyName || undefined,
        message: formData.message || undefined,
      };

      await ConsultantService.submitRequest(requestData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        agreeToTerms: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-[#d0d0d0] mb-6">
              Thank you for reaching out! We've received your request and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary px-6 py-3 rounded-xl font-semibold"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Let's <span className="gradient-text">Talk</span>
              </h1>
              <p className="text-lg text-[#d0d0d0] mb-8 leading-relaxed">
                We're ready to bring your project to life. Fill out the form and we'll get back to you soon.
              </p>
              
              {/* Gauri Shankar Section */}
              <div className="glass-effect p-6 rounded-2xl mb-8">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Gauri Shankar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">Gauri Shankar</h3>
                    <p className="text-[#a259ff] text-sm">Operations Manager</p>
                  </div>
                </div>
                <p className="text-[#d0d0d0] text-sm">
                  "I personally review every inquiry to ensure we provide the best solution for your needs."
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-[#d0d0d0]">
                  <Mail className="h-5 w-5 text-[#a259ff] mr-3" />
                  <span>gaurishankarbajpai9565@gmail.com</span>
                </div>
                <div className="flex items-center text-[#d0d0d0]">
                  <Phone className="h-5 w-5 text-[#a259ff] mr-3" />
                  <span>+91 9628399841</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="fade-in-delay-1">
              <div className="glass-effect p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a259ff]" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a259ff] transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-white font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a259ff] transition-colors duration-300"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a259ff]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a259ff] transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a259ff]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a259ff] transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-[#a259ff]" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a259ff] transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3 h-4 w-4 text-[#a259ff] bg-[#0a0a0a] border-gray-700 rounded focus:ring-[#a259ff] focus:ring-2"
                    />
                    <label htmlFor="agreeToTerms" className="text-[#d0d0d0] text-sm">
                      I agree to the{' '}
                      <a href="#" className="text-[#a259ff] hover:text-white transition-colors duration-300">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-[#a259ff] hover:text-white transition-colors duration-300">
                        Terms of Service
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms}
                    className="w-full btn-primary py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-effect p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="text-white font-bold">24h</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Quick Response</h3>
              <p className="text-[#d0d0d0] text-sm">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="text-white font-bold">💬</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Free Consultation</h3>
              <p className="text-[#d0d0d0] text-sm">Get expert advice at no cost</p>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Custom Solutions</h3>
              <p className="text-[#d0d0d0] text-sm">Tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetsTalk;