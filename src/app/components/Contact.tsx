import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Download, Send } from 'lucide-react';
import IconmonstrBehance from '../../imports/IconmonstrBehance11';

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            I'm actively seeking new opportunities in Japan. Whether you're looking for a designer 
            to join your team or have a project in mind, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">Contact Information</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-blue-100">Email</p>
                      <p className="text-sm sm:text-base text-white break-all">yashvashisht15@gmail.com</p>
                    </div>
                  </div>
                  <a
                    href="mailto:yashvashisht15@gmail.com?subject=Job Opportunity / Project Inquiry"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all shadow-md hover:scale-105 w-full sm:w-auto flex-shrink-0"
                  >
                    <Send size={16} />
                    <span className="text-sm font-medium">Send Message</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-100">Location</p>
                    <p className="text-sm sm:text-base text-white">Available for Japan</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Download size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-100">Resume</p>
                    <button className="text-sm sm:text-base text-white hover:underline">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-xs sm:text-sm text-blue-100 mb-4">Follow me on social media</p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="https://in.linkedin.com/in/yash-vashisht-670223163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/Yash-Vashisht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  >
                    <div className="w-5 h-5">
                      <IconmonstrBehance />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}