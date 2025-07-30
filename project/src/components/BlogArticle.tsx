import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  const formatContent = (content: string) => {
    // Split content by lines and process each line
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentIndex = 0;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        return; // Skip empty lines
      }

      // Headers
      if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={currentIndex++} className="text-3xl sm:text-4xl font-bold text-white mb-6 mt-8">
            {trimmedLine.substring(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={currentIndex++} className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex++} className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-6">
            {trimmedLine.substring(4)}
          </h3>
        );
      }
      // Code blocks
      else if (trimmedLine.startsWith('```')) {
        const language = trimmedLine.substring(3);
        const codeLines: string[] = [];
        let codeIndex = index + 1;
        
        while (codeIndex < lines.length && !lines[codeIndex].trim().startsWith('```')) {
          codeLines.push(lines[codeIndex]);
          codeIndex++;
        }
        
        elements.push(
          <div key={currentIndex++} className="my-6">
            <pre className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 overflow-x-auto">
              <code className={`language-${language} text-sm text-gray-300`}>
                {codeLines.join('\n')}
              </code>
            </pre>
          </div>
        );
      }
      // Lists
      else if (trimmedLine.startsWith('- ')) {
        const listItems: string[] = [trimmedLine.substring(2)];
        let listIndex = index + 1;
        
        while (listIndex < lines.length && lines[listIndex].trim().startsWith('- ')) {
          listItems.push(lines[listIndex].trim().substring(2));
          listIndex++;
        }
        
        elements.push(
          <ul key={currentIndex++} className="list-disc list-inside text-[#d0d0d0] mb-6 space-y-2 ml-4">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
      }
      // Bold text paragraphs
      else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        elements.push(
          <p key={currentIndex++} className="text-[#d0d0d0] mb-4 leading-relaxed">
            <strong className="text-white font-semibold">
              {trimmedLine.substring(2, trimmedLine.length - 2)}
            </strong>
          </p>
        );
      }
      // Regular paragraphs
      else if (!trimmedLine.startsWith('#') && !trimmedLine.startsWith('```') && !trimmedLine.startsWith('- ')) {
        // Process inline formatting
        let processedLine = trimmedLine;
        
        // Bold text
        processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
        
        // Code inline
        processedLine = processedLine.replace(/`(.*?)`/g, '<code class="bg-[#1a1a1a] text-[#a259ff] px-2 py-1 rounded text-sm">$1</code>');
        
        elements.push(
          <p 
            key={currentIndex++} 
            className="text-[#d0d0d0] mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    return elements;
  };

  return (
    <div className="pt-16 bg-[#0a0a0a] min-h-screen">
      {/* Back to Blog */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#a259ff] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Tag */}
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-[#d0d0d0] mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="flex items-center gap-2 glass-effect px-4 py-2 rounded-xl hover:bg-[#a259ff]/10 transition-colors duration-300">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 glass-effect px-4 py-2 rounded-xl hover:bg-[#a259ff]/10 transition-colors duration-300">
              <Bookmark className="h-4 w-4" />
              <span>Save</span>
            </button>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1a1a1a] text-[#a259ff] px-3 py-1 rounded-full text-sm border border-[#a259ff]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-[#d0d0d0] text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#a259ff] transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-[#d0d0d0] text-sm line-clamp-3">
                      {relatedPost.summary}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-[#d0d0d0] text-sm">
                        <User className="h-4 w-4 mr-2" />
                        <span>{relatedPost.author}</span>
                      </div>
                      <span className="text-[#a259ff] hover:text-white transition-colors duration-300 flex items-center text-sm font-semibold">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-[#d0d0d0] mb-6">
              Let's discuss how we can help bring your vision to life with our expert web development services.
            </p>
            <Link
              to="/lets-talk"
              className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;