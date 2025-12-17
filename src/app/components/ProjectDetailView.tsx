import { X, ExternalLink, Calendar, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useEffect } from 'react';

interface ProjectDetailViewProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    fullDescription?: string;
    role?: string;
    duration?: string;
    team?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    technologies?: string[];
    gallery?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
  viewType: 'live' | 'case-study';
}

export function ProjectDetailView({ project, isOpen, onClose, viewType }: ProjectDetailViewProps) {
  // Prevent body scroll when detail view is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Project Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {project.role && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Users size={20} className="sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">Role</p>
              <p className="text-sm sm:text-base text-gray-900">{project.role}</p>
            </motion.div>
          )}
          {project.duration && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Calendar size={20} className="sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-sm sm:text-base text-gray-900">{project.duration}</p>
            </motion.div>
          )}
          {project.team && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <ExternalLink size={20} className="sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">Team Size</p>
              <p className="text-sm sm:text-base text-gray-900">{project.team}</p>
            </motion.div>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            {viewType === 'case-study' ? (
              <>
                {/* Case Study Content */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-900">Overview</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-900">The Challenge</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.challenge || 
                      "The primary challenge was to create a user-centered design that balances aesthetic appeal with functional usability. We needed to understand user pain points, competitive landscape, and business objectives to deliver a solution that would stand out in the market while meeting user needs effectively."}
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-900">The Solution</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {project.solution || 
                      "Through extensive user research and iterative design processes, we developed a comprehensive solution that addresses key user needs. The design incorporates modern UI patterns, intuitive navigation, and carefully crafted visual hierarchy to guide users through their journey seamlessly."}
                  </p>
                  
                  {/* Process Steps */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {['Research & Discovery', 'Wireframing & Prototyping', 'Visual Design', 'User Testing'].map((step, index) => (
                      <div key={step} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm sm:text-base text-gray-900">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-900">Results & Impact</h2>
                  <div className="space-y-3">
                    {(project.results || [
                      'Improved user engagement by 45%',
                      'Reduced task completion time by 30%',
                      'Increased user satisfaction scores',
                      'Successfully met all project objectives'
                    ]).map((result) => (
                      <div key={result} className="flex items-start gap-3">
                        <CheckCircle size={18} className="sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-gray-600">{result}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </>
            ) : (
              <>
                {/* Live Project Preview */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-900">Project Overview</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {project.fullDescription || project.description}
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-blue-900 mb-4">
                      This is a preview of the live project. In a real implementation, this would contain:
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base text-blue-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Interactive prototypes and demos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Live website link or embedded preview</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Video walkthroughs and tutorials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Key feature demonstrations</span>
                      </li>
                    </ul>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-900">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {['Responsive Design', 'Intuitive Navigation', 'Modern UI Components', 'Accessibility First'].map((feature) => (
                      <div key={feature} className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <CheckCircle size={18} className="sm:w-5 sm:h-5 text-blue-600 mb-2" />
                        <p className="text-sm sm:text-base text-gray-900">{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-900">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="lg:sticky lg:top-24 space-y-4 sm:space-y-6"
            >
              {project.technologies && project.technologies.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg mb-3 sm:mb-4 text-gray-900">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-4 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg mb-3 sm:mb-4">Interested in this project?</h3>
                <p className="text-blue-100 mb-4 sm:mb-6 text-xs sm:text-sm">
                  I'd love to discuss this project in detail and how I can bring similar solutions to your team.
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="block w-full px-4 sm:px-6 py-3 bg-white text-blue-600 rounded-full text-center hover:bg-blue-50 transition-colors text-sm sm:text-base font-medium"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}