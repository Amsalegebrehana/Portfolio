export type Testimonial = {
  quote: string;
  project: string;
  source: "Upwork" | "LinkedIn";
  rating?: number;
  period: string;
  endorsements?: string[];
  /** Shown on the site when true; the rest are kept here for reference. */
  featured: boolean;
};

// Quotes are verbatim from Upwork client feedback (see /upwork_testimonies). Client names are not shown on Upwork.
// TODO: add LinkedIn recommendations (source: "LinkedIn") — I couldn't read them without signing in.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Amsale was the best developer we’ve worked with. She brought deep expertise in both frontend and backend development, especially with Next.js and FastAPI. Her ability to understand complex requirements and turn them into clean, scalable code was impressive. She communicated clearly, met every deadline, and proactively suggested improvements that made a real impact. We’d gladly work with her again on future projects.",
    project: "Full stack developer Nextjs, Python and Fast API",
    source: "Upwork",
    rating: 5.0,
    period: "Feb – Jun 2025",
    endorsements: ["Clear Communicator", "Reliable", "Committed to Quality", "Solution Oriented", "Collaborative"],
    featured: true,
  },
  {
    quote:
      "I had the pleasure of working with her on creating a TypeScript, Next.js app, and I am extremely satisfied with the results. She delivered the project with great attention to detail, ensuring the UI matched exactly with the Figma design we provided. The work was not only accurate but also executed efficiently. Excellent job, and I would definitely recommend her for future projects!",
    project: "Frontend Developer for Signup and Signin Pages with Next.js and Tailwind CSS",
    source: "Upwork",
    rating: 5.0,
    period: "Dec 2024 – Jan 2025",
    endorsements: ["Collaborative", "Detail Oriented"],
    featured: true,
  },
  {
    quote:
      "Amsale was responsive, professional, and kind throughout the project. She showed strong initiative, communicated clearly, and was thoughtful in her approach. Although we faced some technical compatibility issues, she handled everything gracefully. I’d be glad to work with her again on future projects.",
    project: "Implement UI interactions and integrate backend for RL-based signal control",
    source: "Upwork",
    rating: 4.7,
    period: "Apr 2025",
    endorsements: ["Clear Communicator", "Professional"],
    featured: true,
  },
  {
    quote:
      "Was a wonderful experience working with Amsale. She was professional, communicative, timely and delivered a high quality working product.",
    project: "Web app improvements",
    source: "Upwork",
    rating: 5.0,
    period: "Apr – May 2025",
    endorsements: ["Collaborative", "Clear Communicator", "Reliable", "Committed to Quality"],
    featured: true,
  },
  {
    quote:
      "Amsale was very professional and delivered what was expected even before the deadline. Loved the inputs provided as well. 10/10 would hire again when the opportunity arises.",
    project: "Prettify React Application",
    source: "Upwork",
    rating: 5.0,
    period: "Jan – Feb 2024",
    endorsements: ["Professional", "Reliable"],
    featured: true,
  },
  {
    quote:
      "Amsale is a fantastic developer! she has strong knowledge of Reactjs and Tailwind css. She also has good communication skill. She did a super job on the project and it was a pleasure working with her. I highly recommend her.",
    project: "React.js, tailwind css expert needed",
    source: "Upwork",
    rating: 5.0,
    period: "Dec 2023 – Jan 2024",
    endorsements: ["Clear Communicator", "Committed to Quality", "Collaborative"],
    featured: true,
  },
  {
    quote: "It was a pleasure to work with Amsale! Very respectful and dedicated.",
    project: "Full Stack Developer",
    source: "Upwork",
    rating: 5.0,
    period: "Jun 2025 – Jun 2026",
    endorsements: ["Committed to Quality", "Accountable for Outcomes", "Detail Oriented"],
    featured: false,
  },
  {
    quote: "I have worked on several project with Amsale. All are completed on time and with quality.",
    project: "WebApp app enhancements for PDF view/edit",
    source: "Upwork",
    rating: 5.0,
    period: "Sep 2025",
    endorsements: ["Reliable", "Committed to Quality"],
    featured: false,
  },
  {
    quote: "Good communication and responsiveness. Great quality of work.",
    project: "Frontend Developer with Vue.js & Nuxt.js Expertise",
    source: "Upwork",
    rating: 5.0,
    period: "Oct 2024",
    endorsements: ["Clear Communicator", "Committed to Quality"],
    featured: false,
  },
  {
    quote: "Great to work with. Professions, quality, an on time work.",
    project: "GC User/Org/Tenant Mgmt UI",
    source: "Upwork",
    rating: 5.0,
    period: "Dec 2024 – Feb 2025",
    endorsements: ["Collaborative", "Committed to Quality", "Reliable"],
    featured: false,
  },
  {
    quote: "Excellent work highly recommend Amsale",
    project: "Write python script to generate a pdf report",
    source: "Upwork",
    rating: 5.0,
    period: "Jan – Apr 2024",
    endorsements: ["Committed to Quality"],
    featured: false,
  },
  // TODO: "Front-end development for SaaS solution" (Feb–Jul 2024, 5.0, 477 hrs) — a tooltip covers half
  // of the quote in the screenshot. Paste the full text here; it mentions supervising a team of four developers.
];
