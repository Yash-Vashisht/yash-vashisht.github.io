import { X, ExternalLink, Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectModalProps {
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
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onViewLive: (project: any) => void;
  onViewCaseStudy: (project: any) => void;
}

export function ProjectModal({ project, isOpen, onClose, onViewLive, onViewCaseStudy }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-96 overflow-hidden rounded-t-2xl">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl mb-3 text-gray-900">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
            {project.role && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="text-gray-900">{project.role}</p>
                </div>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-gray-900">{project.duration}</p>
                </div>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ExternalLink size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Team</p>
                  <p className="text-gray-900">{project.team}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-3 text-gray-900">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {project.fullDescription || project.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              This project demonstrates my ability to combine creative thinking with technical execution, 
              delivering solutions that meet both user needs and business objectives. The design process 
              involved extensive research, iterative prototyping, and close collaboration with stakeholders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                if (project) {
                  onViewLive(project);
                }
              }}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              View Live Project
            </button>
            <button 
              onClick={() => {
                if (project) {
                  onViewCaseStudy(project);
                }
              }}
              className="flex-1 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}