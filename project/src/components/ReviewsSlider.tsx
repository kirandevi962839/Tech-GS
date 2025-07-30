import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Rajesh Sharma',
      company: 'Mumbai Digital Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Tech GS ne hamare business ke liye ek outstanding website banaya hai. Their technical expertise and understanding of Indian market is excellent. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      company: 'Gujarat Textiles Ltd.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Amazing work by Tech GS team! They understood our requirements perfectly and delivered a beautiful e-commerce website. Our online sales have increased by 60% since launch.',
      rating: 5,
    },
    {
      name: 'Arjun Singh',
      company: 'Delhi Startup Hub',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Tech GS created a fantastic website for our startup. The modern design and fast loading speed impressed all our investors. Great value for money!',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      company: 'Hyderabad Tech Services',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Excellent service! Tech GS team is very professional and delivered our project on time. The website looks amazing and works perfectly on all devices.',
      rating: 5,
    },
    {
      name: 'Vikram Agarwal',
      company: 'Jaipur Handicrafts',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Being from Rajasthan, we needed someone who understands local business. Tech GS delivered perfectly! Our handicraft business now reaches customers worldwide.',
      rating: 5,
    },
    {
      name: 'Kavya Nair',
      company: 'Kerala Ayurveda Center',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Tech GS built a beautiful website for our Ayurveda center. The design reflects our traditional values while being modern. Patient bookings have doubled!',
      rating: 5,
    },
    {
      name: 'Rohit Gupta',
      company: 'Bangalore Software Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'As a fellow tech company, we appreciate quality work. Tech GS exceeded our expectations with their technical skills and project management. Highly professional team!',
      rating: 5,
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.ceil(reviews.length / itemsPerView) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className="reviews-slider relative">
      <div className="overflow-hidden">
        <div
          className="reviews-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="glass-effect p-6 rounded-2xl h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-[#a259ff]"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-sm text-[#d0d0d0]">{review.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#d0d0d0] leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-[#a259ff]/20 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-[#a259ff]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-[#a259ff]/20 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-[#a259ff]" />
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;