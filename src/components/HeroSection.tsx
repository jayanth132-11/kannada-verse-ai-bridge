
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-kannada-blue">Kannada</span> Translation, 
              <span className="text-kannada-orange"> AI</span> Powered
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Break language barriers with our advanced Kannada translation platform. 
              Powered by AI to translate Kannada to multiple languages seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/translator">
                <Button size="lg" className="bg-kannada-orange hover:bg-kannada-orange-light">
                  Start Translating <ArrowRight className="ml-2 h-4 w-4 animate-bounce-horizontal" />
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button size="lg" variant="outline" className="border-kannada-blue text-kannada-blue hover:bg-kannada-blue hover:text-white">
                  Try AI Chatbot <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative rounded-lg shadow-xl bg-white p-8 rotate-1 transform transition-all">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-xl font-medium">Translate with KannadaVerse</h3>
              </div>
              
              <div className="mb-4">
                <div className="rounded-md bg-muted p-3 mb-3 font-kannada">
                  ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <span className="px-3 text-xs text-gray-500">Translated to English</span>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                
                <div className="rounded-md bg-blue-50 p-3">
                  I am reading a book.
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>Kannada → English</span>
                <span>AI Powered Translation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
