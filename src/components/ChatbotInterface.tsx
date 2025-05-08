
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Mock function for chatbot responses
const mockChatbotResponse = (message: string) => {
  const responses: Record<string, string> = {
    'hello': 'Hello! How can I help you with Kannada translations today?',
    'hi': 'Hi there! I can help translate Kannada text or answer questions about languages.',
    'how are you': 'I\'m doing well, thank you for asking! How can I assist you with translations?',
    'how does this work': 'Our system uses advanced AI to translate Kannada text to multiple languages. Just type your text and I\'ll help translate it!',
    'which languages are supported': 'Currently, we support translation from Kannada to English, Hindi, Tamil, Telugu, Malayalam, Marathi, Bengali, and Gujarati.',
    'translate nanu pustaka oduttiddene': 'The Kannada phrase "ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ" translates to "I am reading a book" in English.',
    'translate nanu pustaka oduttiddene to hindi': 'The Kannada phrase "ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ" translates to "मैं किताब पढ़ रहा हूँ" in Hindi.',
    'translate: ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ to english': 'The translation of "ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ" in English is "I am reading a book".',
    'translate: ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ to tamil': 'The translation of "ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ" in Tamil is "நான் புத்தகம் படிக்கிறேன்".',
  };

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      const normalizedMessage = message.toLowerCase();
      
      // Check for direct matches
      for (const [key, response] of Object.entries(responses)) {
        if (normalizedMessage.includes(key)) {
          resolve(response);
          return;
        }
      }
      
      // Default responses
      if (normalizedMessage.includes('translate')) {
        resolve("I'd be happy to translate that for you! In a full implementation, I would connect to our translation model for an accurate result.");
      } else {
        resolve("I'm not sure I understand. Could you rephrase that? You can ask me to translate Kannada text or ask about supported languages.");
      }
    }, 1500);
  });
};

const ChatbotInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your Kannada translation assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await mockChatbotResponse(input);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md h-[600px] max-h-[80vh]">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Kannada AI Chatbot</h2>
        <p className="text-sm text-gray-600">Ask questions or request translations</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-kannada-blue text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div 
                className={`${
                  message.content.includes('ನಾನು') || message.content.includes('ನಿಮಗೆ') 
                    ? 'font-kannada' 
                    : ''
                }`}
              >
                {message.content}
              </div>
              <div 
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message or translation request..."
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            className="bg-kannada-orange hover:bg-kannada-orange-light"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Try asking: "Translate: ನಾನು ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದೇನೆ to English"
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
