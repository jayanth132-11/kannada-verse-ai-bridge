
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">How It Works</h1>
          <p className="text-gray-600 mb-12 text-center">
            Understanding our AI-powered translation technology
          </p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Translation Technology</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-700">
                    Our Kannada translation platform uses state-of-the-art neural machine translation (NMT) technology, 
                    specifically tailored for the Kannada language and other Indian languages.
                  </p>
                  
                  <p className="mb-4 text-gray-700">
                    Unlike traditional translation systems that translate word-by-word, our neural networks analyze the 
                    entire sentence to preserve context and meaning, resulting in more natural and accurate translations.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Key Technology Components:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Encoder-Decoder Transformer Architecture</li>
                      <li>Kannada-specific Tokenization</li>
                      <li>Multilingual Training Dataset</li>
                      <li>Context-Aware Translation</li>
                      <li>Attention Mechanisms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Translation Process</h2>
              <Card>
                <CardContent className="pt-6">
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-kannada-blue flex items-center justify-center text-white font-medium">1</div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">Tokenization</h3>
                        <p className="text-gray-700">
                          Your Kannada text is broken down into tokens (words or subwords) that the model can understand.
                          Kannada has unique script characteristics that require specialized tokenization.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-kannada-blue flex items-center justify-center text-white font-medium">2</div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">Encoding</h3>
                        <p className="text-gray-700">
                          The tokens are encoded into numerical representations (vectors) that capture semantic meaning.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-kannada-blue flex items-center justify-center text-white font-medium">3</div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">Translation</h3>
                        <p className="text-gray-700">
                          The neural network processes these vectors, using attention mechanisms to focus on relevant parts 
                          of the input when generating each word of the translation.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-kannada-blue flex items-center justify-center text-white font-medium">4</div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">Decoding</h3>
                        <p className="text-gray-700">
                          The model generates tokens in the target language, which are then combined to form the complete translation.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-kannada-blue flex items-center justify-center text-white font-medium">5</div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">Post-processing</h3>
                        <p className="text-gray-700">
                          Final refinements ensure grammatical accuracy and natural phrasing in the target language.
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-2">How accurate is the translation?</h3>
                    <p className="text-gray-700">
                      Our system achieves high accuracy for most everyday language and common phrases. However, like all machine translation systems,
                      it may struggle with highly specialized terminology, complex idioms, or culturally specific references.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-2">Which languages are supported for translation?</h3>
                    <p className="text-gray-700">
                      Currently, our system can translate from Kannada to English, Hindi, Tamil, Telugu, Malayalam, Marathi, Bengali, and Gujarati.
                      We're continuously working to add more languages to our platform.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-2">How is the AI chatbot different from the translator?</h3>
                    <p className="text-gray-700">
                      The AI chatbot provides a conversational interface where you can ask questions in natural language or request translations.
                      It combines language understanding capabilities with our translation technology to provide a more interactive experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
