
import khadim from '../assets/khadim.jpg';
import uzair from '../assets/uzair.png'
import ceo from '../assets/CEO.jpg'

export const projectData = [
    { id: 1, title: "Frontend Engineers" },
    { id: 2, title: "Full-stack Engineers" },
    { id: 3, title: "Android Developers" },
    { id: 4, title: "AI / ML Engineers" },
    { id: 5, title: "UI / UX Engineers" },
    { id: 6, title: "Data Scientists" },
    { id: 7, title: "WordPress Developers" },
    { id: 8, title: "Video Editing" },
    { id: 9, title: "Photo Editing" },
    { id: 10, title: "CS&IT Degree Assignments" },
    { id: 11, title: "Academic Assignment" },
    { id: 12, title: "Social Media Marketing" },
];

export const processSteps = [
    { id: 1, title: "Discovery & Planning", description: "We start by understanding your vision and requirements to create a detailed project roadmap." },
    { id: 2, title: "Design & Development", description: "Our team designs and develops your project using the latest technologies and best practices." },
    { id: 3, title: "Testing & Deployment", description: "We rigorously test for quality and performance before deploying the final product." }
];

export const testimonials = [
  { id: 1, quote: "This software house delivered beyond our expectations. The team was professional, responsive, and highly skilled.", author: "John Doe", company: "Tech Solutions Inc.", rating: 5 },
  { id: 2, quote: "Working with them was a breeze. They understood our vision and turned it into a reality.", author: "Jane Smith", company: "Innovate Co.", rating: 5 },
  { id: 3, quote: "The final product was exceptional. I would highly recommend their services to anyone.", author: "Sam Wilson", company: "Creative Minds LLC", rating: 4 }
];

export const faqs = [
  { id: 1, question: "What is the typical timeline for a project?", answer: "The timeline varies depending on the project's scope and complexity, but we always provide a detailed schedule upfront." },
  { id: 2, question: "How much does a project cost?", answer: "We provide custom quotes based on your specific needs. Contact us for a free consultation and estimate." },
  { id: 3, question: "What technologies do you specialize in?", answer: "We specialize in a wide range of modern technologies, including React, Node.js, Python, and more. We select the best stack for your project's needs." }
  
];


export const team = [
  { id: 1, name: "Shyan Ali", role: "CEO & Founder", image: ceo },
  { id: 2, name: "Muhammad Uzair ", role: "CO-Founder", image: uzair },
  { id: 3, name: "Khadim Ali", role: "CTO", image: khadim },
]

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    date: "January 2024",
    description: "A fully responsive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Secure payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Responsive design for all devices"
    ],
    liveLink: "https://example.com/ecommerce",
    image: null
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile & Web",
    date: "December 2023",
    description: "A comprehensive task management application that helps teams collaborate effectively. Features real-time updates, team collaboration tools, and advanced analytics to track productivity.",
    technologies: ["React Native", "Firebase", "Redux", "Material-UI"],
    features: [
      "Real-time task updates and notifications",
      "Team collaboration and assignment",
      "Project timelines and milestones",
      "Advanced analytics and reporting",
      "File attachments and comments",
      "Cross-platform support (iOS, Android, Web)"
    ],
    liveLink: "https://example.com/taskmanager",
    image: null
  },
  {
    id: 3,
    title: "Healthcare Portal",
    category: "Healthcare",
    date: "November 2023",
    description: "A secure healthcare management portal connecting patients with healthcare providers. Includes appointment scheduling, medical records management, and telemedicine capabilities.",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
    features: [
      "Patient registration and profile management",
      "Online appointment booking",
      "Video consultation integration",
      "Electronic health records (EHR)",
      "Prescription management",
      "HIPAA compliant security measures"
    ],
    liveLink: "https://example.com/healthcare",
    image: null
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    category: "Analytics",
    date: "October 2023",
    description: "An all-in-one social media management dashboard that allows users to manage multiple social media accounts, schedule posts, and analyze performance metrics.",
    technologies: ["Vue.js", "Express", "Chart.js", "Redis"],
    features: [
      "Multi-platform social media integration",
      "Post scheduling and automation",
      "Analytics and performance metrics",
      "Engagement tracking and reporting",
      "Content calendar management",
      "Team collaboration features"
    ],
    liveLink: "https://example.com/socialdashboard",
    image: null
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "Education",
    date: "September 2023",
    description: "A comprehensive learning management system for online education. Features course creation, student enrollment, video lessons, quizzes, and progress tracking.",
    technologies: ["React", "Django", "PostgreSQL", "AWS S3"],
    features: [
      "Course creation and management",
      "Video lesson hosting and streaming",
      "Interactive quizzes and assessments",
      "Student progress tracking",
      "Certificate generation",
      "Discussion forums and messaging"
    ],
    liveLink: "https://example.com/lms",
    image: null
  },
  {
    id: 6,
    title: "Restaurant Management System",
    category: "Business",
    date: "August 2023",
    description: "A complete restaurant management solution with POS system, inventory management, table reservations, and online ordering capabilities.",
    technologies: ["Angular", "Node.js", "MySQL", "Socket.io"],
    features: [
      "Point of Sale (POS) system",
      "Inventory and stock management",
      "Table reservation system",
      "Online ordering integration",
      "Kitchen display system (KDS)",
      "Sales reporting and analytics"
    ],
    liveLink: "https://example.com/restaurant",
    image: null
  }
];