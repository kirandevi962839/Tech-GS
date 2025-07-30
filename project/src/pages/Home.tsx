import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Scale, Search, Smartphone, Star, Clock, DollarSign, Users, Target, Award, TrendingUp } from 'lucide-react';
import ReviewsSlider from '../components/ReviewsSlider';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-[#a259ff]" />,
      title: 'Static Sites',
      description: 'Fast, secure, and SEO-optimized static websites for businesses.',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#a259ff]" />,
      title: 'E-commerce',
      description: 'Complete online store solutions with payment integration.',
    },
    {
      icon: <Scale className="h-8 w-8 text-[#a259ff]" />,
      title: 'Web Apps',
      description: 'Dynamic, scalable web applications built with modern tech.',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#a259ff]" />,
      title: 'Mobile First',
      description: 'Responsive designs that work perfectly on all devices.',
    },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Speed',
      description: 'Lightning-fast websites with optimized performance',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Scalability',
      description: 'Built to grow with your business needs',
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO-Optimized',
      description: 'Rank higher on search engines',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Perfect on desktop, tablet, and mobile',
    },
  ];


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="fade-in text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                We Build Websites That{' '}
                <span className="gradient-text">Grow Your Business</span>
              </h1>
              <p className="fade-in-delay-1 text-lg sm:text-xl text-[#d0d0d0] mb-8 max-w-2xl mx-auto lg:mx-0">
                Get high-quality, fast, and responsive websites tailored for your needs.
                Transform your online presence with our expert web development services.
              </p>
              <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/lets-talk"
                  className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/lets-talk"
                  className="glass-effect px-8 py-4 rounded-xl text-lg font-semibold border-2 border-[#a259ff] hover:bg-[#a259ff]/10 transition-all duration-300"
                >
                  Book a Call
                </Link>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="fade-in-delay-1 relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Developer working on computer with glowing code in dark modern workspace"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#a259ff]/20 to-transparent rounded-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-[#a259ff] rounded-2xl blur-xl opacity-50"></div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-r from-[#5e2ccf] to-blue-400 rounded-full blur-2xl opacity-30"></div>
                
                {/* Additional futuristic glow effects */}
                <div className="absolute top-1/4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
                <div className="absolute bottom-1/3 -right-4 w-16 h-16 bg-gradient-to-r from-[#a259ff] to-pink-400 rounded-full blur-md opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 glass-effect p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-semibold">Live Coding</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 glass-effect p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-[#a259ff]" />
                  <span className="text-white text-sm font-semibold">High Performance</span>
                </div>
              </div>
              
              {/* Code snippet floating element */}
              <div className="absolute top-1/2 left-4 glass-effect p-3 rounded-lg opacity-90">
                <div className="text-xs font-mono text-cyan-300">
                  <div className="text-[#a259ff]">const</div>
                  <div className="text-white">website = build()</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto">
              We provide comprehensive web development solutions to help your business succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card glass-effect p-6 rounded-2xl fade-in-delay-${index + 1}`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#d0d0d0]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Tech GS</h2>
            <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto">
              We deliver exceptional results with cutting-edge technology and proven methodologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center fade-in-delay-${index + 1}`}
              >
                <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <div className="text-[#a259ff]">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#d0d0d0]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Happy Clients */}
              <div className="text-center fade-in-delay-1">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/90 font-medium">Happy Clients</div>
              </div>

              {/* Projects Completed */}
              <div className="text-center fade-in-delay-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">120+</div>
                <div className="text-white/90 font-medium">Projects Completed</div>
              </div>

              {/* Experience */}
              <div className="text-center fade-in-delay-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-white/90 font-medium">Months Experience</div>
              </div>

              {/* Success Rate */}
              <div className="text-center fade-in-delay-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-white/90 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* Meet Operations Manager */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Gauri Shankar - Operations Manager"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] px-6 py-3 rounded-xl">
                  <span className="text-white font-semibold">Operations Manager</span>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  👤 Meet the Website Operations Manager
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Gauri Shankar</h2>
              </div>
              <p className="text-[#d0d0d0] text-lg leading-relaxed mb-6">
                Gauri Shankar is the dedicated Website Operations Manager at Tech GS. With a sharp eye for detail and a passion for seamless digital experiences, he ensures that every project runs smoothly from start to finish.
              </p>
              <p className="text-[#d0d0d0] text-lg leading-relaxed mb-8">
                From managing development timelines to optimizing user experience, Gauri is the backbone of our website operations. His commitment to excellence and client satisfaction drives the success of every project we deliver.
              </p>
              <div className="glass-effect p-6 rounded-2xl border-l-4 border-[#a259ff]">
                <h3 className="text-xl font-semibold mb-3 text-white">Key Responsibilities</h3>
                <ul className="space-y-2 text-[#d0d0d0]">
                  <li>• Project timeline management and coordination</li>
                  <li>• Quality assurance and testing oversight</li>
                  <li>• Client communication and support</li>
                  <li>• User experience optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;