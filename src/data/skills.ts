export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "Redux"] },
  { title: "Backend", items: ["FastAPI", "Flask", "Node.js", "Express.js", "gRPC"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Redis"] },
  {
    title: "DevOps & Data",
    items: ["GCP", "AWS", "Docker", "CI/CD", "Kafka", "ETL Pipelines", "Vercel", "Heroku", "Git"],
  },
  {
    title: "AI & Testing",
    items: ["Google ADK", "Vertex AI", "Gemini", "MCP", "pgvector", "Jest", "Cypress"],
  },
];
