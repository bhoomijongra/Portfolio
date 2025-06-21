import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <p className="text-lg font-medium">Bhoomi Jongra</p>
        </div>
        
        <div className="flex justify-center items-center mb-6">
          <Heart size={16} className="text-red-400 mr-2" />
          <p className="text-gray-300">Made with passion</p>
        </div>
        
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Bhoomi Jongra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;