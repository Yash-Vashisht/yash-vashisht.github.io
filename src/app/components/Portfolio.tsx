import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import { ProjectDetailView } from './ProjectDetailView';

type ProjectCategory = 'all' | 'uiux' | 'graphic' | 'video';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    category: 'uiux',
    description: 'Complete UI/UX design for a modern shopping app with seamless user experience',
    image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2NTYyMzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile Design', 'Figma', 'Prototyping'],
    fullDescription: 'Designed a comprehensive e-commerce mobile application focusing on user-centered design principles and modern UI patterns. The project included user research, wireframing, high-fidelity mockups, and interactive prototypes.',
    role: 'Lead UI/UX Designer',
    duration: '3 months',
    team: 'Solo Project',
    challenge: 'Creating an intuitive shopping experience that reduces cart abandonment and increases conversion rates while maintaining brand identity.',
    solution: 'Implemented a streamlined checkout process, personalized product recommendations, and clear visual hierarchy to guide users through their shopping journey.',
    results: ['45% increase in user engagement', '30% reduction in cart abandonment', '4.8/5 user satisfaction rating', 'Successfully launched to 10,000+ users'],
    technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    ],
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'graphic',
    description: 'Complete brand identity including logo, color palette, and brand guidelines',
    image: 'https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NTU0MDI1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Branding', 'Illustrator', 'Identity'],
    fullDescription: 'Created a complete brand identity system for a tech startup, including logo design, typography selection, color palette development, and comprehensive brand guidelines to ensure consistent brand communication.',
    role: 'Brand Designer',
    duration: '2 months',
    team: 'Design Team of 2',
    challenge: 'Developing a unique brand identity that stands out in a crowded tech market while remaining professional and trustworthy.',
    solution: 'Created a modern, minimalist design system with bold colors and clean typography that reflects innovation while maintaining professionalism.',
    results: ['Brand recognition increased by 60%', 'Consistent application across 15+ touchpoints', 'Positive feedback from stakeholders', 'Award nomination for design excellence'],
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Sketch'],
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800',
    ],
  },
  {
    id: 3,
    title: 'Product Launch Video',
    category: 'video',
    description: 'Dynamic promotional video with motion graphics and smooth transitions',
    image: 'https://images.unsplash.com/photo-1579109652910-99b9be06aaec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjU1MTg5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Premiere Pro', 'Motion Graphics', 'Video'],
    fullDescription: 'Produced a high-energy product launch video featuring motion graphics, dynamic transitions, and compelling storytelling. The video successfully communicated the product\'s value proposition and generated significant engagement.',
    role: 'Video Editor & Motion Designer',
    duration: '1 month',
    team: 'Production Team of 4',
    challenge: 'Creating an engaging video that explains complex features in under 90 seconds while maintaining viewer attention.',
    solution: 'Developed a fast-paced narrative with dynamic motion graphics, clear messaging, and strategic pacing to keep viewers engaged.',
    results: ['500K+ views in first week', '85% viewer retention rate', 'Featured on industry publications', 'Client satisfaction: 5/5'],
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D'],
    gallery: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
    ],
  },
  {
    id: 4,
    title: 'SaaS Dashboard Design',
    category: 'uiux',
    description: 'Intuitive dashboard interface with data visualization and user analytics',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTk4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web Design', 'Dashboard', 'UX Research'],
    fullDescription: 'Designed an intuitive SaaS dashboard with complex data visualization, user analytics, and comprehensive reporting features. The interface prioritizes usability while presenting large amounts of data in an accessible format.',
    role: 'Senior UX Designer',
    duration: '4 months',
    team: 'Cross-functional Team',
    challenge: 'Presenting complex data analytics in a way that\'s accessible to both technical and non-technical users.',
    solution: 'Created a modular dashboard with customizable widgets, clear visual hierarchy, and progressive disclosure of information.',
    results: ['40% improvement in task efficiency', 'Reduced learning curve by 50%', 'Net Promoter Score of 72', 'Successfully onboarded 100+ enterprise clients'],
    technologies: ['Figma', 'React', 'D3.js', 'Chart.js'],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    ],
  },
  {
    id: 5,
    title: 'Social Media Campaign',
    category: 'graphic',
    description: 'Eye-catching social media graphics for multi-platform marketing campaign',
    image: 'https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU1MjYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Social Media', 'Photoshop', 'Marketing'],
    fullDescription: 'Created a cohesive social media campaign spanning multiple platforms with eye-catching graphics, consistent branding, and high engagement rates. The campaign successfully increased brand awareness and user interaction.',
    role: 'Graphic Designer',
    duration: '6 weeks',
    team: 'Marketing Team',
    challenge: 'Creating platform-specific content that maintains brand consistency while optimizing for each social media platform\'s unique requirements.',
    solution: 'Developed a flexible design system with adaptable templates that work across Instagram, Twitter, Facebook, and LinkedIn.',
    results: ['3x increase in engagement rate', '50K+ new followers across platforms', '25% increase in website traffic', 'Campaign reached 2M+ impressions'],
    technologies: ['Photoshop', 'Illustrator', 'Canva', 'Figma'],
    gallery: [
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800',
    ],
  },
  {
    id: 6,
    title: 'Corporate Presentation',
    category: 'video',
    description: 'Professional corporate video with interviews and b-roll footage',
    image: 'https://images.unsplash.com/photo-1752658918430-e3ff8a92c4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwamFwYW58ZW58MXx8fHwxNzY1NjIzODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Corporate', 'Editing', 'Color Grading'],
    fullDescription: 'Edited a professional corporate presentation video featuring executive interviews, b-roll footage, and strategic messaging. Applied professional color grading and audio mixing to deliver a polished final product.',
    role: 'Lead Video Editor',
    duration: '2 months',
    team: 'Video Production Team',
    challenge: 'Balancing corporate professionalism with engaging storytelling to avoid typical "boring corporate video" pitfalls.',
    solution: 'Combined dynamic editing, professional interviews, and compelling b-roll to create an engaging narrative that maintains corporate standards.',
    results: ['Used in international conferences', '95% positive feedback from executives', 'Contributed to 3 major partnerships', 'Became template for future videos'],
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
    ],
  },
];

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'graphic', label: 'Graphic Design' },
  { id: 'video', label: 'Video Editing' },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [detailViewType, setDetailViewType] = useState<'live' | 'case-study'>('live');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleViewLive = (project: Project) => {
    setIsModalOpen(false);
    setDetailViewType('live');
    setIsDetailViewOpen(true);
    setSelectedProject(project);
  };

  const handleViewCaseStudy = (project: Project) => {
    setIsModalOpen(false);
    setDetailViewType('case-study');
    setIsDetailViewOpen(true);
    setSelectedProject(project);
  };

  const handleCloseDetailView = () => {
    setIsDetailViewOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setDetailViewType('live');
    }, 300);
  };

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my design and creative capabilities
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button 
                    onClick={() => handleOpenModal(project)}
                    className="flex items-center gap-2 text-white"
                  >
                    {project.category === 'video' ? (
                      <>
                        <Play size={20} />
                        <span>Watch Project</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink size={20} />
                        <span>View Details</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewLive={handleViewLive}
        onViewCaseStudy={handleViewCaseStudy}
      />

      <ProjectDetailView
        project={selectedProject}
        isOpen={isDetailViewOpen}
        onClose={handleCloseDetailView}
        viewType={detailViewType}
      />
    </section>
  );
}