import { STATS } from "@/data/stats";

export const BRAND_DIMENSIONS = [
  "Strategy",
  "Design",
  "Development",
  "Branding",
  "Launch",
  "Growth",
] as const;

export const BRAND_PROOF = [
  {
    value: STATS.experience,
    label: "Years of Experience",
    description: "Years combining design, technology, and product thinking.",
  },
  {
    value: STATS.projects,
    label: "Completed Projects",
    description:
      "Completed work across digital products, websites, applications, and brands.",
  },
  {
    value: STATS.collaboration,
    label: "Client Collaboration",
    description:
      "Remote collaboration with founders and businesses across different markets.",
  },
  {
    value: "End-to-End",
    label: "Product Delivery",
    description:
      "One connected journey from idea and strategy to design, development, and launch.",
  },
] as const;

export const VERIFIED_INDUSTRIES = [
  "Healthcare",
  "Fitness & Wellness",
  "E-commerce",
  "AI Products",
  "Productivity",
  "Food & Meal Planning",
  "Business Platforms",
  "Lifestyle Products",
] as const;
