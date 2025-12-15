// Project Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    category: "uiux",
    description:
      "Complete UI/UX design for a modern shopping app with seamless user experience",
    image:
      "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2NTYyMzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile Design", "Figma", "Prototyping"],
    fullDescription:
      "Designed a comprehensive e-commerce mobile application focusing on user-centered design principles and modern UI patterns. The project included user research, wireframing, high-fidelity mockups, and interactive prototypes.",
    role: "Lead UI/UX Designer",
    duration: "3 months",
    team: "Solo Project",
    challenge:
      "Creating an intuitive shopping experience that reduces cart abandonment and increases conversion rates while maintaining brand identity.",
    solution:
      "Implemented a streamlined checkout process, personalized product recommendations, and clear visual hierarchy to guide users through their shopping journey.",
    results: [
      "45% increase in user engagement",
      "30% reduction in cart abandonment",
      "4.8/5 user satisfaction rating",
      "Successfully launched to 10,000+ users",
    ],
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    ],
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "graphic",
    description:
      "Complete brand identity including logo, color palette, and brand guidelines",
    image:
      "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NTU0MDI1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Branding", "Illustrator", "Identity"],
    fullDescription:
      "Created a complete brand identity system for a tech startup, including logo design, typography selection, color palette development, and comprehensive brand guidelines to ensure consistent brand communication.",
    role: "Brand Designer",
    duration: "2 months",
    team: "Design Team of 2",
    challenge:
      "Developing a unique brand identity that stands out in a crowded tech market while remaining professional and trustworthy.",
    solution:
      "Created a modern, minimalist design system with bold colors and clean typography that reflects innovation while maintaining professionalism.",
    results: [
      "Brand recognition increased by 60%",
      "Consistent application across 15+ touchpoints",
      "Positive feedback from stakeholders",
      "Award nomination for design excellence",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Sketch"],
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800",
    ],
  },
  {
    id: 3,
    title: "Product Launch Video",
    category: "video",
    description:
      "Dynamic promotional video with motion graphics and smooth transitions",
    image:
      "https://images.unsplash.com/photo-1579109652910-99b9be06aaec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjU1MTg5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Premiere Pro", "Motion Graphics", "Video"],
    fullDescription:
      "Produced a high-energy product launch video featuring motion graphics, dynamic transitions, and compelling storytelling. The video successfully communicated the product's value proposition and generated significant engagement.",
    role: "Video Editor & Motion Designer",
    duration: "1 month",
    team: "Production Team of 4",
    challenge:
      "Creating an engaging video that explains complex features in under 90 seconds while maintaining viewer attention.",
    solution:
      "Developed a fast-paced narrative with dynamic motion graphics, clear messaging, and strategic pacing to keep viewers engaged.",
    results: [
      "500K+ views in first week",
      "85% viewer retention rate",
      "Featured on industry publications",
      "Client satisfaction: 5/5",
    ],
    technologies: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Cinema 4D",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800",
    ],
  },
  {
    id: 4,
    title: "SaaS Dashboard Design",
    category: "uiux",
    description:
      "Intuitive dashboard interface with data visualization and user analytics",
    image:
      "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTk4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web Design", "Dashboard", "UX Research"],
    fullDescription:
      "Designed an intuitive SaaS dashboard with complex data visualization, user analytics, and comprehensive reporting features. The interface prioritizes usability while presenting large amounts of data in an accessible format.",
    role: "Senior UX Designer",
    duration: "4 months",
    team: "Cross-functional Team",
    challenge:
      "Presenting complex data analytics in a way that's accessible to both technical and non-technical users.",
    solution:
      "Created a modular dashboard with customizable widgets, clear visual hierarchy, and progressive disclosure of information.",
    results: [
      "40% improvement in task efficiency",
      "Reduced learning curve by 50%",
      "Net Promoter Score of 72",
      "Successfully onboarded 100+ enterprise clients",
    ],
    technologies: ["Figma", "React", "D3.js", "Chart.js"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    ],
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "graphic",
    description:
      "Eye-catching social media graphics for multi-platform marketing campaign",
    image:
      "https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU1MjYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Social Media", "Photoshop", "Marketing"],
    fullDescription:
      "Created a cohesive social media campaign spanning multiple platforms with eye-catching graphics, consistent branding, and high engagement rates. The campaign successfully increased brand awareness and user interaction.",
    role: "Graphic Designer",
    duration: "6 weeks",
    team: "Marketing Team",
    challenge:
      "Creating platform-specific content that maintains brand consistency while optimizing for each social media platform's unique requirements.",
    solution:
      "Developed a flexible design system with adaptable templates that work across Instagram, Twitter, Facebook, and LinkedIn.",
    results: [
      "3x increase in engagement rate",
      "50K+ new followers across platforms",
      "25% increase in website traffic",
      "Campaign reached 2M+ impressions",
    ],
    technologies: ["Photoshop", "Illustrator", "Canva", "Figma"],
    gallery: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800",
    ],
  },
  {
    id: 6,
    title: "Corporate Presentation",
    category: "video",
    description:
      "Professional corporate video with interviews and b-roll footage",
    image:
      "https://images.unsplash.com/photo-1752658918430-e3ff8a92c4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwamFwYW58ZW58MXx8fHwxNzY1NjIzODE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Corporate", "Editing", "Color Grading"],
    fullDescription:
      "Edited a professional corporate presentation video featuring executive interviews, b-roll footage, and strategic messaging. Applied professional color grading and audio mixing to deliver a polished final product.",
    role: "Lead Video Editor",
    duration: "2 months",
    team: "Video Production Team",
    challenge:
      'Balancing corporate professionalism with engaging storytelling to avoid typical "boring corporate video" pitfalls.',
    solution:
      "Combined dynamic editing, professional interviews, and compelling b-roll to create an engaging narrative that maintains corporate standards.",
    results: [
      "Used in international conferences",
      "95% positive feedback from executives",
      "Contributed to 3 major partnerships",
      "Became template for future videos",
    ],
    technologies: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Audition",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    ],
  },
];

