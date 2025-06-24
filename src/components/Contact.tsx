import React, { useRef } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with your actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demonstration, we'll show the form data in console and show success
      console.log('Form Data Submitted:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      });
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-24 px-4 bg-gray-100 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:bhoomi.jongra@gmail.com" 
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 group-hover:text-blue-600 transition-colors">bhoomi.jongra@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/bhoomi-jongra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="text-gray-800 group-hover:text-blue-600 transition-colors">linkedin.com/in/bhoomijongra</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;