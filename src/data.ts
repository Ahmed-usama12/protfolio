// Icons are imported in components where used


export const personalInfo = {
    name: "Ahmed Osama Fouad",
    title: "Front-end React.js/Next.js Developer",
    location: "Giza, Egypt",
    email: "ahmed.usama150@gmail.com",
    phone: "+20 1015460378",
    linkedin: "https://www.linkedin.com/in/ahmedosamafouad",
    github: "https://github.com/Ahmed-usama12",
    summary: "Junior Frontend Developer with hands-on experience building fast, accessible, and responsive web applications using React.js and Next.js. Strong in performance optimization, clean code practices, and collaboration within Agile teams.",
};

export const skills = {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    stateManagement: ["Redux Toolkit", "Context API", "TanStack Query"],
    styling: ["Tailwind CSS", "Bootstrap", "Shadcn UI", "Framer Motion"],
    tools: ["Git", "GitHub", "VS Code", "Vercel", "Jira"],
    other: ["RESTful APIs", "Axios", "NextAuth.js", "Zod", "React Hook Form"],
};

export const experience = [
    {
        role: "Frontend Developer (Intern)",
        company: "Elevate Tech",
        period: "2024 -- 2025",
        description: "Worked on real production-level projects using React.js and Next.js within an Agile team environment.",
        achievements: [
            "Developed responsive and accessible UI components using React, Next.js, and Tailwind CSS.",
            "Implemented secure authentication and role-based access using NextAuth.js.",
            "Built type-safe forms using React Hook Form and Zod.",
            "Optimized page load times by 25% through performance improvements.",
        ],
    },
];

export const projects = [
    {
        title: "Flower App",
        category: "E-Commerce",
        description: "Full-Featured E-Commerce Platform built with Next.js 14 and TypeScript.",
        tech: ["Next.js", "TypeScript", "Tailwind", "NextAuth", "React Query"],
        links: {
            code: "https://github.com/elref7i/flower-app",
            demo: null,
        },
    },
    {
        title: "Fitness App",
        category: "Health & Fitness",
        description: "AI-Powered Fitness Web Application with personalized workout plans.",
        tech: ["React", "TypeScript", "AI Chatbot", "Tailwind", "Shadcn UI"],
        links: {
            code: "https://github.com/Ahmed-usama12/fitness-app",
            demo: null,
        },
    },
    {
        title: "Fresh-Cart",
        category: "E-Commerce",
        description: "Client-side e-commerce application with global state management.",
        tech: ["React", "Context API", "Axios", "Formik"],
        links: {
            code: "https://github.com/Ahmed-usama12/freashmark-react",
            demo: "https://ahmed-usama12.github.io/freashmark-react/",
        },
    },
    {
        title: "Online Exam",
        category: "Education",
        description: "Authenticated Examination System with secure routes and role management.",
        tech: ["Next.js", "TypeScript", "Zod", "React Hook Form"],
        links: {
            code: "https://github.com/Ahmed-usama12/exam-app",
            demo: null,
        },
    },
];

export const education = [
    {
        degree: "B.Sc. in Computer Science",
        institution: "Helwan University",
        year: "2025",
        grade: "GPA: 2.83 (Very Good)",
    },
];
