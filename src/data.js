export const profile = {
  name: "Tafadzwa",
  fullName: "Tafadzwa Isaac Chaipa",
  role: "IT Support",
  roleRotation: ["IT Support", "Systems Developer", "Full-Stack Developer"],
  tagline:
    "With a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I've been building web applications for over 5+ years, I still love it as if it were something new.",
  location: "Harare, Zimbabwe",
  availability: "Open to new roles",
  email: "tchaipa97@gmail.com",
  phone: "+263 772 579 293",
  resumeUrl: "/TChaipa_Software-Dev_CV.pdf", // TODO: drop your CV into /public/resume.pdf
  photo: "/hero.png",
  socials: [
    { label: "GitHub", href: "https://github.com/tchaipa" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tchaipa" },
    { label: "Facebook", href: "https://facebook.com/TODO" },
    { label: "Instagram", href: "https://instagram.com/TODO" },
  ],
};

export const nav = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    period: "May 2024 — Present",
    role: "Freelance Developer",
    org: "Upwork",
    tags: [
      "Software Design & Development",
      "Technical Writing",
      "Mobile & Web App Development",
      "UI/UX Design",
      "API config",
    ],
  },
  {
    period: "May 2023 — April 2024",
    role: "Web Developer",
    org: "VosterTech Consultancy",
    tags: [
      "Web Design & Development",
      "User Experience",
      "Front-End & Back-End Design ",
      "SEO Optimization",
    ],
  },
  {
    period: "Dec 2021 — March 2023",
    role: "Software Developer",
    org: "Chito Systems",
    tags: [
      "Mobile & Web App Development",
      "Systems Design & Development",
      "Front-End & Back-End Development",
    ],
  },
  {
    period: "Aug 2019 — Dec 2020",
    role: "IT Support (Internship)",
    org: "Seke Teachers' College",
    tags: [
      "Networking",
      "Database Management",
      "Programming",
      "Technical Support",
    ],
  },
];

export const projects = [
  {
    name: "InfoByt Solutions",
    info: [
      "IT Solutions company which deals in offering tech & digital solutions to businesses and organizations.",
    ],
    href: "https://www.infobytsolutions.xyz",
    image: "/projects/infobyt.png",
  },

  {
    name: "VosterTech Consultancy",
    info: [
      "Business consulting firm which offers business legal compliance services.",
    ],
    href: "https://www.vostertech.co.zw",
    image: "/projects/vostertech.png",
  },
  {
    name: "VoxVoyager",
    info: [
      "A travelling tour company which offers custom and planned trips around Zimbabwe and a selected Southern African countries",
    ],
    href: "https://www.voxvoyager.co.zw",
    image: "/projects/vox.png",
  },
  {
    name: "My Portfolio",
    info: ["Portfolio website"],
    href: "https://tchaipa.vercel.app/",
    image: "/projects/portfolio.png",
  },
];

// Colors here echo the varied accent treatment used on the live site for
// this one section only — everywhere else stays on the single teal accent.
export const skillGroups = [
  {
    label: "Frontend Development",
    color: "#3ecf8e",
    items: [
      "HTML5",
      "CSS3 / Sass",
      "React",
      "JavaScript",
      "TypeScript",
      "Flutter",
      "Vite",
      "Webpack",
    ],
  },
  {
    label: "Backend Development",
    color: "#e0ab53",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "PHP",
      "Python",
      "MySQL",
      "RESTful APIs",
      "MongoDB",
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#e08a53",
    items: [
      "Git / GitHub",
      "VS Code",
      "Figma",
      "Canva",
      "Wordpress",
      "Elementor",
      "Oracle Cloud Infrastructure",
      "Docker",
      "Shopify",
    ],
  },
  {
    label: "Soft Skills",
    color: "#d17bd6",
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Adaptability",
      "Communication",
      "Team Collaboration",
      "Creativity",
      "Time Management",
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Node.js, and modern tooling. Clean code, responsive design, and production-ready performance.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "User-centred interface design that balances aesthetics with usability. From wireframes to polished, pixel-perfect implementations.",
  },
  {
    number: "03",
    title: "E-Commerce Solutions",
    description:
      "Custom Shopify stores, Wordpress/WooCommerce builds, and bespoke ordering systems with payment integration.",
  },
  {
    number: "04",
    title: "ERP & Systems",
    description:
      "Custom business management systems, process automation, and data migration — built to scale and reduce operational overhead.",
  },
  {
    number: "05",
    title: "SEO & Performance",
    description:
      "Optimise your existing site for search engines and performance. Fast load times, clean HTML, and technical SEO that drives results.",
  },
  {
    number: "06",
    title: "IT Support",
    description:
      "Infrastructure setup, server administration, LAN/WAN configuration, and end-user technical support for businesses of all sizes.",
  },
];
