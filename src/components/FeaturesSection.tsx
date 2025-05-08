
import React from 'react';
import { MessageSquare, Globe, AlertCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-kannada-blue" />,
      title: 'Multiple Languages',
      description: 'Translate Kannada to multiple languages including English, Hindi, Tamil, and more.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-kannada-orange" />,
      title: 'AI Chatbot',
      description: 'Ask questions or request translations in natural language through our intelligent chatbot.'
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-kannada-teal" />,
      title: 'Accurate Results',
      description: 'Advanced machine learning algorithms provide high-quality translations with contextual understanding.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-driven Kannada translation with our comprehensive suite of features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
