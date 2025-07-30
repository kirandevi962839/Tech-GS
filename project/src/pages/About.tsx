import React from 'react';
import { Code, Users, Award, Target, Zap, Globe, Smartphone, Database } from 'lucide-react';

const About: React.FC = () => {
  const technologies = [
    { name: 'HTML5', icon: <Code className="h-6 w-6" /> },
    { name: 'CSS3', icon: <Code className="h-6 w-6" /> },
    { name: 'JavaScript', icon: <Code className="h-6 w-6" /> },
    { name: 'React', icon: <Code className="h-6 w-6" /> },
    { name: 'Node.js', icon: <Database className="h-6 w-6" /> },
    { name: 'TypeScript', icon: <Code className="h-6 w-6" /> },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#a259ff]" />,
      title: 'Quality First',
      description: 'We never compromise on quality and deliver exceptional results every time.',
    },
    {
      icon: <Zap className="h-8 w-8 text-[#a259ff]" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without sacrificing attention to detail.',
    },
    {
      icon: <Users className="h-8 w-8 text-[#a259ff]" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you throughout the process.',
    },
    {
      icon: <Award className="h-8 w-8 text-[#a259ff]" />,
      title: 'Innovation',
      description: 'We stay ahead of trends and use cutting-edge technologies.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="fade-in text-4xl sm:text-5xl font-bold mb-6 text-white">
            About <span className="gradient-text">Tech GS</span>
          </h1>
          <p className="fade-in-delay-1 text-lg text-[#d0d0d0] max-w-3xl mx-auto">
            We are a passionate team of web developers dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-[#d0d0d0] max-w-4xl mx-auto leading-relaxed">
              To deliver scalable and modern web solutions that empower businesses to thrive in the digital landscape. 
              We believe every business deserves a powerful online presence that converts visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-[#d0d0d0] text-lg leading-relaxed mb-6">
                Tech GS was founded with a simple vision: to bridge the gap between innovative technology and business success. 
                We started as a small team of passionate developers who believed that every business, regardless of size, 
                deserves access to world-class web solutions.
              </p>
              <p className="text-[#d0d0d0] text-lg leading-relaxed mb-6">
                Today, we've grown into a trusted partner for businesses looking to establish a strong digital presence. 
                Our commitment to excellence, attention to detail, and client-first approach has helped us build lasting 
                relationships with clients across various industries.
              </p>
              <p className="text-[#d0d0d0] text-lg leading-relaxed">
                At Tech GS, we don't just build websites – we create digital experiences that tell your story, 
                engage your audience, and drive measurable results for your business.
              </p>
            </div>
            <div className="fade-in-delay-1">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working on web development"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-effect p-6 rounded-2xl text-center fade-in-delay-${index + 1}`}
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-[#d0d0d0]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Technologies We Use</h2>
            <p className="text-[#d0d0d0] text-lg max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 fade-in-delay-${index + 1}`}
              >
                <div className="text-[#a259ff] mb-3 flex justify-center">{tech.icon}</div>
                <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
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

export default About;