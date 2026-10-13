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
  shortName: "Niamilah Nabil S.",
  professions: [
    "Full Stack Developer",
    "Chief Product & Technology Officer",
    "UI/UX Designer",
  ],
  headline: "Full Stack Developer | Chief Product & Technology Officer",
  bio: "Informatics undergraduate with a GPA of 3.82/4.00, experienced in developing 8+ web applications and digitizing more than 2,000 community records. Skilled in full stack web development and UI/UX design, with experience leading 5+ student development programs and social initiatives. Pursuing a career in web development, building efficient digital systems focused on user needs.",
  phone: "+62 858-7057-5425",
  phoneRaw: "+6285870575425",
  email: "syahputranabil521@gmail.com",
  linkedin: "linkedin.com/in/niamilah-n-s",
  linkedinUrl: "https://linkedin.com/in/niamilah-n-s",
  githubUsername: "genzabis",
  githubUrl: "https://github.com/genzabis",
  cvUrl: "/cv.pdf",
  location: "Purwokerto, Central Java, Indonesia",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Mawapres Awards — Student Achievement Information System",
    department: "Full Stack Developer",
    link: "https://mawapres.uinsaizu.ac.id",
    responsibilities: [
      "Developed the official in-house platform for archiving, validating, and recognizing student achievements at UIN Prof. K.H. Saifuddin Zuhri Purwokerto.",
      "The system covers academic and non-academic achievements at local, regional, national, and international levels.",
    ],
  },
  {
    company: "Sukamulya Village Data Management System",
    department: "Full Stack Developer",
    period: "August 2026 – Present",
    link: "https://sukamulya-pangandaran.id",
    responsibilities: [
      "Manage and resolve issues across 2,000+ resident records in Sukamulya Village through a digital data management system.",
      "Develop user interfaces and secure database architecture to support efficient, transparent village administration services.",
    ],
  },
  {
    company: "The Nusantara Times",
    department: "Chief Product & Technology Officer (CPTO)",
    period: "July 2026 – Present",
    link: "https://thenusantaratimes.com",
    responsibilities: [
      "Lead product strategy and technology development for The Nusantara Times, an international news platform.",
      "Oversee technical architecture, infrastructure scalability, and user experience optimization for a global news audience.",
    ],
  },
  {
    company: "UIN Prof. K.H. Saifuddin Zuhri Purwokerto",
    department: "IT Helpdesk Intern",
    period: "January 2026 – February 2026",
    link: "https://saizu-link.uinsaizu.ac.id",
    responsibilities: [
      "Handled and resolved 50+ student support issues related to campus systems at saizu-link.uinsaizu.ac.id.",
      "Built and maintained the Faculty of Science and Technology website (saintekku.uinsaizu.ac.id) as a full stack developer, improving access to academic resources for 800+ students and 20+ educators.",
    ],
  },
  {
    company: "Ministry of Religious Affairs, Brebes Regency",
    department: "Information Systems and Computerization Intern",
    period: "January 2022 – April 2022",
    responsibilities: [
      "Managed digital records for 600+ Hajj pilgrims, helping strengthen trust in the Brebes Regency Ministry of Religious Affairs office.",
      "Systematically validated and compiled important document records to minimize duplicate data.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "UIN Prof. K.H. Saifuddin Zuhri Purwokerto",
    degree: "Bachelor's Degree in Informatics (in progress)",
    period: "August 2023 – Present",
    grade: "GPA: 3.82 / 4.00",
    achievements: [
      "Gold Medal — University Student Arts and Sports Week (PESOMA), Social and Religious Digitalization category.",
      "Gold Medal — University Student Arts and Sports Week (PESOMA), Learning Media Digitalization category.",
      "Bronze Medal — National Mandalika Essay Competition (MEC), Education Digitalization category.",
      "Bank Indonesia Scholarship (GenBI) recipient, 2025.",
      "Finalist — National Information Technology Hackathon.",
      "Finalist — National Sustainable Innovations Essay Competition (SINEC), Tourism Digitalization category.",
    ],
  },
  {
    institution: "SMK Karya Bhakti Brebes",
    degree: "Vocational High School — Software Engineering",
    period: "2020 – 2023",
    grade: "Grade: 96 / 100",
    achievements: [
      "Silver Medal — Brebes Regency Website Technology Competition (2023).",
      "Developed the Laundry Brebes website and a laptop e-commerce platform.",
    ],
  },
];

