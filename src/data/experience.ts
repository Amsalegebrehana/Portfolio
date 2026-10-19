export type Role = {
  title: string;
  company: string;
  type?: string;
  period: string;
  stack: string[];
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "Go Agentic Solutions",
    period: "Jun 2025 – Jul 2026",
    stack: ["FastAPI", "React", "Redux Toolkit", "Elasticsearch", "Docker", "ETL"],
    points: [
      "Designed and built REST APIs with FastAPI that aggregate analytics data from Google, Yahoo, and Facebook Marketing API into a single reporting layer for cross-platform performance.",
      "Developed an automated Smart Day Parting engine that feeds live performance into projected curves to optimise cross-timezone campaign scheduling and improved campaign variants, contributing to a 60% increase in revenue.",
      "Owned ETL pipeline debugging and remediation across pipelines processing ~500k campaign records, restoring reliable data flow to downstream reporting.",
      "Set up centralized Elasticsearch within a Docker-based microservices architecture, speeding up debugging and giving the team one view of what’s broken and when.",
      "Led frontend development using React.js and Redux Toolkit for data-heavy dashboards, implementing real-time streaming displays and batch upload workflows to give users role-based visibility into live performance.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Upwork",
    type: "Freelancer",
    period: "Jan 2024 – Jun 2025",
    stack: ["Flask", "Next.js", "Nuxt.js 3", "TypeScript", "PostgreSQL", "Stripe", "Jest", "Cypress"],
    points: [
      "Designed and developed an end-to-end admin portal for a multi-sided marketplace using Flask, Next.js, and PostgreSQL, implementing relational data models with complex many-to-many relationships.",
      "Built 10+ production modules for a document-automation SaaS platform using Nuxt.js 3 and TypeScript, including the template builder, document libraries, settings, and user management workflows.",
      "Integrated and debugged a multi-agent Soft Actor-Critic traffic signal trainer running parallel SUMO simulations, implementing data collection for 2,000+ metrics and per-episode rewards to support traffic management research.",
      "Added Jest and Cypress test suites to a legacy React ebook reader, increasing codebase test coverage to 80% and preventing UI regression issues during feature deployments.",
      "Automated manual refund processes by integrating Stripe payment disbursement pipelines, multi-step approval workflows, and moderation systems, cutting processing time from 3 days to under 2 hours.",
    ],
  },
  {
    title: "Software Developer",
    company: "Kemer Habesha",
    period: "Jul 2022 – Jan 2024",
    stack: ["Node.js", "Express.js", "Redis", "JWT", "Swagger"],
    points: [
      "Built a car and property listing marketplace platform implementing aggregation pipelines, geospatial filtering, and bilingual localization using Node.js and Express.js.",
      "Secured platform access by building JWT auth, OTP verification, and RBAC across 4 user roles, while documenting REST APIs with Swagger to simplify web and mobile integrations.",
      "Developed responsive admin panels and an e-commerce platform with Redis caching, reducing page load times by 40% and optimizing application performance across web and mobile browsers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "AlephTav Consultancy and Trading PLC",
    period: "Mar 2022 – Jun 2022",
    stack: ["React", "Node.js", "Material UI", "Laravel API"],
    points: [
      "Built the Sales module for a production ERP system using React.js, Node.js, and Material UI, integrating with a Laravel REST API to deliver real-time stock-out alerts, location filtering, and interactive BI reporting.",
      "Developed state-driven UI modules, including customer management, inventory controls, and a multi-step sales void-request approval workflow.",
    ],
  },
];
