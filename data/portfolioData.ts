import {
  Experience,
  Education,
  Organization,
  Project,
  Achievement,
  SkillSet,
  Certification,
} from "../types";

export const PERSONAL_INFO = {
  name: "NIAMILAH NABIL SYAHPUTRA",
  professions: [
    "Chief Product & Technology Officer",
    "Software Engineer",
    "UI/UX Designer",
  ],
  bio: "Multi-disciplinary technology leader blending full-stack engineering, product strategy, and design thinking. Currently serving as CPTO at an international news organization, driving product innovation and scalable technology solutions. Built 8+ production-grade web platforms serving thousands of users, with expertise spanning front-end architecture, API design, and user experience optimization. Committed to building digital products that create measurable impact at scale.",
  phone: "+6285870575425",
  email: "syahputranabil521@gmail.com",
  linkedin: "linkedin.com/in/niamilah-n-s",
  githubUsername: "genzabis",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "The Nusantara Times",
    department: "Executive Management",
    period: "2026 – Present",
    responsibilities: [
      "Serving as Chief Product & Technology Officer (CPTO)",
      "Leading product innovation and technology strategy at international scale",
    ],
  },
  {
    company: "UIN Prof. K.H Saifuddin Zuhri Purwokerto",
    department: "IT Helpdesk — Internship",
    period: "Jan – Feb 2025",
    responsibilities: [
      "Managed and resolved 50+ student technical issues for the campus operational system at saizu-link.uinsaizu.ac.id",
      "Full stack developer building and operating the Faculty of Science & Technology website (sainteku.uinsaizu.ac.id), serving 800+ students and 20+ educators",
    ],
  },
  {
    company: "Ministry of Religious Affairs, Brebes Regency",
    department: "Information Systems & Computerization — Internship",
    period: "Jan – Apr 2022",
    responsibilities: [
      "Responsible for managing data of 600+ Hajj pilgrims through digital data input, increasing pilgrim trust in the Brebes Regency Ministry",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "UIN Prof. K.H Saifuddin Zuhri Purwokerto",
    degree: "B.Sc. in Informatics / Computer Science",
    period: "Aug 2023 – Present",
    grade: "GPA: 3.79 / 4.00",
    achievements: [
      "Gold Medalist at University Arts & Sports Festival for social & religious digitalization",
      "Bronze Medalist at National Mandalika Essay Competition (MEC) for educational digitalization",
      "Bank Indonesia Scholarship Recipient 2025",
      "Finalist at National Information Technology Hackathon",
      "Finalist at National Sustainable Innovations Essay Competition (SINEC) for tourism digitalization",
    ],
  },
  {
    institution: "SMK Karya Bhakti Brebes",
    degree: "Software Engineering",
    period: "2020 – 2023",
    grade: "Score: 96 / 100",
    achievements: [
      "Silver Medalist at Brebes Regency Technology Website Competition (2023)",
      "Developer of Laundry Brebes website (2022)",
      "Developer of laptop e-commerce website (2022)",
    ],
  },
];

