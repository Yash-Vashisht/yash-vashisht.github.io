import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Download, Send } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm actively seeking new opportunities in Japan. Whether you're looking for a designer 
            to join your team or have a project in mind, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-8">
                Feel free to reach out through any of these channels or use the contact form.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Email</p>
                    <p className="text-white">yashvashisht15@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Location</p>
                    <p className="text-white">Available for Japan</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Resume</p>
                    <button className="text-white hover:underline">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-blue-100 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="https://in.linkedin.com/in/yash-vashisht-670223163"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="https://github.com/Yash-Vashisht"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Job Opportunity / Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}