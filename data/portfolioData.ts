import {
  Experience,
  Education,
  Organization,
  Project,
  Achievement,
  SkillSet,
} from "../types";

export const PERSONAL_INFO = {
  name: "NIAMILAH NABIL SYAHPUTRA",
  professions: [
    "Mahasiswa Informatika",
    "UI/UX Designer",
    "Web & App Developer",
  ],
  bio: "Mahasiswa Informatika semester 5 dengan pengalaman organisasi di Departemen Pengembangan Sumber Daya Mahasiswa (PSDM). Memiliki keterampilan dalam pemrograman dan desain UI/UX. Terbiasa bekerja dalam tim, tekun, dan mampu menghadapi tantangan dengan pendekatan solusi yang inovatif. Berpengalaman dalam pengembangan dan pengelolaan lebih dari 7 website dan aplikasi.",
  phone: "+62 831-0190-1153",
  email: "syahputranabil521@gmail.com",
  linkedin: "linkedin.com/in/niamilah-n-s/",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Kementerian Agama Kabupaten Brebes",
    department: "Bidang Sistem Informasi dan Komputerisasi",
    period: "Januari 2022 – April 2022",
    responsibilities: [
      "Bertanggung jawab dalam pengelolaan data 600+ jamaah haji secara digital",
      "Meningkatkan efisiensi pengolahan data dan kepercayaan jamaah terhadap layanan Kemenag",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "UIN Prof. K.H. Saifuddin Zuhri Purwokerto",
    degree: "Sarjana Informatika",
    period: "2023 – Sekarang",
    grade: "IPK - / 4,00",
    achievements: [
      "Aktif dalam lebih dari 16 proyek pengembangan website dan aplikasi",
      "Volunteer penggalangan dana Yayasan Yatim Piatu Budi Al Barokah Banyumas (2023)",
    ],
  },
  {
    institution: "SMK Karya Bhakti Brebes",
    degree: "Rekayasa Perangkat Lunak",
    period: "2020 – 2023",
    grade: "Nilai 88 / 100",
    achievements: [
      "Peraih Medali Perak Lomba Website Teknologi Kabupaten Brebes (2023)",
      "Pengembang website Laundry Brebes (2022)",
      "Pengembang website e-commerce laptop (2022)",
    ],
  },
];

export const ORGANIZATIONS: Organization[] = [
  {
    name: "Himpunan Mahasiswa Program Studi Informatika (HMPS)",
    role: "Staf Departemen PSDM",
    period: "Maret 2024 – Desember 2024",
    highlights: [
      "Mengorganisasikan 5+ program kerja pengembangan hard skill dan soft skill",
      "Ketua Pelaksana Seminar Teknologi dengan 100+ peserta",
      "Penggalangan dana sosial sebesar Rp2.500.000+",
      "Penyelenggara program edukasi Oemah Sinau",
      "Pengembangan jejaring mahasiswa baru melalui Collaboration Days",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Medali Emas",
    competition: "Lomba Karya Tulis Ilmiah PESOMA",
    year: "2025",
  },
  {
    title: "Medali Perak",
    competition: "Mandalika Essay Competition 7 Lombok",
    year: "2025",
  },
  {
    title: "Medali Perak",
    competition: "Lomba Website Teknologi Kabupaten Brebes",
    year: "2023",
  },
  {
    title: "Finalis",
    competition: "Hackathon Nasional Teknologi Informasi",
    year: "2025",
  },
  {
    title: "Finalis",
    competition: "LKTI Sustainable Innovations Essay Competition (SINEC)",
    year: "2025",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "DijsktraGame.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/gamedjikstra.png",
  },
  {
    title: "PantauDidik.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/pantaudidik.png",
  },
  {
    title: "Pulid.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/pulid.png",
  },
  {
    title: "RupiahCheck.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/rupiahcheck.png",
  },
  {
    title: "NgapakTour.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/ngapaktour.png",
  },
  {
    title: "GaluhExplore.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/galuhexplore.png",
  },
  {
    title: "mawapres.uinsaizu.ac.id",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/mawapres.png",
  },
  {
    title: "Aplikasi Food Ramenku",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/ramenku.png",
  },
  {
    title: "Sistem Deteksi Bentuk Sayuran (CNN) Python",
    role: "Developer",
    year: "2025",
    image: "/images/cnn-sayur.png",
  },
  {
    title: "Sistem Deteksi Bentuk Sayuran (CNN) Matlab",
    role: "Developer",
    year: "2025",
    image: "/images/cnn-sayur-matlab.png",
  },
  {
    title: "Akhlakku.com",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/akhlakku.png",
  },
  {
    title: "Game Tembak Meteor",
    role: "Developer",
    year: "2025",
    image: "/images/meteor.png",
  },
  {
    title: "Website E-Commerce",
    role: "Designer & Developer",
    year: "2025",
    image: "/images/ecommerce.png",
  },
];

export const SKILLS: SkillSet[] = [
  {
    category: "Hard Skills",
    items: [
      "Desain UI Website",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Python",
      "Figma",
      "React.js",
      "Bootstrap Framework",
      "Figma",
      "Microsoft Office",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Kepemimpinan",
      "Komunikasi",
      "Problem Solving",
      "Kerja Sama Tim",
      "Manajemen Waktu",
    ],
  },
];
