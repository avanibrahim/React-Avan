export type Project = {
  id: number;
  slug: string;             // untuk route
  title: string;
  summary?: string;
  image: string;
  category: "web" | "app" | string;
  technologies?: string[];
  demoLink?: string; // link demo
  clientName?: string; // nama klien, jika ada
  githubLink?: string; // link ke repo GitHub, jika ada
  instagramLink?: string; // link ke Instagram, jika ada
  description?: string; // deskripsi panjang, jika ada
  description2?: string; // deskripsi kedua, jika ada
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "roomsinvasion",
    title: "E-Commerce",
    summary: "Platform E-commerce with React and Design User Friendly.",
    image: "/image/p1.webp",
    category: "Webs",
    technologies: ["React", "Tailwind", "TypeScript"],
    demoLink: "https://roomsinvasion.com",
    clientName: "Rooms Invasion",
    githubLink: "/notfound",
    instagramLink: "https://www.instagram.com/rooms_invasion/",
    description: "A modern e-commerce platform built with React, featuring a user-friendly design and responsive layout. The site is optimized for performance and provides a seamless shopping experience.",
    description2: "Utilizing Tailwind CSS for styling, the platform ensures a consistent and visually appealing interface. The project showcases advanced React features and TypeScript for type safety, enhancing maintainability and scalability.",
  },
  {
    id: 2,
    slug: "sipenguisia",
    title: "Complaint Application",
    summary: "Information System for Complaints with React Native and Figma Design.",
    image: "/image/p2.webp",
    category: "App",
    technologies: ["React Native", "Figma", "Firebase"],
    demoLink: "/notfound",
    clientName: "Reynaldi Samalam",
    githubLink: "/notfound",
    instagramLink: "https://www.instagram.com/reynaldi.samalam/",
    description: "A mobile application for managing complaints, developed using React Native. The app features a clean and intuitive design created in Figma, ensuring a smooth user experience across devices.",
    description2: "The application integrates with Firebase for real-time data synchronization and user authentication, providing a robust backend solution. It allows users to submit, track, and manage complaints efficiently.",
  },
  {
    id: 3,
    slug: "dinkesgtlo",
    title: "Web Based Diagnosis",
    summary: "Dashboard interaktif dengan chart dan visualisasi data real-time.",
    image: "/image/p3.webp",
    category: "Web",
    technologies: ["React", "Augmented Reality", "Python"],
    demoLink: "https://dinkes-main.vercel.app",
    clientName: "Dinas Kesehatan Kota Gorontalo",
    githubLink: "/notfound",
    instagramLink: "https://www.instagram.com/dinkes_kota_gorontalo?igsh=MTI1cnJ1aGpmM3h5OA==",
    description: "A web-based diagnostic tool that provides an interactive dashboard for health data analysis. The platform utilizes React for a dynamic user interface and Python for backend processing.",
    description2: "Features include real-time data visualization, augmented reality integration for enhanced user interaction, and comprehensive reporting capabilities. The system is designed to assist healthcare professionals in making informed decisions based on accurate data.",
  },
];
