import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Skill type definition
interface Skill {
  name: string;
  level: number; // 1-10
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // Skills data
  const skills: Skill[] = [
    { name: 'HTML', level: 9, color: 'bg-orange-500' },
    { name: 'CSS', level: 8, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 7, color: 'bg-yellow-500' },
    { name: 'Python', level: 6, color: 'bg-green-500' },
    { name: 'C++', level: 5, color: 'bg-purple-500' },
    { name: 'SQL', level: 7, color: 'bg-pink-500' },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-24 px-4 bg-gray-100 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          My <span className="text-blue-600">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.level * 10}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`} 
                  style={{ 
                    width: isVisible ? `${skill.level * 10}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;