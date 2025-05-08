
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Input Kannada Text',
      description: 'Enter Kannada text in our translator or ask the AI chatbot a question in natural language.'
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Our machine learning model analyzes the text, understanding context and linguistic nuances.'
    },
    {
      number: '03',
      title: 'Translation Generation',
      description: 'The model generates accurate translations while preserving the original meaning.'
    },
    {
      number: '04',
      title: 'Receive Results',
      description: 'Get your translated text instantly, ready to use or further refine as needed.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced neural machine translation platform makes translating Kannada simple and accurate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="text-kannada-orange text-4xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
