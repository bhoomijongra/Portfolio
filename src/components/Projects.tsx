import React, { useRef } from 'react';
import { BookOpen, Code, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // BookScout project data - Update these URLs with your actual links
  const bookScoutProject = {
    title: "BookScout",
    description: "A website that helps customers check if a book is available in nearby stores. The platform simplifies the book shopping experience by showing real-time availability information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/bhoomijongra/Bookscout-website.git", // Replace with your actual GitHub repo URL
    liveUrl: "https://bookscout-website.vercel.app/", // Replace with your actual live demo URL
    imageUrl: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800" // Book-related stock image
  };

  const handleLinkClick = (url: string, linkType: string) => {
    if (url.startsWith('https://github.com') || url.startsWith('https://')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Please update the ${linkType} URL in the Projects component with your actual link.`);
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-24 px-4 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          My <span className="text-blue-600">Projects</span>
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
          {/* Project Image */}
          <div className="h-64 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
            <img 
              src={bookScoutProject.imageUrl}
              alt="BookScout Project Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <BookOpen size={48} className="mx-auto mb-2" />
                <p className="text-lg font-semibold">BookScout</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">{bookScoutProject.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {bookScoutProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {bookScoutProject.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleLinkClick(bookScoutProject.githubUrl, 'GitHub')}
                className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors shadow-md"
              >
                <Code size={18} className="mr-2" />
                <span>View Code</span>
              </button>
              
              <button 
                onClick={() => handleLinkClick(bookScoutProject.liveUrl, 'Live Demo')}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md"
              >
                <ExternalLink size={18} className="mr-2" />
                <span>Live Demo</span>
              </button>
            </div>
          </div>
        </div>

       

        {/* Future projects placeholder */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">More projects coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;