
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TranslatorTool from '@/components/TranslatorTool';

const Translator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Kannada Translator</h1>
          <p className="text-gray-600 mb-8 text-center">
            Translate Kannada text to multiple languages with our AI-powered translator
          </p>
          
          <TranslatorTool />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Translator;
