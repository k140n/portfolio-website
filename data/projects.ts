export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  details: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    architecture: string;
    challenges: string;
    learnings: string;
  };
}

export const projects: Project[] = [
  {
    id: "vinayaka",
    title: "Vinayaka",
    description: "An enterprise AI chatbot and LLM pipeline integrating multiple models with custom validation logic.",
    techStack: ["Python", "HuggingFace", "Ollama", "PostgreSQL", "SQL"],
    image: "/projects/vinayaka.jpg",
    githubUrl: "https://github.com/k140n",
    liveUrl: "",
    details: {
      problem: "Enterprise AI applications require reliable, safe, and high-quality responses that single, raw LLMs often fail to guarantee consistently.",
      solution: "Designed and developed an AI-powered enterprise chatbot using Python, integrating multiple LLM backends including HuggingFace Transformers and Ollama.",
      keyFeatures: [
        "Multi-LLM integration (HuggingFace Transformers, Ollama)",
        "Advanced prompt engineering & model selection",
        "Python-based validation and filtering logic for safe responses",
        "PostgreSQL integration for structured data, context, and logging"
      ],
      architecture: "Python-based LLM pipeline connecting multiple models, using PostgreSQL for context management and logging, with a custom intermediate layer for response validation.",
      challenges: "Analyzing failure cases and edge-case inputs to iteratively improve response quality, and comparing outputs across multiple LLM configurations for consistency.",
      learnings: "Mastered prompt engineering, response evaluation, and building robust LLM pipelines with structured relational databases.",
    }
  },
  {
    id: "ai-travel-planner",
    title: "AI Travel Itinerary Planner",
    description: "An AI-driven travel planning application that generates personalized travel itineraries.",
    techStack: ["React", "Node.js", "Express", "AI APIs"],
    image: "/projects/travel.jpg",
    githubUrl: "[Add GitHub URL]",
    liveUrl: "[Add Live URL]",
    details: {
      problem: "Planning travel itineraries is time-consuming and often overwhelming.",
      solution: "An AI-powered tool that automatically generates optimized itineraries based on user preferences.",
      keyFeatures: ["Personalized AI recommendations", "Interactive maps", "Real-time adjustments"],
      architecture: "React frontend with an Express/Node.js backend interfacing with external AI models.",
      challenges: "Handling rate limits and ensuring AI responses are structurally consistent.",
      learnings: "Improved understanding of prompt engineering and REST API integration.",
    }
  },
  {
    id: "monopoly-helper",
    title: "Monopoly Helper",
    description: "A utility application built to assist with Monopoly gameplay and rules tracking.",
    techStack: ["React", "Tailwind CSS"],
    image: "/projects/monopoly.jpg",
    githubUrl: "[Add GitHub URL]",
    liveUrl: "[Add Live URL]",
    details: {
      problem: "Tracking money, properties, and complex game states manually in Monopoly can lead to disputes.",
      solution: "A streamlined digital helper tool to manage the game state effortlessly.",
      keyFeatures: ["Banker mode", "Property tracking", "Transaction history"],
      architecture: "Client-side React application with local storage for state persistence.",
      challenges: "Designing an intuitive UI that doesn't distract from the physical game.",
      learnings: "Mastered React state management and component lifecycle optimization.",
    }
  }
];
