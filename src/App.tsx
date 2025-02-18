import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/LucidBots_Colored_Logo_Full.png" alt="Lucid Bots" className="h-8" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-6 relative z-10 h-full pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Join the <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Future</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              Want to fly a Sherpa?
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition-colors">
              <span>Schedule Demo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );  
}

export default App;