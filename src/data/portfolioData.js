// ============================================================
// portfolioData.js — Centralized configuration for Anirudh Koppuravuri's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Anirudh Koppuravuri",
  firstName: "Anirudh Koppuravuri",
  brandName: "Anirudh Koppuravuri",
  title: "Software Developer & Engineer",
  location: "Vellore, India",
  phone: "+91 8639481359",
  emails: {
    primary: "anirudhkoppuravuri@gmail.com",
    secondary: "koppuravuri.anirudh2024@vitstudent.ac.in",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in Python, SQL, Data Analytics, and MERN Stack. Passionate about building scalable AI applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Anirudh_Koppuravuri_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/Anirudh01-os",
  linkedin: "https://www.linkedin.com/in/anirudh-koppuravuri-762643338/",
  instagram: "https://instagram.com/heyyusuffff",
};

export const heroContent = {
  
  subtitle:
    "I build fast, scalable AI applications using Python, Diffusion Models, Kubernetes, and GCP.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:anirudhkoppuravuri@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Anirudh Koppuravuri,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Anirudh_Koppuravuri_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Anirudh Koppuravuri</span>, an aspiring software engineer based in Vellore, India, dedicated to crafting clean, functional, and highly scalable AI applications.`,
  techStack: ["Python", "Data Analytics", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust AI applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 99 },
        { name: "SQL", level: 90 },
        { name: "MERN", level: 80 }
      ]
    },
    {
      title: "MERN Stack",
      skills: [
        { name: "MERN ", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Claude Code", level: 88 },
        { name: "n8n", level: 90 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 95 },
        { name: "Algorithms", level: 95 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "10+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "1k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Google Code Vipassanna Hackathon 2025",
    description: "design and deploy a multimodal deepfake detection system under competitive constraints.",
    role: "Participant",
    badge: "Attendee"
  },
  {
    title: "Microsoft Fabric Data Day 2025",
    description: "Attended the in-person event at Microsoft's office at Hyderabad and learned about Microsoft Fabric.",
    role: "Member",
    badge: "Volunteer"
  },
  {
    title: "Google Agentathon 2025",
    description: "Participated in an Hackathon organized by Google at MR University, where I developed a prototype for an AI-powered personal assistant using LLMs and n8n automation.",
    role: "Participant",
    badge: "Attendee"
  },
  {
    title: "Amazon ML Challange 2025",
    description: "Participated in the flagship hackathon and made into the top 100 out of 500 participants",
    role: "Participant",
    badge: "Attendee"
  },
  {
    title: "NVIDIA Event 2025",
    description: "Attended the in-person event at NVIDIA's office and learned about their latest advancements in AI and graphics technology.",
    role: "Attendee",
    badge: "Attendee"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "VIT Vellore, Vellore",
    role: "Undergraduate Research Assistant",
    duration: "June 2025 - August 2025",
    skills: ["Deep Research", "Postgre SQL", "Fast API", "Diffusion Models"],
    tech: ["GNNs", "SQL", "Pytorch", "Power BI"]
  },
  {
    organization: "BharatVersity",
    role: "MERN Stack Intern",
    duration: "Apr 2025 - July 2025",
    skills: ["MERN", "Poster Design", "AI AUtomation", "AI Agents"],
    tech: ["MERN", "JavaScript", "Canva Design Suite"]
  },
  {
    organization: "SkoolOfCode",
    role: "Teaching Assistant",
    duration: "2months (Onine)",
    skills: ["Python", "Deep Learning", "API Testing", "Web Performance"],
    tech: ["Python", "NumPy", "Pandas", "Bootstrap"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "Curexa Labs",
    number: "01",
    badge: "🚀 AI Drug Discovery System",
    title: "Curexa Labs",
    description:
      "Curexa Labs is an AI-powered drug discovery platform that leverages advanced machine learning algorithms to analyze molecular structures, predict drug efficacy, and accelerate the development of new pharmaceuticals. The system integrates a user-friendly interface with robust backend processing, enabling researchers to streamline their workflows and make data-driven decisions in real-time.",
    techTags: [
      "Deep Learning",
      "GNNs",
      "PyTorch",
      "PostgreSQL",
      "RD Kit",
      "PubChem",
      "Diffusion Models",
      "Docker",
      "Artificial Intelligence",
      "AWS",
    ],
    links: {
      github: "https://github.com/Anirudh01-os/Curexa-Labs",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "Optima-X",
    number: "02",
    badge: null,
    title: "Optima-X",
    description: "Built automated financial analysis pipelines using n8n and LLM orchestration, reducing manual overhead by 60%.",
    techTags: ["LLM", "N8N", "Agentic AI", "MultiModal Transformers", "Python"],
    links: {
      github: "https://github.com/Anirudh01-os/Optima-X",
      frontendDemo: "https://optima-x-frontend.onrender.com",
      backendApi: "https://optima-x-backend.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "DistServe",
    number: "03",
    badge: null,
    title: "DistServe",
    description:
      "Designed a load-aware request router, inspired by Google’s GKE Inference Gateway, that scrapes real-time KV-cache utilization via Prometheus and routes traffic to the least-loaded pod, cutting P95 latency by 48%.",
    techTags: ["Python", "Fast API", "Docker", "Kubernetes", "Redis", "Prometheus"],
    links: {
      github: "#", // Update when available
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Microsoft Certified Data Associate Engineer (DP-700)",
      issuer: "Microsoft",
      icon: "☕",
    },
    {
      name: "Manage Kubernetes in Google CLoud",
      issuer: "Google Cloud",
      icon: "⚙️",
    },
    {
      name: "Build and Blog Marathon",
      issuer: "Google Developers Group",
      icon: "💼",
    },
    {
      name: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
      issuer: "Google Cloud",
      icon: "🎓",
    },
    {
      name: "Introduction to AI Concepts",
      issuer: "Microsoft",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/anirudh-koppuravuri-762643338/details/certifications/",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Vellore Institute of Technology (VIT)",
  cgpa: "8.6",
  graduation: "2028",
};

export const footerContent = {
  taglines: [
    "Software Developer and AI Engineer",
    "Python · AI · SQL",
    "Full Stack AI Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.6",
  copyright: `© ${new Date().getFullYear()} Anirudh | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
