import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Layout, 
  Settings, 
  Palette,
  ArrowRight,
  Check
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[#a259ff]" />,
      title: 'Static Website Development',
      description: 'We design fast, lightweight, and SEO-friendly static websites ideal for showcasing businesses, portfolios, blogs, and landing pages. These sites are built with clean, maintainable code and optimized for performance and visibility on search engines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Fully responsive design',
        'SEO-optimized HTML/CSS',
        'Custom layouts based on your brand',
        'Contact form integration',
        'Fast loading time',
        'Deployment assistance'
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[#a259ff]" />,
      title: 'Dynamic Web Apps',
      description: 'We build scalable and interactive web applications using modern technologies like React, Next.js, and Node.js. Perfect for platforms that require user interactions, admin dashboards, and real-time updates.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Fully responsive & interactive UI',
        'Dynamic routing & APIs',
        'Admin panel & user authentication',
        'State management (Redux, Context API)',
        'Database integration (MongoDB, PostgreSQL)',
        'Deployment on cloud (Vercel, Render, etc.)'
      ]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-[#a259ff]" />,
      title: 'E-commerce Development',
      description: 'Get a fully functional online store built with powerful features like secure payments, product catalogs, and order management. Ideal for businesses looking to sell online with ease and flexibility.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Product catalog with categories',
        'Shopping cart & checkout flow',
        'Payment gateway integration (Stripe, Razorpay)',
        'Admin dashboard for product/order management',
        'Inventory & shipping management',
        'Mobile-optimized design'
      ]
    },
    {
      icon: <Layout className="h-12 w-12 text-[#a259ff]" />,
      title: 'Landing Pages',
      description: 'We craft high-converting landing pages designed to maximize lead generation and boost conversions. Ideal for product launches, marketing campaigns, and paid ads.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Fully responsive and mobile-optimized layout',
        'Strategic content structure (copy + visuals)',
        'Call-to-action integration (forms, buttons)',
        'Fast-loading performance',
        'Custom design matching your brand',
        'Analytics integration (Google Analytics, Facebook Pixel)'
      ]
    },
    {
      icon: <Settings className="h-12 w-12 text-[#a259ff]" />,
      title: 'Maintenance & Support',
      description: 'Stay worry-free with our ongoing website maintenance and support services. We handle everything from updates to security so your website runs smoothly 24/7.',
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Regular website backups',
        'Security patching and monitoring',
        'CMS/plugin updates (if applicable)',
        'Uptime monitoring',
        'Bug fixes and minor edits',
        'Priority support via email/chat'
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-[#a259ff]" />,
      title: 'UI/UX Design',
      description: 'Get user-first digital experiences designed for both form and function. We create wireframes and design systems that are intuitive, accessible, and visually appealing.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Wireframes and design mockups (Figma/Adobe XD)',
        'User flow and navigation planning',
        'Custom iconography and illustrations',
        'Mobile-first, responsive layout designs',
        'Design systems & style guides',
        'Handoff-ready assets for developers'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="fade-in text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="fade-in-delay-1 text-lg sm:text-xl text-[#d0d0d0] mb-12 max-w-3xl mx-auto">
            We provide comprehensive web development solutions to help your business succeed online.
            From simple static sites to complex web applications, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card glass-effect rounded-2xl overflow-hidden fade-in-delay-${index + 1} group hover:scale-105 transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-[#d0d0d0] mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-[#d0d0d0]">
                          <Check className="h-5 w-5 text-[#a259ff] mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/lets-talk"
                    className="btn-primary w-full py-3 rounded-xl font-semibold inline-flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Tech GS</h2>
            <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto">
              We deliver exceptional results with cutting-edge technology and proven methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-delay-1">
              <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <Globe className="h-8 w-8 text-[#a259ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Modern Technology</h3>
              <p className="text-[#d0d0d0]">Built with the latest web technologies and frameworks</p>
            </div>
            
            <div className="text-center fade-in-delay-2">
              <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <Settings className="h-8 w-8 text-[#a259ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Custom Solutions</h3>
              <p className="text-[#d0d0d0]">Tailored to your specific business needs and goals</p>
            </div>
            
            <div className="text-center fade-in-delay-3">
              <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <Smartphone className="h-8 w-8 text-[#a259ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Mobile First</h3>
              <p className="text-[#d0d0d0]">Responsive designs that work perfectly on all devices</p>
            </div>
            
            <div className="text-center fade-in-delay-4">
              <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                <Palette className="h-8 w-8 text-[#a259ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Beautiful Design</h3>
              <p className="text-[#d0d0d0]">Stunning visuals that engage and convert visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-[#d0d0d0] text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lets-talk"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="glass-effect px-8 py-4 rounded-xl text-lg font-semibold border-2 border-[#a259ff] hover:bg-[#a259ff]/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;