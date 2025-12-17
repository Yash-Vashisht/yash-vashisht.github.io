import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 text-gray-900">
              Creative Designer &
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Visual Storyteller
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Crafting exceptional digital experiences through UI/UX design, graphic design, and video editing. 
              Passionate about creating work that bridges creativity and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button
                onClick={scrollToWork}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                View My Work
              </button>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all text-center text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <button
              onClick={scrollToWork}
              className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ArrowDown size={28} className="sm:w-8 sm:h-8" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements - hidden on very small screens */}
      <div className="hidden sm:block absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="hidden sm:block absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden sm:block absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
}