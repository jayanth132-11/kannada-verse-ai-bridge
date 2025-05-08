
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-kannada-orange" />
              <span className="text-xl font-bold">
                <span className="text-kannada-blue">Kannada</span>
                <span className="text-kannada-orange">Verse</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6">
              Breaking language barriers with AI-powered Kannada translation technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-kannada-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/translator" className="text-gray-600 hover:text-kannada-blue">
                  Translator
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-gray-600 hover:text-kannada-blue">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-kannada-blue">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Globe className="h-4 w-4 text-kannada-blue mr-2" />
                <span className="text-gray-600">Multiple Languages</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-4 w-4 text-kannada-orange mr-2" />
                <span className="text-gray-600">AI Chatbot</span>
              </li>
              <li className="flex items-center">
                <Info className="h-4 w-4 text-kannada-teal mr-2" />
                <span className="text-gray-600">Context-Aware Translation</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} KannadaVerse AI Bridge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">
              Powered by advanced AI translation models
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
