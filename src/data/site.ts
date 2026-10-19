export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export const site = {
  name: "Amsale Gebrehana",
  fullName: "Amsale Gebrehana Weldehawaryat",
  role: "Software Engineer",
  location: "London, UK",
  email: "amsalegebrehana@gmail.com",
  // TODO: set NEXT_PUBLIC_SITE_URL in Vercel to the production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO: drop your CV into /public and set the path here (e.g. "/Amsale_Gebrehana_CV.pdf") to show a "Download CV" button.
  resumeUrl: undefined as string | undefined,
  // TODO: add a headshot to /public and set the path here (e.g. "/amsale.jpg") to show it in the hero.
  photo: undefined as string | undefined,

  headline: "I build backend services, data pipelines and full-stack products that hold up in production.",
  summary:
    "Software Engineer with 3 years of experience building backend services, APIs, data pipelines, and full-stack applications using Python, FastAPI, React, TypeScript, Node.js, Express.js, PostgreSQL, and Docker. Experienced in data-intensive systems, automation, and testing with a focus on building reliable and scalable software.",

  description:
    "Amsale Gebrehana is a London-based Software Engineer building backend services, APIs, data pipelines and full-stack applications with Python, FastAPI, React, TypeScript, Node.js and PostgreSQL.",
  keywords: [
    "Amsale Gebrehana",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "London",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/Amsalegebrehana" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amsale-gebrehana-weldehawaryat/" },
    { label: "Email", href: "mailto:amsalegebrehana@gmail.com" },
  ] satisfies SocialLink[],

  // Headline numbers, each taken from a bullet on the CV.
  highlights: [
    { value: "3 yrs", label: "building production software" },
    { value: "60%", label: "revenue lift from a Smart Day Parting engine" },
    { value: "~500k", label: "campaign records flowing through pipelines I own" },
  ],

  education: {
    degree: "BSc Software Engineering",
    school: "Addis Ababa University, Ethiopia",
    period: "Sep 2018 – Jul 2023",
  },

  contactBlurb:
    "Open to software engineering roles and freelance projects. The quickest way to reach me is email.",
};

// Section headings (the small label comes from navItems).
export const sectionCopy = {
  about: "Reliable systems, from the database to the dashboard.",
  skills: "The tools I reach for.",
  projects: "Things I’ve built on my own time.",
  experience: "Where I’ve shipped.",
  testimonials: "What clients say.",
  contact: "Let’s work together.",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;
