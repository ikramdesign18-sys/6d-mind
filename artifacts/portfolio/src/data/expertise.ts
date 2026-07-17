export const EXPERTISE = [
  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    name: "UI/UX & Product Design",
    shortName: "UI/UX Design",
    statement: "Research-driven user experiences, scalable design systems, prototypes, dashboards, websites, mobile apps, SaaS platforms, and developer-ready interfaces.",
    skills: ["UX research", "user flows", "wireframing", "UI design", "prototyping", "design systems", "mobile app design", "web app design", "SaaS design", "dashboard design", "responsive design", "developer handoff"],
    tools: ["Figma", "FigJam", "Adobe Creative Cloud", "Protopie"],
    problemsSolved: [
      "Low user retention due to confusing interfaces",
      "Inconsistent brand application across digital touchpoints",
      "Complex workflows that slow users down",
      "Developer friction during design handoff"
    ],
    deliverables: ["Interactive Prototypes", "High-Fidelity UI", "Comprehensive Design Systems", "User Testing Reports"],
    process: [
      { step: 1, title: "Discovery", desc: "Understanding the problem, users, and business goals." },
      { step: 2, title: "Wireframing", desc: "Mapping out the structure and user flows." },
      { step: 3, title: "Visual Design", desc: "Applying aesthetics, typography, and color systems." },
      { step: 4, title: "Handoff", desc: "Delivering production-ready assets to developers." }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    statement: "Production-ready mobile experiences built for performance, usability, maintainability, and future growth.",
    skills: ["React Native", "Expo", "TypeScript", "mobile architecture", "API integration", "local-first applications", "push notifications", "authentication", "cloud storage", "app deployment"],
    tools: ["React Native", "Expo", "XCode", "Android Studio", "Firebase", "Supabase"],
    problemsSolved: [
      "Sluggish app performance on older devices",
      "Offline data synchronization issues",
      "Complex, multi-step app store deployments",
      "Inconsistent UI between iOS and Android"
    ],
    deliverables: ["iOS App Binary", "Android APK/AAB", "Source Code Repository", "Technical Documentation"],
    process: [
      { step: 1, title: "Architecture", desc: "Setting up a robust, scalable codebase." },
      { step: 2, title: "Implementation", desc: "Building UI and integrating logic." },
      { step: 3, title: "Integration", desc: "Connecting to APIs and backend services." },
      { step: 4, title: "Deployment", desc: "Publishing to App Store and Google Play." }
    ]
  },
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    name: "Website & Web App Development",
    shortName: "Web Development",
    statement: "Modern websites, landing pages, SaaS applications, dashboards, and full digital platforms.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "responsive development", "API integration", "performance optimization", "SEO", "accessibility", "frontend architecture"],
    tools: ["Next.js", "Vite", "React", "Tailwind CSS", "Vercel", "Node.js"],
    problemsSolved: [
      "Slow page load times affecting SEO",
      "Unscalable legacy codebases",
      "Poor accessibility compliance",
      "Lack of responsive design on mobile devices"
    ],
    deliverables: ["Responsive Web Application", "SEO Optimized Pages", "Accessible Components", "CI/CD Pipeline Setup"],
    process: [
      { step: 1, title: "Setup", desc: "Configuring the optimal stack for the project." },
      { step: 2, title: "Development", desc: "Writing clean, component-driven code." },
      { step: 3, title: "Optimization", desc: "Tuning performance, SEO, and accessibility." },
      { step: 4, title: "Launch", desc: "Deploying to production and monitoring." }
    ]
  },
  {
    id: "ai-product-development",
    slug: "ai-product-development",
    name: "AI Product Development",
    shortName: "AI Products",
    statement: "Practical AI-powered products that automate work, personalize experiences, and solve real business problems.",
    skills: ["AI product strategy", "LLM integrations", "OpenAI integrations", "Groq integrations", "AI assistants", "content generation", "image analysis", "voice processing", "recommendation systems", "workflow automation"],
    tools: ["OpenAI API", "Groq", "LangChain", "Pinecone", "Vercel AI SDK"],
    problemsSolved: [
      "Manual, repetitive tasks consuming team time",
      "Generic user experiences lacking personalization",
      "Difficulty extracting insights from unstructured data",
      "High support volume that could be automated"
    ],
    deliverables: ["AI Integration Architecture", "Custom RAG Pipelines", "Automated Workflows", "Intelligent Chat/Assistant UIs"],
    process: [
      { step: 1, title: "Use Case Identification", desc: "Finding where AI adds real value." },
      { step: 2, title: "Prompt Engineering", desc: "Crafting reliable, secure instructions." },
      { step: 3, title: "Integration", desc: "Wiring LLMs into the application flow." },
      { step: 4, title: "Refinement", desc: "Testing edge cases and hallucination prevention." }
    ]
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design",
    shortName: "Graphic Design",
    statement: "High-impact visual communication for digital platforms, campaigns, products, and social media.",
    skills: ["social media design", "marketing graphics", "App Store visuals", "presentation design", "promotional design", "layout systems", "visual storytelling", "digital advertising assets"],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "After Effects"],
    problemsSolved: [
      "Inconsistent marketing collateral",
      "Low engagement on social channels",
      "Unprofessional presentation decks",
      "Lack of visual assets for ad campaigns"
    ],
    deliverables: ["Social Media Kits", "Ad Creative", "Presentation Templates", "App Store Screenshots"],
    process: [
      { step: 1, title: "Briefing", desc: "Understanding the campaign goals and audience." },
      { step: 2, title: "Concepting", desc: "Exploring visual directions." },
      { step: 3, title: "Production", desc: "Creating the final assets." },
      { step: 4, title: "Delivery", desc: "Exporting in all required formats." }
    ]
  },
  {
    id: "branding-visual-identity",
    slug: "branding-visual-identity",
    name: "Branding & Visual Identity",
    shortName: "Branding",
    statement: "Strategic brand identities that make businesses recognizable, trustworthy, and memorable.",
    skills: ["brand strategy", "logo design", "color systems", "typography", "brand guidelines", "visual identity", "brand applications", "digital brand systems"],
    tools: ["Adobe Illustrator", "Figma", "Glyphs"],
    problemsSolved: [
      "Generic brand identity that blends into the market",
      "Lack of cohesive rules for brand application",
      "Outdated logos that don't scale digitally",
      "Misalignment between business vision and visual communication"
    ],
    deliverables: ["Logo Suite", "Brand Guidelines", "Color & Typography Systems", "Brand Applications"],
    process: [
      { step: 1, title: "Strategy", desc: "Defining brand positioning and voice." },
      { step: 2, title: "Identity Design", desc: "Creating the core visual elements (logo, color, type)." },
      { step: 3, title: "Systematization", desc: "Building rules for how the brand works." },
      { step: 4, title: "Guidelines", desc: "Documenting the brand for future use." }
    ]
  }
];
