
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExamplesSection = () => {
  const examples = [
    {
      kannada: 'ನಿಮಗೆ ಹೇಗಿದ್ದೀರ?',
      english: 'How are you?',
      tamil: 'நீங்கள் எப்படி இருக்கிறீர்கள்?'
    },
    {
      kannada: 'ನನ್ನ ಹೆಸರು ರವಿ',
      english: 'My name is Ravi',
      tamil: 'என் பெயர் ரவி'
    },
    {
      kannada: 'ಬೆಂಗಳೂರು ಸುಂದರವಾದ ನಗರ',
      english: 'Bangalore is a beautiful city',
      tamil: 'பெங்களூரு ஒரு அழகான நகரம்'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Try These Examples</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our translation in action with these sample phrases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-4 bg-gray-50 p-3 rounded-md font-kannada">
                {example.kannada}
              </div>
              
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-1">English:</div>
                <div className="bg-blue-50 p-3 rounded-md">{example.english}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 mb-1">Tamil:</div>
                <div className="bg-blue-50 p-3 rounded-md">{example.tamil}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/translator">
            <Button className="bg-kannada-blue hover:bg-blue-600">
              Try Your Own Translations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
