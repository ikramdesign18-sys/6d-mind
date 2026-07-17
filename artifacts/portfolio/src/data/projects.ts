export const PROJECTS = [
  {
    id: "fintech-dashboard",
    slug: "fintech-dashboard",
    title: "Aura Financial",
    category: "UI/UX Design",
    industry: "FinTech",
    duration: "3 months",
    role: "Lead Product Designer",
    services: ["UX Research", "UI Design", "Design System"],
    image: "/images/placeholder-project-1.jpg",
    overview: "Aura Financial needed a complete overhaul of their wealth management dashboard to make complex financial data accessible to retail investors.",
    challenge: "The existing platform was cluttered, intimidating to new users, and failed to highlight actionable insights.",
    discovery: "Conducted interviews with 20+ retail investors to understand their primary concerns and data consumption habits.",
    strategy: "Shifted the focus from raw data tables to contextual, visual insights with a progressive disclosure model.",
    designDecisions: "Implemented a stark, high-contrast dark mode to make charts pop, paired with a monospaced font for numbers to ensure alignment and readability.",
    developmentApproach: "Built a comprehensive Figma design system with tokens ready for the frontend team to implement in Tailwind.",
    results: "Increased daily active users by 45% and reduced support tickets related to finding information by 60%.",
    technologies: ["Figma", "Protopie", "Tailwind CSS"],
    testimonial: {
      quote: "The redesign completely transformed how our users interact with their wealth. It feels incredibly premium and trustworthy.",
      author: "Jane Doe, CPO at Aura Financial"
    }
  },
  {
    id: "ai-health-assistant",
    slug: "ai-health-assistant",
    title: "Vitality AI",
    category: "AI Product Development",
    industry: "Healthcare",
    duration: "4 months",
    role: "Full Stack Engineer & AI Specialist",
    services: ["React Native Dev", "LLM Integration", "Backend Architecture"],
    image: "/images/placeholder-project-2.jpg",
    overview: "An AI-powered symptom checker and health companion mobile app.",
    challenge: "Integrating complex medical LLM APIs while maintaining strict user data privacy and a highly responsive mobile UI.",
    discovery: "Researched secure edge-computing strategies and on-device processing capabilities.",
    strategy: "Utilized a combination of local lightweight models for immediate triage and secure cloud APIs for deep analysis.",
    designDecisions: "Opted for a calm, conversational chat interface that feels less clinical and more empathetic.",
    developmentApproach: "Built with React Native and Expo, integrating a custom RAG pipeline backed by LangChain.",
    results: "Successfully processed 10,000+ beta interactions with a 98% accuracy rating on triage recommendations.",
    technologies: ["React Native", "TypeScript", "LangChain", "OpenAI"],
    testimonial: {
      quote: "A seamless integration of complex AI into a consumer-friendly package.",
      author: "John Smith, Founder of Vitality AI"
    }
  },
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Lumina Commerce",
    category: "Website & Web App Development",
    industry: "E-Commerce",
    duration: "2.5 months",
    role: "Frontend Engineer",
    services: ["Next.js Development", "Performance Optimization", "Headless CMS"],
    image: "/images/placeholder-project-3.jpg",
    overview: "A high-performance headless e-commerce storefront for a luxury lighting brand.",
    challenge: "The legacy Shopify theme was too slow and restrictive for the brand's new immersive 3D product viewing features.",
    discovery: "Identified Next.js App Router as the best solution for static rendering with dynamic edge capabilities.",
    strategy: "Decoupled the frontend from Shopify, building a bespoke Next.js application that heavily caches product data.",
    designDecisions: "Implemented smooth page transitions and a minimalist interface to let the product imagery take center stage.",
    developmentApproach: "Used Next.js, Tailwind CSS, and Shopify Storefront API. Implemented React Three Fiber for the 3D product viewer.",
    results: "Improved Core Web Vitals to 99/100, resulting in a 25% increase in organic traffic and a 15% bump in conversion rate.",
    technologies: ["Next.js", "React Three Fiber", "Tailwind CSS", "Shopify API"],
    testimonial: {
      quote: "Our new site is blazingly fast. The technical execution was flawless.",
      author: "Sarah Jenkins, Tech Lead at Lumina"
    }
  },
  {
    id: "fitness-tracker",
    slug: "fitness-tracker",
    title: "Pulse Mobile",
    category: "Mobile App Development",
    industry: "Fitness & Wellness",
    duration: "5 months",
    role: "Mobile App Developer",
    services: ["React Native", "HealthKit Integration", "Offline First"],
    image: "/images/placeholder-project-4.jpg",
    overview: "A comprehensive workout tracker that syncs perfectly with wearable devices.",
    challenge: "Ensuring zero data loss during workouts in areas with poor cellular reception (like basement gyms).",
    discovery: "Evaluated various local-first database solutions for React Native.",
    strategy: "Implemented WatermelonDB for robust offline-first capabilities, syncing only when a stable connection is detected.",
    designDecisions: "Used large, easily tappable areas and high contrast colors for sweaty hands and bright gym lighting.",
    developmentApproach: "Built entirely in React Native with a custom native module for advanced HealthKit parsing.",
    results: "Maintained a 4.9-star rating on the App Store with zero reported data loss incidents.",
    technologies: ["React Native", "WatermelonDB", "HealthKit API"],
    testimonial: {
      quote: "Finally, a fitness app that doesn't break when I'm in the gym basement.",
      author: "App Store Reviewer"
    }
  }
];
