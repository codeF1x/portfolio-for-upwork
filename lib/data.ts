import {
  LucideIcon,
  Database,
  Activity,
  Layout,
  Server,
  Paintbrush,
  Cloud,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  // New fields for detail page
  overview?: string;
  challenges?: { title: string; description: string; icon: any }[];
  objectives?: { title: string; description: string }[];
  gallery?: { url: string; caption: string }[];
  techStack?: { name: string; icon: any }[];
  role?: string;
  deliverables?: string[];
  feedback?: { quote: string; author: string };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Finly Analytics",
    year: "2023",
    category: "SaaS",
    description:
      "A comprehensive financial dashboard for tracking real-time crypto assets and stock market trends using D3.js.",
    tags: ["React", "TypeScript", "Node.js"],
    imageUrl: "/images/project-finly.jpg",
    link: "#",
    overview:
      "This project involved a complete overhaul of a legacy financial tracking system. The goal was to transform a clunky, spreadsheet-based process into a modern, real-time web application. The new dashboard allows users to track assets, predict market trends, and generate reports instantly.",
    objectives: [
      {
        title: "Efficiency Boost",
        description:
          "Reduce click-depth for common tasks by 60%, streamlining workflows.",
      },
      {
        title: "Real-time Sync",
        description:
          "Implement WebSocket updates for instant multi-user collaboration.",
      },
      {
        title: "Mobile Accessibility",
        description:
          "Full responsive design enabling access via tablets and phones.",
      },
    ],
    challenges: [
      {
        title: "Legacy Data Integration",
        description:
          "The client's data was stored in an outdated SQL server with unstructured tables. Solution: Built a Node.js middleware adapter to cache and normalize data structure.",
        icon: Database,
      },
      {
        title: "Complex Data Visualization",
        description:
          "Displaying 10,000+ data points on a single chart was causing lag. Solution: Implemented data sampling and WebGL rendering using Recharts.",
        icon: Activity,
      },
    ],
    gallery: [
      {
        url: "/images/project-finly-mobile.jpg",
        caption: "Mobile Responsive View",
      },
      {
        url: "/images/project-finly-dark.jpg",
        caption: "Dark Mode Interface",
      },
    ],
    techStack: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Figma", icon: Paintbrush },
      { name: "AWS", icon: Cloud },
    ],
    role: "Lead Full-Stack Developer",
    deliverables: ["UI/UX Design", "Frontend Code", "REST API"],
    feedback: {
      quote:
        "Flynndelivered beyond expectations. The new dashboard is lightning fast and the code is pristine.",
      author: "Client Name",
    },
  },
  {
    id: 2,
    title: "Sonic Stream",
    year: "2023",
    category: "Mobile Apps",
    description:
      "High-fidelity mobile application for music streaming with social sharing features.",
    tags: ["React Native", "Firebase", "Redux"],
    imageUrl: "/images/project-sonic.jpg",
    link: "#",
    overview:
      "A seamless music streaming experience built for mobile. Focused on low-latency audio playback and social features like shared playlists.",
    role: "Mobile Developer",
    deliverables: ["iOS App", "Android App", "Firebase Backend"],
    techStack: [
      { name: "React Native", icon: Layout },
      { name: "Firebase", icon: Database },
    ],
  },
  {
    id: 3,
    title: "Luxe Wear",
    year: "2022",
    category: "E-commerce",
    description:
      "Custom headless Shopify storefront built for a luxury fashion brand with optimized performance.",
    tags: ["Next.js", "Shopify API", "Tailwind"],
    imageUrl: "/images/project-luxe.jpg",
    link: "#",
    overview:
      "A high-end e-commerce experience. We decoupled the frontend from Shopify to allow for complete design freedom and blazing fast page loads.",
    role: "Frontend Developer",
    deliverables: ["Headless Storefront", "Shopify Integration"],
    techStack: [
      { name: "Next.js", icon: Layout },
      { name: "Shopify", icon: Database },
    ],
  },
  {
    id: 4,
    title: "Orbit SaaS",
    year: "2022",
    category: "SaaS",
    description:
      "Project management tool for remote teams featuring real-time collaboration.",
    tags: ["Vue.js", "GraphQL", "AWS"],
    imageUrl: "/images/project-orbit.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "MediConnect",
    year: "2021",
    category: "Web Development",
    description:
      "Telemedicine platform connecting patients with specialists via secure video calls.",
    tags: ["React", "WebRTC", "Node.js"],
    imageUrl: "/images/project-mediconnect.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "API Gateway",
    year: "2021",
    category: "Web Development",
    description:
      "High-performance backend infrastructure handling millions of requests for a social network.",
    tags: ["Go", "Redis", "Docker"],
    imageUrl: "/images/project-api.jpg",
    link: "#",
  },
];
