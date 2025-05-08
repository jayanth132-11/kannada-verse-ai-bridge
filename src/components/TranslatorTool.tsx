
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'ta', label: 'Tamil' },
  { value: 'te', label: 'Telugu' },
  { value: 'ml', label: 'Malayalam' },
  { value: 'mr', label: 'Marathi' },
  { value: 'bn', label: 'Bengali' },
  { value: 'gu', label: 'Gujarati' },
];

// Mock function for translation - in a real app, this would call an API
const mockTranslate = (text: string, targetLang: string) => {
  const translations: Record<string, Record<string, string>> = {
    'ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ': {
      'en': 'I am reading a book',
      'hi': 'मैं किताब पढ़ रहा हूँ',
      'ta': 'நான் புத்தகம் படிக்கிறேன்',
      'te': 'నేను పుస్తకం చదువుతున్నాను',
      'ml': 'ഞാൻ പുസ്തകം വായിക്കുന്നു',
      'mr': 'मी पुस्तक वाचत आहे',
      'bn': 'আমি একটি বই পড়ছি',
      'gu': 'હું પુસ્તક વાંચી રહ્યો છું',
    },
    'ನಿಮಗೆ ಹೇಗಿದ್ದೀರ?': {
      'en': 'How are you?',
      'hi': 'आप कैसे हैं?',
      'ta': 'நீங்கள் எப்படி இருக்கிறீர்கள்?',
      'te': 'మీరు ఎలా ఉన్నారు?',
      'ml': 'സുഖമാണോ?',
      'mr': 'तुम्ही कसे आहात?',
      'bn': 'আপনি কেমন আছেন?',
      'gu': 'તમે કેમ છો?',
    },
  };

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      if (text in translations && targetLang in translations[text]) {
        resolve(translations[text][targetLang]);
      } else {
        resolve("Translation not available. This is a demo with limited translations.");
      }
    }, 1000);
  });
};

const TranslatorTool = () => {
  const [inputText, setInputText] = useState<string>('');
  const [targetLanguage, setTargetLanguage] = useState<string>('en');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const { toast } = useToast();

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter some Kannada text to translate.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    try {
      const result = await mockTranslate(inputText, targetLanguage);
      setTranslatedText(result);
    } catch (error) {
      toast({
        title: "Translation Error",
        description: "Failed to translate text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const examplePhrases = [
    'ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ',
    'ನಿಮಗೆ ಹೇಗಿದ್ದೀರ?',
  ];

  const handleExampleClick = (phrase: string) => {
    setInputText(phrase);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Kannada Text
        </label>
        <Textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste Kannada text here..."
          className="font-kannada min-h-[120px]"
        />
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Or try these examples:</p>
        <div className="flex flex-wrap gap-2">
          {examplePhrases.map((phrase, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm"
              className="font-kannada"
              onClick={() => handleExampleClick(phrase)}
            >
              {phrase}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Target Language
        </label>
        <Select value={targetLanguage} onValueChange={setTargetLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button 
        className="w-full bg-kannada-blue hover:bg-blue-700" 
        onClick={handleTranslate}
        disabled={isTranslating || !inputText.trim()}
      >
        {isTranslating ? "Translating..." : "Translate"}
      </Button>

      {translatedText && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="mb-2 flex justify-center">
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
          
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Translation ({languages.find(l => l.value === targetLanguage)?.label})
          </label>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            {translatedText}
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslatorTool;
