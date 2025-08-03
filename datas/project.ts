import { IProject } from "@/types/project.type";

export const projects: IProject[] = [
  {
    id: "d58d2d0cbec7022cfd4e06e17643b5f2",
    slug: "aqualink",
    title: "Aqualink",
    imgUrl: "/assets/projects/aqualink1.png",
    description:
      "As the developer of this application, I built a water credit trading platform powered by smart contracts, integrated with conservation incentive systems to encourage active participation in environmental sustainability programs. The platform allows users to trade water credits, which are digital representations of water usage rights, managed transparently and automatically through blockchain technology. To ensure accurate and transparent water usage monitoring, I integrated an Internet of Things (IoT) system capable of detecting water discharge in real time and controlling automatic taps. This not only helps minimize water waste but also provides historical water usage data, visualized through easy-to-understand graphs. Users can track their consumption patterns and evaluate their conservation efforts over time. To ensure secure and seamless transactions, I implemented Midtrans payment gateway integration, supporting various payment methods with high-level encryption and security standards. This enables users to easily purchase water credits or contribute to conservation programs through trusted and encrypted transactions. The entire system was designed with a focus on transparency, efficiency, and positive environmental impact, aiming to be a real-world solution for sustainable and equitable water resource management.",
    repositories: [
      {
        title: "Front-end Repository",
        url: "https://github.com/rafliafriza12/aqualink-frontpage",
      },
      {
        title: "Back-end Repository",
        url: "https://github.com/rafliafriza12/aqualink-backend",
      },
      {
        title: "Smart Contract Repository",
        url: "https://github.com/rafliafriza12/aqualink-blockchain",
      },
    ],
    liveDemoUrl: "https://www.aqualink.site",
    keyFeatures: [
      "Developing a smart contract water credit trading platform with conservation incentive systems, enabling users to trade water credits and participate in environmental sustainability programs.",
      "IoT (Internet of Things) tool for detecting water discharge and automatic taps.",
      "Historical visualization of water usage data and implementing Midtrans payment gateway integration for secure transaction",
    ],
    technologies: [
      "Next",
      "Typescript",
      "Tanstack Query",
      "Material UI",
      "Express",
      "Solidity",
      "MongoDB",
      "Ether.js",
      "HardHat",
      "Internet of Things",
      "C++",
    ],
  },
  {
    id: "cf41d0c10589a73ea7d604662907ff1f",
    slug: "lexbotid",
    title: "LexBotID",
    imgUrl: "/assets/projects/lexbotid.png",
    description:
      "This project is an Indonesian legal chatbot built using Next.js, Express, TypeScript, Tailwind CSS, and a Retrieval-Augmented Generation (RAG) architecture powered by a Large Language Model (LLM). The system is designed to assist users in navigating Indonesian law by providing contextually relevant, AI-generated answers based on a curated legal knowledge base. On the frontend, the chatbot offers a clean, responsive user interface built with Next.js and styled using Tailwind CSS, ensuring an accessible experience across devices. The backend, developed with Express and TypeScript, handles request processing, RAG-based context retrieval, and communication with the language model. Legal documents are indexed and retrieved dynamically, enabling the chatbot to provide accurate and up-to-date information tailored to user queries. By combining natural language understanding with domain-specific data, the chatbot serves as an intelligent legal assistant that empowers users to access legal information in a more efficient, conversational way—especially in a country where legal literacy is often limited. This solution is ideal for helping citizens understand regulations, legal rights, and procedures without needing direct consultation with a legal expert. The project highlights the potential of AI and modern web technologies in bridging the gap between complex legal systems and everyday people.",
    repositories: [
      {
        title: "Code Repository",
        url: "https://github.com/rafliafriza12/lexbotid-frontpage",
      },
    ],
    liveDemoUrl: "https://lexbotid.gutechdeveloper.site",
    keyFeatures: [
      "Enables users to ask legal questions in natural Indonesian and receive AI-generated responses grounded in actual regulations.",
      "Utilizes Retrieval-Augmented Generation to combine document retrieval with LLM generation, ensuring answers are contextually relevant and reliable.",
      "Integrates a structured database of Indonesian laws and legal documents, enabling domain-specific, regulation-based responses.",
    ],
    technologies: [
      "Next",
      "Typescript",
      "Express",
      "MongoDB",
      "Retrieval Augmented Generation",
      "Deepseek LLM",
      "Python",
      "IndoT5",
    ],
  },
  {
    id: "e15e4b45185cbc39dd615167f8ebecee",
    slug: "gutech",
    title: "Gutech",
    imgUrl: "/assets/projects/gutech.png",
    description:
      "developed a dynamic and interactive landing page for a software house, designed to effectively communicate the company's identity, showcase its technical capabilities, and highlight its previous projects. Built using React.js and styled with Tailwind CSS, the site leverages Three.js and GSAP to bring immersive 3D elements and smooth animations that elevate the overall user experience. The landing page includes dedicated sections for introducing the software house’s vision and values, displaying the technology stack used by the team, showcasing a curated selection of project portfolios, and providing a clear way for visitors to get in touch. Every section is crafted to be clean, responsive, and visually compelling across devices. With a strong focus on both aesthetics and functionality, the project reflects the innovative spirit of the company and serves as a powerful digital presence to engage potential clients and partners.",
    repositories: [
      {
        title: "Code Repository",
        url: "https://github.com/rafliafriza12/gutech-landing-page",
      },
    ],
    liveDemoUrl: "https://gutechdeveloper.site/",
    keyFeatures: [
      "Integrates Three.js and GSAP for smooth animations and 3D effects, creating a modern and engaging interface that stands out.",
      "Highlights the software house’s core technologies with a clean, responsive layout, helping visitors quickly understand the team's capabilities.",
      "Built with React.js and Tailwind CSS to ensure fast performance, accessibility, and seamless interaction across all devices.",
    ],
    technologies: ["React.js", "Javascript", "Tailwind", "Three.js", "GSAP"],
  },
];

export const projectsMap = new Map<string, IProject>(
  projects.map((project) => [project.slug, project])
);

// Utility function untuk mendapatkan project berdasarkan slug
export const getProjectBySlug = (slug: string): IProject | undefined => {
  return projectsMap.get(slug);
};