// State
let currentCategory = "all";
let selectedProject = null;
let detailViewType = "live";

// DOM Elements
const projectsGrid = document.getElementById("projectsGrid");
const categoryBtns = document.querySelectorAll(".category-btn");
const projectModal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const detailView = document.getElementById("detailView");
const detailContent = document.getElementById("detailContent");
const detailBack = document.getElementById("detailBack");
const detailClose = document.getElementById("detailClose");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// Initialize
function init() {
  renderProjects();
  setupEventListeners();
  setupScrollHeader();
}

// Render Projects
function renderProjects() {
  const filteredProjects =
    currentCategory === "all"
      ? projects
      : projects.filter((p) => p.category === currentCategory);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project, index) => `
        <div class="project-card" data-id="${
          project.id
        }" style="animation-delay: ${index * 0.1}s">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${
        project.title
      }" class="project-image">
                <div class="project-overlay">
                    <div class="project-view-btn">
                        ${
                          project.category === "video"
                            ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Watch Project</span>'
                            : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>View Details</span>'
                        }
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags
                      .map((tag) => `<span class="project-tag">${tag}</span>`)
                      .join("")}
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Add click handlers
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = parseInt(card.dataset.id);
      openProjectModal(projectId);
    });
  });
}

// Open Project Modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  selectedProject = project;

  modalBody.innerHTML = `
        <img src="${project.image}" alt="${
    project.title
  }" class="modal-hero-image">
        <h2 class="section-title">${project.title}</h2>
        <p class="about-text">${
          project.fullDescription || project.description
        }</p>
        
        <div class="modal-info-cards">
            ${
              project.role
                ? `
                <div class="modal-info-card">
                    <div class="modal-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <p class="modal-info-label">Role</p>
                    <p class="modal-info-value">${project.role}</p>
                </div>
            `
                : ""
            }
            ${
              project.duration
                ? `
                <div class="modal-info-card">
                    <div class="modal-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <p class="modal-info-label">Duration</p>
                    <p class="modal-info-value">${project.duration}</p>
                </div>
            `
                : ""
            }
            ${
              project.team
                ? `
                <div class="modal-info-card">
                    <div class="modal-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </div>
                    <p class="modal-info-label">Team Size</p>
                    <p class="modal-info-value">${project.team}</p>
                </div>
            `
                : ""
            }
        </div>

        <div class="modal-buttons">
            <button class="modal-btn modal-btn-primary" onclick="openDetailView('live')">
                View Live Project
            </button>
            <button class="modal-btn modal-btn-secondary" onclick="openDetailView('case-study')">
                Case Study
            </button>
        </div>
    `;

  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Project Modal
function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Open Detail View
function openDetailView(type) {
  detailViewType = type;
  closeProjectModal();

  if (!selectedProject) return;

  const project = selectedProject;

  if (type === "case-study") {
    detailContent.innerHTML = `
            <div class="detail-hero">
                <img src="${project.image}" alt="${
      project.title
    }" class="detail-hero-image">
                <div class="detail-hero-overlay">
                    <div class="container">
                        <div class="detail-hero-content">
                            <div class="detail-hero-tags">
                                ${project.tags
                                  .map(
                                    (tag) =>
                                      `<span class="detail-hero-tag">${tag}</span>`
                                  )
                                  .join("")}
                            </div>
                            <h1 class="detail-hero-title">${project.title}</h1>
                            <p class="detail-hero-description">${
                              project.description
                            }</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-content-section">
                <div class="container">
                    <div class="detail-info-cards">
                        ${
                          project.role
                            ? `
                            <div class="detail-info-card">
                                <div class="modal-info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <p class="modal-info-label">Role</p>
                                <p class="modal-info-value">${project.role}</p>
                            </div>
                        `
                            : ""
                        }
                        ${
                          project.duration
                            ? `
                            <div class="detail-info-card">
                                <div class="modal-info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                                <p class="modal-info-label">Duration</p>
                                <p class="modal-info-value">${project.duration}</p>
                            </div>
                        `
                            : ""
                        }
                        ${
                          project.team
                            ? `
                            <div class="detail-info-card">
                                <div class="modal-info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>
                                <p class="modal-info-label">Team Size</p>
                                <p class="modal-info-value">${project.team}</p>
                            </div>
                        `
                            : ""
                        }
                    </div>

                    <div class="detail-grid">
                        <div>
                            <div class="detail-section">
                                <h2 class="detail-section-title">Overview</h2>
                                <p class="detail-section-text">${
                                  project.fullDescription || project.description
                                }</p>
                            </div>

                            <div class="detail-section">
                                <h2 class="detail-section-title">The Challenge</h2>
                                <p class="detail-section-text">${
                                  project.challenge ||
                                  "The primary challenge was to create a user-centered design that balances aesthetic appeal with functional usability. We needed to understand user pain points, competitive landscape, and business objectives to deliver a solution that would stand out in the market while meeting user needs effectively."
                                }</p>
                            </div>

                            <div class="detail-section">
                                <h2 class="detail-section-title">The Solution</h2>
                                <p class="detail-section-text">${
                                  project.solution ||
                                  "Through extensive user research and iterative design processes, we developed a comprehensive solution that addresses key user needs. The design incorporates modern UI patterns, intuitive navigation, and carefully crafted visual hierarchy to guide users through their journey seamlessly."
                                }</p>
                                
                                <div class="process-steps">
                                    <div class="process-step">
                                        <div class="process-number">1</div>
                                        <p>Research & Discovery</p>
                                    </div>
                                    <div class="process-step">
                                        <div class="process-number">2</div>
                                        <p>Wireframing & Prototyping</p>
                                    </div>
                                    <div class="process-step">
                                        <div class="process-number">3</div>
                                        <p>Visual Design</p>
                                    </div>
                                    <div class="process-step">
                                        <div class="process-number">4</div>
                                        <p>User Testing</p>
                                    </div>
                                </div>
                            </div>

                            <div class="detail-section">
                                <h2 class="detail-section-title">Results & Impact</h2>
                                <div>
                                    ${(
                                      project.results || [
                                        "Improved user engagement by 45%",
                                        "Reduced task completion time by 30%",
                                        "Increased user satisfaction scores",
                                        "Successfully met all project objectives",
                                      ]
                                    )
                                      .map(
                                        (result) => `
                                        <div class="result-item">
                                            <svg class="result-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <p class="detail-section-text">${result}</p>
                                        </div>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>

                            ${
                              project.gallery && project.gallery.length > 0
                                ? `
                                <div class="detail-section">
                                    <h2 class="detail-section-title">Project Gallery</h2>
                                    <div class="gallery-grid">
                                        ${project.gallery
                                          .map(
                                            (img, idx) => `
                                            <img src="${img}" alt="${
                                              project.title
                                            } - Image ${
                                              idx + 1
                                            }" class="gallery-image">
                                        `
                                          )
                                          .join("")}
                                    </div>
                                </div>
                            `
                                : ""
                            }
                        </div>

                        <div class="detail-sidebar">
                            ${
                              project.technologies &&
                              project.technologies.length > 0
                                ? `
                                <div class="detail-sidebar-card">
                                    <h3 class="detail-sidebar-title">Technologies Used</h3>
                                    <div class="tech-tags">
                                        ${project.technologies
                                          .map(
                                            (tech) =>
                                              `<span class="tech-tag">${tech}</span>`
                                          )
                                          .join("")}
                                    </div>
                                </div>
                            `
                                : ""
                            }

                            <div class="cta-card">
                                <h3>Interested in this project?</h3>
                                <p>I'd love to discuss this project in detail and how I can bring similar solutions to your team.</p>
                                <a href="#contact" class="btn btn-secondary" onclick="closeDetailView()">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  } else {
    // Live Project View
    detailContent.innerHTML = `
            <div class="detail-hero">
                <img src="${project.image}" alt="${
      project.title
    }" class="detail-hero-image">
                <div class="detail-hero-overlay">
                    <div class="container">
                        <div class="detail-hero-content">
                            <div class="detail-hero-tags">
                                ${project.tags
                                  .map(
                                    (tag) =>
                                      `<span class="detail-hero-tag">${tag}</span>`
                                  )
                                  .join("")}
                            </div>
                            <h1 class="detail-hero-title">${project.title}</h1>
                            <p class="detail-hero-description">${
                              project.description
                            }</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-content-section">
                <div class="container">
                    <div class="detail-grid">
                        <div>
                            <div class="detail-section">
                                <h2 class="detail-section-title">Project Overview</h2>
                                <p class="detail-section-text">${
                                  project.fullDescription || project.description
                                }</p>
                                <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 0.75rem; padding: 1.5rem; margin-top: 1.5rem;">
                                    <p style="color: #1e3a8a; margin-bottom: 1rem;">This is a preview of the live project. In a real implementation, this would contain:</p>
                                    <ul style="color: #1e40af; list-style: none; padding: 0;">
                                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Interactive prototypes and demos
                                        </li>
                                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Live website link or embedded preview
                                        </li>
                                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Video walkthroughs and tutorials
                                        </li>
                                        <li style="display: flex; align-items: center; gap: 0.5rem;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Key feature demonstrations
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="detail-section">
                                <h2 class="detail-section-title">Key Features</h2>
                                <div class="process-steps">
                                    ${[
                                      "Responsive Design",
                                      "Intuitive Navigation",
                                      "Modern UI Components",
                                      "Accessibility First",
                                    ]
                                      .map(
                                        (feature) => `
                                        <div class="process-step">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <p>${feature}</p>
                                        </div>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>

                            ${
                              project.gallery && project.gallery.length > 0
                                ? `
                                <div class="detail-section">
                                    <h2 class="detail-section-title">Project Gallery</h2>
                                    <div class="gallery-grid">
                                        ${project.gallery
                                          .map(
                                            (img, idx) => `
                                            <img src="${img}" alt="${
                                              project.title
                                            } - Image ${
                                              idx + 1
                                            }" class="gallery-image">
                                        `
                                          )
                                          .join("")}
                                    </div>
                                </div>
                            `
                                : ""
                            }
                        </div>

                        <div class="detail-sidebar">
                            ${
                              project.technologies &&
                              project.technologies.length > 0
                                ? `
                                <div class="detail-sidebar-card">
                                    <h3 class="detail-sidebar-title">Technologies Used</h3>
                                    <div class="tech-tags">
                                        ${project.technologies
                                          .map(
                                            (tech) =>
                                              `<span class="tech-tag">${tech}</span>`
                                          )
                                          .join("")}
                                    </div>
                                </div>
                            `
                                : ""
                            }

                            <div class="cta-card">
                                <h3>Interested in this project?</h3>
                                <p>I'd love to discuss this project in detail and how I can bring similar solutions to your team.</p>
                                <a href="#contact" class="btn btn-secondary" onclick="closeDetailView()">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  detailView.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Detail View
function closeDetailView() {
  detailView.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Filter
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProjects();
    });
  });

  // Modal Close
  modalClose.addEventListener("click", closeProjectModal);
  projectModal
    .querySelector(".modal-overlay")
    .addEventListener("click", closeProjectModal);

  // Detail View Close
  detailBack.addEventListener("click", closeDetailView);
  detailClose.addEventListener("click", closeDetailView);

  // Mobile Menu
  mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Close mobile menu on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });
  });

  // Contact Form
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show success message
    showToast("Message sent successfully!");

    // Reset form
    contactForm.reset();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Setup Scroll Header
function setupScrollHeader() {
  const header = document.getElementById("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });
}

// Show Toast Notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", init);

// Make functions globally accessible
window.openDetailView = openDetailView;
window.closeDetailView = closeDetailView;
