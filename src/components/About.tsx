import React, { useEffect, useRef } from 'react';
import { Code, User, ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const scrollToNext = () => {
    const skills = document.getElementById('skills');
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  };

   // Profile picture URL - Update this with your actual image
  const profileImageUrl = "/portfolio/PXL_20240818_140231519.jpg"; // Replace with your actual profile picture URL

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`min-h-screen pt-24 pb-16 px-4 flex flex-col justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
        <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Profile Picture */}
              <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={profileImageUrl}
                  alt="Bhoomi Jongra Profile Picture"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback initials (hidden by default, shown if image fails) */}
                <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-6xl font-bold text-blue-500">BJ</span>
                </div>
              </div>
              
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-100 rounded-full z-0 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-200 rounded-full z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Hello, I'm <span className="text-blue-600">Bhoomi</span>
            </h2>
            
            <div className="flex items-center mb-4 text-blue-600">
              <User size={20} className="mr-2" />
              <span className="font-medium">BCA Student</span>
            </div>
            
            <div className="flex items-center mb-6 text-blue-600">
              <Code size={20} className="mr-2" />
              <span className="font-medium">Web Developer</span>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm a passionate BCA student with a strong interest in web development and programming. 
              I enjoy creating responsive, user-friendly websites and applications.
              My journey in technology is driven by curiosity and a desire to build solutions that make a difference.
            </p>
            
           
        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={scrollToNext}
            className="text-blue-600 animate-bounce"
            aria-label="Scroll to Skills section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
    </div>
    </section>
  );

export default About;