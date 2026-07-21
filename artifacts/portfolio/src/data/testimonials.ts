export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  country?: string;
  rating: number;
  review: string;
  initials: string;
  featured?: boolean;
  source: "real" | "demo";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ahmed-moddy",
    name: "Ahmed Moddy",
    role: "Founder",
    company: "Planit Prep",
    country: "United Arab Emirates",
    rating: 5,
    review:
      "Working with Ikram has been a pleasure. His designs are on point, and he knows how to elevate features and products.",
    initials: "AM",
    featured: true,
    source: "real",
  },
  {
    id: "daniel-kwasi-d",
    name: "Daniel Kwasi D",
    role: "Founder",
    company: "Listin",
    country: "Ghana",
    rating: 5,
    review:
      "He did an excellent job bringing our design ideas to life just as we requested. His strong understanding of good UI/UX really shows. The visuals were stunning, and the different layout and presentation options he provided were a great bonus. Highly recommended, and we’ll definitely be doing more gigs with him!",
    initials: "DK",
    source: "real",
  },
  {
    id: "marina-keldon",
    name: "Marina Keldon",
    role: "Client",
    country: "United States",
    rating: 5,
    review:
      "Ikram did a great job. The design is very clean and modern. Highly recommended.",
    initials: "MK",
    source: "real",
  },
  {
    id: "zac-propapp",
    name: "Zac",
    role: "Founder & Owner",
    company: "PropApp",
    rating: 5,
    review:
      "Thank you very much, always happy with your detail and efforts towards adding value to my business.",
    initials: "ZP",
    source: "real",
  },
  {
    id: "hamad-mahfooz",
    name: "Hamad",
    role: "Founder & Owner",
    company: "Mahfooz",
    country: "United Arab Emirates",
    rating: 5,
    review:
      "Ikram transformed Mahfooz from a complex health-management idea into a clear, reassuring product experience. He brought structure to every feature, understood the needs of families, and delivered a visual system that feels both trustworthy and genuinely easy to use.",
    initials: "HM",
    source: "demo",
  },
  {
    id: "sarah-northline",
    name: "Sarah Coleman",
    role: "Product Lead",
    company: "Northline Studio",
    country: "United Kingdom",
    rating: 5,
    review:
      "The process felt calm, collaborative, and incredibly focused. Ikram asked the right questions, simplified a difficult user journey, and gave our team a product direction we could confidently build on.",
    initials: "SC",
    source: "demo",
  },
  {
    id: "omar-vertex",
    name: "Omar Rahman",
    role: "Co-founder",
    company: "Vertex Labs",
    country: "Qatar",
    rating: 5,
    review:
      "What stood out was the balance between strong visual craft and practical product thinking. Every screen had a purpose, every decision was explained, and the final system was ready for development.",
    initials: "OR",
    source: "demo",
  },
  {
    id: "lena-atelier",
    name: "Lena Brooks",
    role: "Brand Director",
    company: "Atelier Eight",
    country: "Canada",
    rating: 5,
    review:
      "Ikram gave our digital presence the clarity and polish it had been missing. The result feels premium without becoming complicated, and our brand now communicates with far more confidence.",
    initials: "LB",
    source: "demo",
  },
  {
    id: "yusuf-kinetic",
    name: "Yusuf Ali",
    role: "Founder",
    company: "Kinetic Works",
    country: "Saudi Arabia",
    rating: 5,
    review:
      "From early concepts to the final handoff, the work was thoughtful, organized, and consistently high quality. Ikram understood the business goal and turned it into an experience our customers can navigate with ease.",
    initials: "YA",
    source: "demo",
  },
  {
    id: "mia-brightpath",
    name: "Mia Torres",
    role: "Operations Director",
    company: "Brightpath",
    country: "United States",
    rating: 5,
    review:
      "We needed a partner who could bring product strategy, interface design, and detail together. Ikram delivered all three, with clear communication and a level of care that made the whole project stronger.",
    initials: "MT",
    source: "demo",
  },
];