export const ORGANIZATIONS: Organization[] = [
  {
    name: "Generasi Baru Indonesia (GenBI) Purwokerto",
    role: "Media Department Member",
    period: "October 2025 – Present",
    highlights: [
      "Create and manage 4+ designs for podcasts, live event coverage, and social media content.",
      "Write clear, accessible event press releases to share information with a wider public audience.",
    ],
  },
  {
    name: "Informatics Student Association (HMPS)",
    role: "Human Resource Development Department Member",
    period: "January 2024 – December 2024",
    highlights: [
      "Initiated and managed 5+ programs to develop student skills.",
      "Chaired a technology seminar with 100+ participants and professional speakers.",
      "Raised more than IDR 2.5 million in one week for social initiatives.",
      "Launched the Oemah Sinau education program for children at the Budi Al Barokah Orphanage Foundation in Purbalingga.",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Gold Medal",
    competition: "Student Arts and Sports Week (PESOMA) — Social & Religious Digitalization",
    year: "2025",
  },
  {
    title: "Gold Medal",
    competition: "Student Arts and Sports Week (PESOMA) — Learning Media Digitalization",
    year: "2025",
  },
  {
    title: "Bronze Medal",
    competition: "National Mandalika Essay Competition (MEC) — Education Digitalization",
    year: "2025",
  },
  {
    title: "Scholarship Recipient",
    competition: "Bank Indonesia Scholarship (GenBI)",
    year: "2025",
  },
  {
    title: "Finalist",
    competition: "National Information Technology Hackathon",
    year: "2025",
  },
  {
    title: "Finalist",
    competition: "Sustainable Innovations Essay Competition (SINEC) — Tourism Digitalization",
    year: "2025",
  },
  {
    title: "Silver Medal",
    competition: "Brebes Regency Website Technology Competition",
    year: "2023",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Rupiah Banknote Detection with CNN & OCR",
    role: "Full Stack Developer & AI Engineer",
    year: "2025",
    image: "/images/rupiahcheck.png",
    description: "A system for recognizing Rupiah banknote denominations and verifying authenticity, combining Convolutional Neural Networks (CNN) and OCR to support digital accessibility.",
  },
  {
    title: "Room Booking Website for the Faculties of Da'wah and Science & Technology",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/mawapres.png",
    description: "A digital system for managing faculty room schedules and bookings, simplifying academic operations for students and lecturers.",
  },
  {
    title: "RupiahCheck",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/rupiahcheck.png",
    description: "A platform aggregating real-time Rupiah exchange rates against foreign currencies, with historical data visualizations and exchange rate alerts.",
  },
  {
    title: "NgapakTour Website",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/ngapaktour.png",
    description: "A tourism discovery platform for Central Java, featuring interactive destination maps, curated cultural experiences, and a local food directory.",
  },
  {
    title: "DjikstraGame",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/gamedjikstra.png",
    description: "An interactive educational game that visualizes Dijkstra's shortest-path algorithm in real time using the Canvas API, bringing game-based learning to computer science.",
  },
  {
    title: "PantauDidik Website",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/pantaudidik.png",
    description: "A dashboard for tracking student academic performance over time, with evaluation metrics and an early intervention system for educators.",
  },
  {
    title: "IoT Research: PIR vs. Ultrasonic Sensors",
    role: "Researcher & Academic Author",
    year: "2025",
    image: "/images/meteor.png",
    description: "Research article comparing PIR and ultrasonic sensors in an Internet of Things (IoT) anti-theft security system.",
  },
  {
    title: "Faculty of Science & Technology Portal",
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/mawapres.png",
    link: "https://saintekku.uinsaizu.ac.id",
    description: "The official Faculty of Science & Technology portal, serving 800+ students and 20+ lecturers with dynamic content management and academic archives.",
  },
  {
    title: "Sukamulya Village Data Management System",
    role: "Full Stack Developer",
    year: "2026",
    image: "/images/pulid.png",
    link: "https://sukamulya-pangandaran.id",
    description: "An integrated digital system for efficiently, securely, and transparently managing and validating 2,000+ village resident records.",
  },
  {
    title: "Pulid.id — Volunteer Platform",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/pulid.png",
    description: "A social platform connecting volunteers with local humanitarian initiatives, supporting event announcements, registration, and community impact.",
  },
  {
    title: "GaluhExplore Campus App",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/galuhexplore.png",
    description: "A campus navigation app with interactive facility maps, an events calendar, and a service directory for the university community.",
  },
  {
    title: "Vegetable Classification with CNN (Python & MATLAB)",
    role: "Developer",
    year: "2025",
    image: "/images/cnn-sayur.png",
    description: "A Convolutional Neural Network model for classifying vegetables by shape with 90%+ accuracy, implemented using TensorFlow in Python and MATLAB.",
  },
];

export const SKILLS: SkillSet[] = [
  {
    category: "Web Development",
    items: [
      "Web Development",
      "Full Stack Development",
      "Frontend Architecture",
      "REST API Integration",
      "Responsive Design",
    ],
  },
  {
    category: "Programming Languages",
    items: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Laravel",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    category: "Databases, Tools & Integrations",
    items: [
      "MySQL",
      "Git & GitHub",
      "REST API Integration",
      "Figma",
      "CI/CD Workflow",
    ],
  },
  {
    category: "Design",
    items: [
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "User Interface Optimization",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership",
      "Strategic Communication",
      "Problem Solving",
      "Teamwork",
      "Time Management",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Copywriter",
    issuer: "BNSP (Indonesian Professional Certification Authority)",
    year: "2025",
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik Indonesia",
    year: "2025",
  },
  {
    title: "Student Award Certificate",
    issuer: "UIN Prof. K.H. Saifuddin Zuhri Purwokerto",
    year: "2025",
  },
];

// Reviewed English repository descriptions; repository names remain unchanged.
export const GITHUB_DESCRIPTION_TRANSLATIONS: Record<string, string> = {
  "Streak-GitHub": "A GitHub Actions bot that maintains a daily contribution streak with automated commit messages.",
  linktreecustom: "A custom Linktree alternative built for software engineers and UI/UX designers.",
  yukbuatweb: "A web development studio based in Purwokerto, Indonesia, offering UI/UX design and full stack application development.",
  firebasechat: "An Android chat app integrated with Firebase, built using modern Android architecture and Gradle.",
  pengaduanmasyarakat: "An Android app for public complaint services integrated with Firebase, built using modern Android architecture and Gradle.",
};