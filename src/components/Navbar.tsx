
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Globe, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm shadow-sm z-50 sticky top-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-kannada-orange" />
            <span className="text-xl font-bold">
              <span className="text-kannada-blue">Kannada</span>
              <span className="text-kannada-orange">Verse</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/translator" className="hidden sm:block">
            <Button variant="ghost" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Translator</span>
            </Button>
          </Link>
          
          <Link to="/chatbot" className="hidden sm:block">
            <Button variant="ghost" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Chatbot</span>
            </Button>
          </Link>
          
          <Link to="/how-it-works" className="hidden sm:block">
            <Button variant="ghost" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span>How It Works</span>
            </Button>
          </Link>
          
          <Link to="/chatbot">
            <Button className="bg-kannada-blue hover:bg-kannada-blue/90">
              Try Chatbot
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
