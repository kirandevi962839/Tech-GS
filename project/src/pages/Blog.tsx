import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts, getBlogPostsByCategory } from '../data/blogPosts';

const Blog: React.FC = () => {
  const categories = ['All', 'Business', 'Technology', 'Development', 'Design', 'E-commerce', 'Performance'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="fade-in text-4xl sm:text-5xl font-bold mb-6 text-white">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="fade-in-delay-1 text-lg text-[#d0d0d0] max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in web development and digital marketing.
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

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 fade-in-delay-${index + 1}`}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#d0d0d0] text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.readTime}</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-[#a259ff] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-[#d0d0d0] mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#a259ff] hover:text-white transition-colors duration-300 flex items-center text-sm font-semibold"
                  >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-[#d0d0d0] mb-6">
              Subscribe to our newsletter and get the latest web development insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a259ff] transition-colors duration-300"
              />
              <button className="btn-primary px-6 py-3 rounded-xl font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;