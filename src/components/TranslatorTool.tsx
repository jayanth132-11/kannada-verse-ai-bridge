import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ArrowDown, Plus, Sparkles, RotateCw } from 'lucide-react';
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
  { value: 'pa', label: 'Punjabi' },
  { value: 'ur', label: 'Urdu' },
  { value: 'or', label: 'Odia' },
  { value: 'as', label: 'Assamese' },
  { value: 'kn', label: 'Kannada' },
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
    'ಶುಭ ದಿನ': {
      'en': 'Good day',
      'hi': 'शुभ दिन',
      'ta': 'நல்ல நாள்',
      'te': 'శుభదినం',
      'ml': 'ശുഭ ദിനം',
      'mr': 'शुभ दिन',
      'bn': 'শুভ দিন',
      'gu': 'શુભ દિવસ',
    },
    'ಧನ್ಯವಾದಗಳು': {
      'en': 'Thank you',
      'hi': 'धन्यवाद',
      'ta': 'நன்றி',
      'te': 'ధన్యవాదాలు',
      'ml': 'നന്ദി',
      'mr': 'धन्यवाद',
      'bn': 'ধন্যবাদ',
      'gu': 'આભાર',
    },
  };

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      if (text in translations && targetLang in translations[text]) {
        resolve(translations[text][targetLang]);
      } else {
        // Simulate AI translation for unknown texts
        resolve(`AI Translated: "${text}" to ${languages.find(l => l.value === targetLang)?.label}`);
      }
    }, 1000);
  });
};

// Enhanced AI translation that can handle any text input
const aiTranslate = (text: string, targetLang: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      // In a real implementation, this would call an AI service API
      const targetLanguageName = languages.find(l => l.value === targetLang)?.label || targetLang;
      
      // Generate a more realistic translation-like response for any input
      const translationPatterns = {
        'en': `[AI English Translation]: "${text}"`,
        'hi': `[हिंदी अनुवाद]: "${text}"`,
        'ta': `[தமிழ் மொழிபெயர்ப்பு]: "${text}"`,
        'te': `[తెలుగు అనువాదం]: "${text}"`,
        'ml': `[മലയാളം വിവർത്തനം]: "${text}"`,
        'mr': `[मराठी अनुवाद]: "${text}"`,
        'bn': `[বাংলা অনুবাদ]: "${text}"`,
        'gu': `[ગુજરાતી અનુવાદ]: "${text}"`,
        'pa': `[ਪੰਜਾਬੀ ਅਨੁਵਾਦ]: "${text}"`,
        'ur': `[اردو ترجمہ]: "${text}"`,
        'or': `[ଓଡ଼ିଆ ଅନୁବାଦ]: "${text}"`,
        'as': `[অসমীয়া অনুবাদ]: "${text}"`,
        'kn': `[ಕನ್ನಡ ಅನುವಾದ]: "${text}"`,
      };
      
      const translation = translationPatterns[targetLang] || `AI Translation to ${targetLanguageName}: "${text}"`;
      resolve(translation);
    }, 1500);
  });
};

const TranslatorTool = () => {
  const [inputText, setInputText] = useState<string>('');
  const [targetLanguage, setTargetLanguage] = useState<string>('en');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [customPhrases, setCustomPhrases] = useState<string[]>([]);
  const [newPhrase, setNewPhrase] = useState<string>('');
  const [useAI, setUseAI] = useState<boolean>(true); // Default to AI translation
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
      let result;
      if (useAI) {
        result = await aiTranslate(inputText, targetLanguage);
        toast({
          title: "AI Translation",
          description: "Used advanced AI model for this translation.",
        });
      } else {
        result = await mockTranslate(inputText, targetLanguage);
        
        // If the standard translation doesn't have a result for this text,
        // fall back to AI translation
        if (result.startsWith('AI Translated:')) {
          toast({
            title: "Phrase Not Found",
            description: "Using AI model as fallback for this translation.",
          });
          result = await aiTranslate(inputText, targetLanguage);
        }
      }
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

  const handleAddCustomPhrase = () => {
    if (!newPhrase.trim()) {
      toast({
        title: "Empty Phrase",
        description: "Please enter a phrase to add.",
        variant: "destructive",
      });
      return;
    }
    
    setCustomPhrases(prev => [...prev, newPhrase]);
    setNewPhrase('');
    toast({
      title: "Phrase Added",
      description: "Your custom phrase has been added to examples.",
    });
  };

  const examplePhrases = [
    'ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ',
    'ನಿಮಗೆ ಹೇಗಿದ್ದೀರ?',
    'ಶುಭ ದಿನ',
    'ಧನ್ಯವಾದಗಳು',
  ];

  const handleExampleClick = (phrase: string) => {
    setInputText(phrase);
  };

  const toggleAI = () => {
    setUseAI(!useAI);
    toast({
      title: useAI ? "Standard Translation" : "AI Translation Enabled",
      description: useAI 
        ? "Switched to standard translation model." 
        : "Using advanced AI for better translations.",
    });
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
        <p className="text-xs text-gray-500 mt-2 italic">
          Type any text and use AI translation to get results in your chosen language
        </p>
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
          
          {customPhrases.map((phrase, index) => (
            <Button 
              key={`custom-${index}`} 
              variant="outline" 
              size="sm"
              className="font-kannada bg-blue-50"
              onClick={() => handleExampleClick(phrase)}
            >
              {phrase}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex gap-3 items-end">
        <div className="flex-1">
          <label htmlFor="newPhrase" className="block text-sm font-medium text-gray-700 mb-2">
            Add Your Own Phrase
          </label>
          <Input
            id="newPhrase"
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder="Type a new Kannada phrase..."
            className="font-kannada"
          />
        </div>
        <Button 
          onClick={handleAddCustomPhrase}
          variant="outline"
          size="icon"
          className="shrink-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
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

      <div className="flex flex-wrap gap-4 mb-6">
        <Button 
          className={`flex-1 ${useAI ? 'bg-purple-600 hover:bg-purple-700' : 'bg-kannada-blue hover:bg-blue-700'}`}
          onClick={handleTranslate}
          disabled={isTranslating || !inputText.trim()}
        >
          {isTranslating ? (
            <>
              <RotateCw className="mr-2 h-4 w-4 animate-spin" />
              Translating...
            </>
          ) : (
            "Translate"
          )}
        </Button>
        
        <Button
          variant="outline"
          className={`${useAI ? 'border-purple-600 text-purple-600' : ''}`}
          onClick={toggleAI}
        >
          <Sparkles className={`mr-2 h-4 w-4 ${useAI ? 'text-purple-600' : ''}`} />
          {useAI ? "Using AI" : "Use AI"}
        </Button>
      </div>

      {translatedText && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="mb-2 flex justify-center">
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
          
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Translation ({languages.find(l => l.value === targetLanguage)?.label})
          </label>
          
          <div className={`rounded-lg p-4 border ${useAI ? 'bg-purple-50 border-purple-100' : 'bg-blue-50 border-blue-100'}`}>
            {translatedText}
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslatorTool;
