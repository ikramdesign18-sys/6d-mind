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
  source: "real";
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
];
