import React from 'react';
import { ExternalLink, Github, ArrowRight, Star, Calendar } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Influzo Media',
      description: 'A comprehensive digital marketing platform designed to help businesses grow their online presence through strategic content creation and social media management.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      category: 'Web Application',
      featured: true,
      liveUrl: 'https://www.influzomedia.com',
      githubUrl: '#',
      completedDate: '2024-12',
      rating: 5,
    },
    {
      id: 2,
      title: 'E-Commerce Store',
      description: 'Modern e-commerce platform with advanced filtering, secure payment integration, and responsive design for optimal shopping experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Stripe', 'Firebase', 'CSS3'],
      category: 'E-commerce',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      completedDate: '2024-11',
      rating: 5,
    },
    {
      id: 3,
      title: 'Corporate Website',
      description: 'Professional corporate website with modern design, content management system, and SEO optimization for maximum visibility.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
      category: 'Static Website',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      completedDate: '2024-10',
      rating: 4,
    },
    {
      id: 4,
      title: 'Restaurant Landing Page',
      description: 'Elegant restaurant landing page with online reservation system, menu showcase, and location integration.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'CSS3', 'Node.js', 'Express'],
      category: 'Landing Page',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      completedDate: '2024-09',
      rating: 5,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Creative portfolio website for a digital artist with interactive galleries, contact forms, and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'GSAP', 'CSS3', 'Firebase'],
      category: 'Portfolio',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      completedDate: '2024-08',
      rating: 5,
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      description: 'Comprehensive SaaS dashboard with real-time analytics, user management, and subscription handling.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      category: 'Web Application',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      completedDate: '2024-07',
      rating: 5,
    },
  ];

  const categories = ['All', 'Web Application', 'E-commerce', 'Static Website', 'Landing Page', 'Portfolio'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="fade-in text-4xl sm:text-5xl font-bold mb-6 text-white">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="fade-in-delay-1 text-lg text-[#d0d0d0] max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise in creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white'
                    : 'glass-effect text-[#d0d0d0] hover:text-white hover:bg-[#a259ff]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="glass-effect rounded-2xl overflow-hidden mb-16 fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      ⭐ Featured Project
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-[#a259ff] text-sm font-semibold">{project.category}</span>
                    <h2 className="text-3xl font-bold text-white mt-2 mb-4">{project.title}</h2>
                  </div>
                  <p className="text-[#d0d0d0] text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#0a0a0a] text-[#a259ff] px-3 py-1 rounded-full text-sm border border-[#a259ff]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-[#d0d0d0] mr-2" />
                      <span className="text-[#d0d0d0] text-sm">Completed: {project.completedDate}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="glass-effect px-6 py-3 rounded-xl font-semibold border-2 border-[#a259ff] hover:bg-[#a259ff]/10 transition-all duration-300 inline-flex items-center"
                    >
                      View Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={project.id}
                className={`glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 fade-in-delay-${index + 1}`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-[#d0d0d0] mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#0a0a0a] text-[#a259ff] px-2 py-1 rounded text-xs border border-[#a259ff]/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[#d0d0d0] text-xs px-2 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a259ff] hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="text-[#a259ff] hover:text-white transition-colors duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-[#d0d0d0] mb-6">
              Let's discuss how we can bring your vision to life with our expertise and creativity.
            </p>
            <a
              href="/lets-talk"
              className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;