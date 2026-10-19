export type Project = {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  tags: string[];
  image?: { src: string; alt: string };
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Social Spark",
    tagline: "Autonomous content AI agent",
    description:
      "An AI agent built on Google ADK that plans and runs multi-step tool calls on Gemini, deployed to Google Cloud Run.",
    points: [
      "Implemented multi-step tool calling on Gemini models, deployed to Google Cloud Run via Vertex AI Agent Runtime.",
      "Added governance and safety controls: Model Armor prompt injection/content filtering and secrets hygiene.",
    ],
    tags: ["Google ADK", "Vertex AI", "Gemini", "Cloud Run", "Docker", "MCP", "Python"],
    // TODO: add a screenshot (public/projects/social-spark.png), plus repoUrl / liveUrl if public.
  },
  {
    title: "Hybrid RAG Service",
    tagline: "Retrieval-augmented QA over a document corpus",
    description:
      "A RAG question-answering service that combines dense vector and keyword search to improve answer precision.",
    points: [
      "Combined dense vector and BM25 keyword search with Reciprocal Rank Fusion.",
      "Added cross-encoder reranking to improve answer precision.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Sentence Transformers"],
    // TODO: add a screenshot (public/projects/hybrid-rag.png), plus repoUrl / liveUrl if public.
  },
];
