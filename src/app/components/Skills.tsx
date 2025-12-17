import { motion } from 'motion/react';
import { Palette, Layout, Video, Figma, Layers, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and user-centered digital experiences',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Protopie'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Developing compelling visual identities and brand materials',
    tools: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Canva'],
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Producing engaging video content and motion graphics',
    tools: ['Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects'],
  },
];

const additionalSkills = [
  { icon: Figma, name: 'Wireframing & Prototyping' },
  { icon: Layers, name: 'Design Systems' },
  { icon: Sparkles, name: 'Motion Graphics' },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            My Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Combining creativity with technical skills to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 sm:px-3 py-1 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {additionalSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 rounded-full border border-gray-200"
              >
                <Icon size={18} className="sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-sm sm:text-base text-gray-700">{skill.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}