export const ORGANIZATIONS: Organization[] = [
  {
    name: "Generasi Baru Indonesia (GenBI) Purwokerto",
    role: "Media Department Staff",
    period: "Oct 2025 – Present",
    highlights: [
      "Produced 4+ designs for diverse content needs including podcasts, live event reports, and social media",
      "Drafted press releases to ensure clear and effective public communication",
    ],
  },
  {
    name: "Informatics Student Association (HMPS)",
    role: "Human Resource Development Staff",
    period: "Jan – Dec 2024",
    highlights: [
      "Initiated and managed 5+ work programs to enhance student competency",
      "Led a Technology Seminar with 100+ attendees and professional speakers",
      "Raised Rp2.5M+ in one week for social welfare activities",
      "Founded \"Oemah Sinau\" education program for orphans at Yayasan Yatim Piatu Budi Al Barokah Purbalingga",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Gold Medal",
    competition: "University Arts & Sports Festival (PESOMA) — UIN Saizu",
    year: "2025",
  },
  {
    title: "Bronze Medal",
    competition: "National Mandalika Essay Competition (MEC)",
    year: "2025",
  },
  {
    title: "Scholarship Recipient",
    competition: "Bank Indonesia Scholarship 2025",
    year: "2025",
  },
  {
    title: "Finalist",
    competition: "National Information Technology Hackathon",
    year: "2025",
  },
  {
    title: "Finalist",
    competition: "National Sustainable Innovations Essay Competition (SINEC)",
    year: "2025",
  },
  {
    title: "Silver Medal",
    competition: "Brebes Regency Technology Website Competition",
    year: "2023",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "DijsktraGame.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/gamedjikstra.png",
    description: "Interactive pathfinding game visualizing Dijkstra's algorithm in real-time — built with React and Canvas API for educational gamification.",
  },
  {
    title: "PantauDidik.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/pantaudidik.png",
    description: "Student performance monitoring dashboard enabling real-time academic tracking, analytics, and early intervention alerts for educators.",
  },
  {
    title: "Pulid.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/pulid.png",
    description: "Community service platform connecting volunteers with local initiatives — featuring event discovery, sign-up flows, and impact reporting.",
  },
  {
    title: "RupiahCheck.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/rupiahcheck.png",
    description: "Real-time Indonesian currency exchange rate tracker with multi-source aggregation, historical charts, and alert notifications.",
  },
  {
    title: "NgapakTour.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/ngapaktour.png",
    description: "Regional tourism discovery platform featuring curated local experiences, cultural guides, and interactive maps for Central Java.",
  },
  {
    title: "GaluhExplore.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/galuhexplore.png",
    description: "Campus exploration app with interactive campus maps, facility directories, and event calendars for university communities.",
  },
  {
    title: "sainteku.uinsaizu.ac.id",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/mawapres.png",
    description: "Official faculty website serving 800+ students and 20+ educators — featuring dynamic content management, academic resources, and admin dashboard.",
  },
  {
    title: "Ramenku Food App",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/ramenku.png",
    description: "Food ordering mobile-first application with menu browsing, cart management, and order tracking — designed for seamless UX.",
  },
  {
    title: "Vegetable Shape Detection (CNN) — Python",
    role: "Developer",
    year: "2025",
    image: "/images/cnn-sayur.png",
    description: "Convolutional Neural Network model for real-time vegetable classification using TensorFlow/Keras with 90%+ accuracy across 15 categories.",
  },
  {
    title: "Vegetable Shape Detection (CNN) — MATLAB",
    role: "Developer",
    year: "2025",
    image: "/images/cnn-sayur-matlab.png",
    description: "MATLAB-based CNN implementation for agricultural image classification — supporting research-grade data pipelines and visualization.",
  },
  {
    title: "Akhlakku.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/akhlakku.png",
    description: "Character education web platform delivering interactive moral learning modules, quizzes, and progress tracking for young learners.",
  },
  {
    title: "Meteor Shooter Game",
    role: "Developer",
    year: "2025",
    image: "/images/meteor.png",
    description: "Browser-based arcade game built with JavaScript Canvas — featuring particle effects, progressive difficulty, and leaderboard integration.",
  },
  {
    title: "E-Commerce Platform",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/ecommerce.png",
    description: "Full-featured e-commerce website with product catalog, cart system, checkout flow, and responsive design across all breakpoints.",
  },
];

export const SKILLS: SkillSet[] = [
  {
    category: "Engineering & Development",
    items: [
      "React / Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "REST API Design",
      "SQL / NoSQL",
      "Git & CI/CD",
      "Vite / Webpack",
    ],
  },
  {
    category: "Design & Product",
    items: [
      "Figma & Prototyping",
      "UI/UX Design Systems",
      "Responsive Web Design",
      "Product Strategy",
      "User Research & Testing",
      "Design-to-Code Workflow",
    ],
  },
  {
    category: "Core Competencies",
    items: [
      "Cross-functional Leadership",
      "Strategic Communication",
      "Agile & Scrum",
      "Problem Solving",
      "Technical Writing",
      "Data-driven Decision Making",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Copywriter",
    issuer: "BNSP (National Professional Certification Board)",
    year: "2025",
  },
  {
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik Indonesia",
    year: "2025",
  },
  {
    title: "Student Award Certificate",
    issuer: "UIN Prof. K.H Saifuddin Zuhri Purwokerto",
    year: "2025",
  },
];