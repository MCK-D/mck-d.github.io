export const profile = {
  name: "Micka Daoud",
  email: "micka.daoud@epitech.eu",
  github: "https://github.com/mck-d",
  linkedin: "https://linkedin.com/in/mickadaoud",
  behance: "https://behance.net/mckd",
}

export const projects = [
  {
    name: "Jobigo",
    description: "An AI assistant for job seekers.",
    year: "Ongoing",
    category: "Web & AI",
    tags: ["Next.js", "AI", "Tailwind CSS"],
    color: "blue",
  },
  {
    name: "HypurrOTC",
    description: "An over-the-counter NFT trading platform.",
    year: "2025",
    category: "Web3",
    tags: ["React", "Smart contracts", "Web3"],
    color: "lavender",
  },
  {
    name: "Git GUI",
    description: "A graphical interface for everyday Git workflows.",
    year: "2024",
    category: "Developer tools",
    tags: ["Flutter", "Git"],
    color: "yellow",
  },
  {
    name: "TrelloClone",
    description: "Project planning and organisation software.",
    year: "2024",
    category: "Web & mobile",
    tags: ["AdonisJS", "MySQL", "Flutter"],
    color: "green",
  },
]

export const archive = [
  {
    name: "ActionReaction",
    description: "Task automation software",
    tags: "AdonisJS, MySQL, Flutter",
    year: "2023",
  },
  {
    name: "Tech for Tourism",
    description: "AMADEUS hackathon",
    tags: "Project management, Figma, mockups",
    year: "2023",
  },
  {
    name: "Let’s Watch",
    description: "For undecided movie enjoyers",
    tags: "Tailwind CSS, HTMX",
    year: "2023",
  },
  {
    name: "Epiheader.vim",
    description: "Code editor extension",
    tags: "Lua, VimScript",
    year: "2023",
  },
]

export const experience = [
  {
    company: "Trusty",
    role: "Fullstack developer intern",
    place: "Paris, France",
    year: "2025",
    duration: "6 months",
    description:
      "Four web products. International clients including Qonto and Ledger. A complete Next.js rebuild of the Trusty web application, NestJS API development, and interfaces shaped by client feedback.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB"],
  },
  {
    company: "Skyhook",
    role: "Mobile developer intern",
    place: "Antony, France",
    year: "2023",
    duration: "6 months",
    description:
      "Four mobile apps for Manoova. Improved Moozik through advanced caching and state management, contributing to its growth to 100k+ downloads in six months. Built authentication and helped shape application architecture.",
    tags: ["Flutter", "JavaScript", "UX/UI", "Webviews", "Optimization"],
  },
]

export const skills = {
  Languages: [
    "TypeScript",
    "Dart",
    "C",
    "C++",
    "Haskell",
    "Python",
    "Rust",
    "Gleam",
  ],
  Frameworks: [
    "Next.js",
    "Tailwind CSS",
    "AdonisJS",
    "NestJS",
    "Flutter",
    "React Native",
    "FastAPI",
  ],
  Libraries: ["React", "shadcn/ui", "TanStack Query", "Prisma", "Auth.js"],
  Databases: ["MySQL", "MongoDB"],
  Tools: [
    "Figma",
    "Git",
    "Bash",
    "Vim",
    "Android Studio",
    "Docker",
    "Postman",
    "Heroku",
    "Vercel",
    "Postmark",
  ],
}

export const timeline = [
  {
    id: "skyhook",
    title: "Skyhook",
    date: "2023",
    kind: "Work",
    role: "Mobile developer intern",
    place: "Antony, France",
    note: "6 months",
    summary: "Mobile apps built for real audiences.",
    details: experience[1].description,
    tags: experience[1].tags,
  },
  {
    id: "trusty",
    title: "Trusty",
    date: "2025",
    kind: "Work",
    role: "Fullstack developer intern",
    place: "Paris, France",
    note: "6 months",
    summary: "From client feedback to a complete rebuild.",
    details: experience[0].description,
    tags: experience[0].tags,
  },
  {
    id: "csusm",
    title: "CSU San Marcos",
    date: "2025–26",
    kind: "Education",
    role: "Computer Science",
    place: "San Marcos, California",
    note: "August 2025 – May 2026",
    summary: "A new place. A different perspective.",
    details:
      "Studied Computer Science at California State University San Marcos, with courses in data science, programming languages, web programming, cloud computing, and data structures & algorithms.",
    tags: ["Data science", "Cloud computing", "Algorithms"],
  },
  {
    id: "epitech",
    title: "EPITECH",
    date: "2027",
    kind: "Education",
    role: "Software Engineering & IT",
    place: "Nice, France",
    note: "Expected graduation · GPA 3.26 / 4.00",
    summary: "Engineering foundations, explored through practice.",
    details:
      "Software Engineering and Information Technology studies covering web development, networks, algorithms, DevOps, artificial intelligence, video games, and design patterns.",
    tags: ["Software engineering", "DevOps", "AI", "Design patterns"],
  },
]
