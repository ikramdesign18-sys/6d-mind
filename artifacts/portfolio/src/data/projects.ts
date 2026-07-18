export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  cardCategory?: string;
  filterTags?: string[];
  industry: string;
  duration?: string;
  role: string;
  services: string[];
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  platform?: string;
  year?: string;
  summary?: string;
  shortLabel?: string;
  tags?: string[];
  overview: string;
  challenge: string;
  discovery: string;
  strategy: string;
  designDecisions: string;
  developmentApproach: string;
  results: string;
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "planit-prep",
    slug: "planit-prep",
    title: "Planit Prep 2.0",
    category: "Mobile App · UI/UX Design",
    industry: "Health & Wellness · Food Technology",
    role: "UI/UX Designer and Product Designer",
    services: [
      "Product strategy",
      "UX research",
      "User-flow design",
      "Information architecture",
      "Wireframing",
      "Mobile UI design",
      "Interactive prototyping",
      "Design system",
      "Developer handoff",
    ],
    image: "/projects/planit-prep/planit-prep-cover.png",
    imageWidth: 1033,
    imageHeight: 769,
    imageAlt:
      "Planit Prep mobile application showing the weekly meal dashboard, AI-generated recipe details, and meal feedback flow.",
    platform: "iOS and Android",
    year: "2026",
    summary:
      "An intelligent meal-planning experience that creates personalized weekly meals around each user’s goals, preferences, schedule, and cooking style.",
    shortLabel: "Personalized meal planning for real routines.",
    tags: [
      "Mobile App",
      "Product Design",
      "Health Tech",
      "AI Experience",
      "Food Tech",
    ],
    overview:
      "Planit Prep helps people move from meal-planning stress to a clear, personalized weekly routine. The experience adapts to dietary goals, cooking preferences, available time, and whether the user prefers cooking every day or preparing meals in batches.",
    challenge:
      "Turn complex nutrition preferences, changing schedules, and different cooking routines into a simple daily experience without hiding important choices from the user.",
    discovery:
      "Mapped the lifestyle, dietary, equipment, time, and household decisions that shape a useful weekly meal plan.",
    strategy:
      "Structured the product as a connected set of focused flows spanning setup, planning, recipe detail, regeneration, and feedback.",
    designDecisions:
      "Balanced food-led imagery and approachable nutrition summaries with clear controls for daily planning, batch cooking, and plan changes.",
    developmentApproach:
      "Standardized reusable components, states, spacing, controls, and interaction rules for a consistent developer handoff.",
    results:
      "A cohesive product direction that connects personal preferences to adaptable weekly planning and practical meal preparation.",
    technologies: ["Figma", "Interactive Prototyping", "Design Systems"],
  },
  {
    id: "mahfooz",
    slug: "mahfooz",
    title: "Mahfooz",
    category: "Mobile App · HealthTech · Full-Stack Product",
    cardCategory: "Mobile App · HealthTech",
    filterTags: [
      "UI/UX Design",
      "Mobile Apps",
      "AI Products",
      "Branding",
      "Graphic Design",
    ],
    industry: "Family Health · Personal Organization · Health Technology",
    role: "Product Designer and Full-Stack Mobile App Developer",
    services: [
      "Product strategy",
      "User-flow design",
      "Information architecture",
      "Mobile UI/UX design",
      "Interactive prototyping",
      "Design system",
      "Brand identity",
      "Logo design",
      "App-icon design",
      "Graphic design",
      "Social-media design",
      "React Native development",
      "Backend integration",
      "AI feature integration",
      "Notification workflows",
      "Deployment preparation",
    ],
    image: "/projects/mahfooz/mahfooz-cover.png",
    imageWidth: 1024,
    imageHeight: 500,
    imageAlt:
      "Mahfooz family health organizer branding and three mobile screens showing family records, the daily health dashboard, and a pregnancy profile.",
    platform: "iOS and Android",
    year: "2026",
    summary:
      "A private family health organizer for medicines, reports, doctor notes, daily routines, reminders, pregnancy tracking, and AI-assisted health organization.",
    shortLabel:
      "One app for the health records and routines of the whole family.",
    tags: [
      "UI/UX",
      "Mobile App",
      "Full-Stack",
      "Branding",
      "HealthTech",
      "AI Product",
    ],
    overview:
      "Mahfooz brings medicines, reports, doctor notes, reminders, daily routines, pregnancy information, and family health records into one clear and manageable experience.",
    challenge:
      "Organize different kinds of family health information and time-sensitive routines without making the product feel clinical, complicated, or medically authoritative.",
    discovery:
      "Mapped medicines, reports, appointments, doctor notes, reminders, pregnancy records, and everyday routines across multiple family members.",
    strategy:
      "Created a member-based architecture that keeps each person’s records independent while making the wider family picture easy to understand.",
    designDecisions:
      "Combined calm teal actions, readable status colors, large touch targets, reusable cards, and clear navigation across the product and brand.",
    developmentApproach:
      "Built the mobile experience with React Native, Expo, TypeScript, API integration, notifications, and a FastAPI backend service.",
    results:
      "A cohesive family-health product foundation spanning strategy, interface design, brand identity, campaign graphics, mobile development, and delivery preparation.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "FastAPI",
      "Groq integration",
      "Expo Notifications",
      "Local and cloud-ready data architecture",
    ],
  },
  {
    id: "amanat-diary",
    slug: "amanat-diary",
    title: "Amanat Diary",
    category: "Mobile App · Personal Productivity · Privacy",
    cardCategory: "Mobile App · UI/UX · Full-Stack",
    filterTags: [
      "UI/UX Design",
      "Mobile Apps",
      "AI Products",
      "Branding",
      "Graphic Design",
      "Web Development",
    ],
    industry:
      "Personal Journaling · Memory Preservation · Lifestyle Technology",
    role: "Product Designer and Full-Stack Mobile App Developer",
    services: [
      "Product strategy",
      "Information architecture",
      "User-flow design",
      "Mobile UI/UX design",
      "Interactive prototyping",
      "Design system",
      "Brand identity",
      "Logo design",
      "App-icon design",
      "Promotional graphic design",
      "React Native development",
      "Local database architecture",
      "Optional authentication",
      "Optional cloud synchronization",
      "Voice recording workflows",
      "Notification workflows",
      "AI-assisted text polishing",
      "Export and backup functionality",
      "Testing and launch preparation",
    ],
    image: "/projects/amanat-diary/amanat-diary-cover.png",
    imageWidth: 1794,
    imageHeight: 876,
    imageAlt:
      "Amanat Diary brand presentation and mobile home screen showing personal diaries, voice notes, future letters, backup, and synchronization features.",
    platform: "iOS and Android",
    year: "2026",
    summary:
      "A private, local-first diary that helps people preserve written memories, record voice entries, create future messages, and protect personal stories.",
    shortLabel:
      "Your voice, thoughts, and future memories—privately preserved.",
    tags: [
      "UI/UX",
      "Mobile App",
      "Full-Stack",
      "AI Product",
      "Branding",
      "Graphic Design",
      "Privacy",
    ],
    overview:
      "Amanat Diary is a local-first personal memory vault for written journals, voice entries, multiple diaries, and future messages, with optional backup and synchronization.",
    challenge:
      "Create emotional value across several memory formats while making privacy, local use, account choices, and future delivery easy to understand.",
    discovery:
      "Mapped the moments people want to preserve, the different ways they capture memories, and the trust questions that appear before someone writes something personal.",
    strategy:
      "Designed a local-first core with optional identity and cloud services, then organized writing, voice, multiple diaries, and scheduled memories as one coherent product.",
    designDecisions:
      "Combined calm editorial layouts, explicit privacy language, large actions, warm literary branding, and clear separation between local and optional cloud features.",
    developmentApproach:
      "Prepared a React Native and Expo application architecture using TypeScript, SQLite for device-local data, optional Supabase services, notifications, audio workflows, and AI-assisted text polishing.",
    results:
      "A launch-preparation foundation that connects product strategy, interface design, brand identity, promotional graphics, mobile development, privacy decisions, testing, and delivery planning.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Supabase",
      "Expo Notifications",
      "Audio recording",
      "AI-assisted text workflows",
    ],
  },
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
    overview:
      "Aura Financial needed a complete overhaul of their wealth management dashboard to make complex financial data accessible to retail investors.",
    challenge:
      "The existing platform was cluttered, intimidating to new users, and failed to highlight actionable insights.",
    discovery:
      "Conducted interviews with 20+ retail investors to understand their primary concerns and data consumption habits.",
    strategy:
      "Shifted the focus from raw data tables to contextual, visual insights with a progressive disclosure model.",
    designDecisions:
      "Implemented a stark, high-contrast dark mode to make charts pop, paired with a monospaced font for numbers to ensure alignment and readability.",
    developmentApproach:
      "Built a comprehensive Figma design system with tokens ready for the frontend team to implement in Tailwind.",
    results:
      "Increased daily active users by 45% and reduced support tickets related to finding information by 60%.",
    technologies: ["Figma", "Protopie", "Tailwind CSS"],
    testimonial: {
      quote:
        "The redesign completely transformed how our users interact with their wealth. It feels incredibly premium and trustworthy.",
      author: "Jane Doe, CPO at Aura Financial",
    },
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
    challenge:
      "Integrating complex medical LLM APIs while maintaining strict user data privacy and a highly responsive mobile UI.",
    discovery:
      "Researched secure edge-computing strategies and on-device processing capabilities.",
    strategy:
      "Utilized a combination of local lightweight models for immediate triage and secure cloud APIs for deep analysis.",
    designDecisions:
      "Opted for a calm, conversational chat interface that feels less clinical and more empathetic.",
    developmentApproach:
      "Built with React Native and Expo, integrating a custom RAG pipeline backed by LangChain.",
    results:
      "Successfully processed 10,000+ beta interactions with a 98% accuracy rating on triage recommendations.",
    technologies: ["React Native", "TypeScript", "LangChain", "OpenAI"],
    testimonial: {
      quote:
        "A seamless integration of complex AI into a consumer-friendly package.",
      author: "John Smith, Founder of Vitality AI",
    },
  },
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Lumina Commerce",
    category: "Website & Web App Development",
    industry: "E-Commerce",
    duration: "2.5 months",
    role: "Frontend Engineer",
    services: [
      "Next.js Development",
      "Performance Optimization",
      "Headless CMS",
    ],
    image: "/images/placeholder-project-3.jpg",
    overview:
      "A high-performance headless e-commerce storefront for a luxury lighting brand.",
    challenge:
      "The legacy Shopify theme was too slow and restrictive for the brand's new immersive 3D product viewing features.",
    discovery:
      "Identified Next.js App Router as the best solution for static rendering with dynamic edge capabilities.",
    strategy:
      "Decoupled the frontend from Shopify, building a bespoke Next.js application that heavily caches product data.",
    designDecisions:
      "Implemented smooth page transitions and a minimalist interface to let the product imagery take center stage.",
    developmentApproach:
      "Used Next.js, Tailwind CSS, and Shopify Storefront API. Implemented React Three Fiber for the 3D product viewer.",
    results:
      "Improved Core Web Vitals to 99/100, resulting in a 25% increase in organic traffic and a 15% bump in conversion rate.",
    technologies: [
      "Next.js",
      "React Three Fiber",
      "Tailwind CSS",
      "Shopify API",
    ],
    testimonial: {
      quote:
        "Our new site is blazingly fast. The technical execution was flawless.",
      author: "Sarah Jenkins, Tech Lead at Lumina",
    },
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
    overview:
      "A comprehensive workout tracker that syncs perfectly with wearable devices.",
    challenge:
      "Ensuring zero data loss during workouts in areas with poor cellular reception (like basement gyms).",
    discovery:
      "Evaluated various local-first database solutions for React Native.",
    strategy:
      "Implemented WatermelonDB for robust offline-first capabilities, syncing only when a stable connection is detected.",
    designDecisions:
      "Used large, easily tappable areas and high contrast colors for sweaty hands and bright gym lighting.",
    developmentApproach:
      "Built entirely in React Native with a custom native module for advanced HealthKit parsing.",
    results:
      "Maintained a 4.9-star rating on the App Store with zero reported data loss incidents.",
    technologies: ["React Native", "WatermelonDB", "HealthKit API"],
    testimonial: {
      quote:
        "Finally, a fitness app that doesn't break when I'm in the gym basement.",
      author: "App Store Reviewer",
    },
  },
];
