import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Heart, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    icon: Briefcase,
    title: '5+ Years',
    description: 'Professional Experience',
  },
  {
    icon: Award,
    title: '50+ Projects',
    description: 'Successfully Completed',
  },
  {
    icon: GraduationCap,
    title: 'Certified',
    description: 'Design Professional',
  },
  {
    icon: Heart,
    title: 'Passionate',
    description: 'About Creative Work',
  },
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              I'm a multidisciplinary designer with a passion for creating meaningful digital experiences. 
              My expertise spans UI/UX design, graphic design, and video editing, allowing me to approach 
              projects from multiple creative perspectives.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              With a strong foundation in design principles and a keen eye for detail, I specialize in 
              transforming complex ideas into simple, elegant solutions. I believe great design should 
              not only look beautiful but also solve real problems and enhance user experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              I'm currently seeking new opportunities in Japan where I can contribute my skills to 
              innovative teams and continue growing as a creative professional. I'm particularly 
              interested in roles that allow me to blend my technical skills with creative vision.
            </p>

            <button className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:scale-105 mb-6 sm:mb-8 text-sm sm:text-base">
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </button>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-900 mb-1">{highlight.title}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU1MjYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Designer workspace"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}