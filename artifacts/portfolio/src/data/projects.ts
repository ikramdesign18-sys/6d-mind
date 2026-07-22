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
  detailPath?: string;
  homepageVisible?: boolean;
  galleryImages?: Array<{
    src: string;
    alt: string;
  }>;
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
    id: "mdcn-distribution",
    slug: "mdcn-distribution",
    title: "MDCN Distribution",
    category: "E-commerce · Website · UI/UX · Development",
    cardCategory: "E-commerce · UI/UX · Frontend Development",
    filterTags: ["UI/UX Design", "Web Development"],
    industry: "Skateboarding · Streetwear · Lifestyle Retail",
    role: "UI/UX Designer and Frontend Developer",
    services: [
      "Product strategy",
      "User-flow design",
      "E-commerce information architecture",
      "Responsive website UI/UX",
      "Homepage design",
      "Navigation and mega-menu design",
      "Product-listing and filter experience",
      "Product-card system",
      "Product-detail design",
      "Wishlist experience",
      "Cart and promo-code experience",
      "Checkout-entry flow",
      "Order-confirmation experience",
      "Design system",
      "Interactive prototyping",
      "Frontend development planning",
      "Accessibility",
      "Performance optimization",
      "Responsive testing",
      "Launch preparation",
    ],
    image: "/projects/mdcn-distribution/mdcn-cover.png",
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "MDCN Distribution e-commerce platform shown on a laptop with product, product-detail, cart, and order-confirmation interface previews.",
    platform: "Desktop · Tablet · Mobile Web",
    year: "2026",
    summary:
      "A complete skate and streetwear e-commerce experience combining expressive collection storytelling, advanced product discovery, detailed product pages, cart management, and a clear post-purchase journey.",
    shortLabel:
      "From skate discovery to order confirmation in one connected commerce experience.",
    tags: [
      "UI/UX",
      "Website",
      "E-commerce",
      "Product Design",
      "Frontend Development",
      "Responsive Design",
      "Retail",
      "Skateboarding",
    ],
    overview:
      "MDCN Distribution connects brand-led homepage discovery with category navigation, advanced filtering, detailed product evaluation, cart management, promotion handling, and a clear order-confirmation journey.",
    challenge:
      "Organize a broad skate, streetwear, apparel, footwear, protection, and accessories catalog without losing brand energy or making product discovery and pricing difficult to understand.",
    discovery:
      "Mapped the visible store taxonomy, category and brand navigation, filter groups, product-card anatomy, product options, cart hierarchy, and order-confirmation requirements.",
    strategy:
      "Structured one connected journey from campaign storytelling and catalog discovery to product evaluation, cart review, checkout entry, and post-purchase reassurance.",
    designDecisions:
      "Used a neutral monochrome interface, large product imagery, restrained sale and trust accents, editorial headings, and predictable commerce controls so products and skate culture remain dominant.",
    developmentApproach:
      "Prepared reusable responsive component patterns and development-ready interaction states. The supplied materials do not include the storefront source, so framework, live search, filter logic, wishlist state, inventory, checkout, payment, account, and commerce-provider integrations are not presented as verified implementation.",
    results:
      "A complete responsive commerce foundation connecting product strategy, information architecture, UI/UX, reusable component planning, accessibility, performance, testing, and launch preparation.",
    technologies: [
      "Storefront implementation stack not verified from supplied source",
    ],
  },
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
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "Planit Prep AI meal-planning application presented across three mobile screens with daily planning, generated recipe details, and meal feedback features.",
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
    id: "crunchtime-fitness",
    slug: "crunchtime-fitness",
    title: "CrunchTime Fitness",
    category: "Mobile App · Website · Full-Stack Product",
    cardCategory: "Mobile App · Website · Full-Stack",
    filterTags: ["UI/UX Design", "Mobile Apps", "Web Development"],
    industry: "Fitness · Wellness · Personal Coaching",
    role: "Product Designer and Full-Stack Product Developer",
    services: [
      "Product strategy",
      "User-flow design",
      "Mobile app UI/UX design",
      "Responsive website UI/UX design",
      "Information architecture",
      "Interactive prototyping",
      "Design system",
      "Trainer-booking workflows",
      "Video-coaching experience design",
      "Workout and nutrition flows",
      "Pricing and payment experience design",
      "Support-center design",
      "Development-ready product specification",
      "Responsive implementation planning",
      "Testing",
      "Launch preparation",
    ],
    image: "/projects/crunchtime-fitness/crunchtime-cover.png",
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "CrunchTime Fitness premium platform presented across a laptop and mobile fitness dashboards beside black-and-gold training, coaching, nutrition, and progress messaging.",
    platform: "iOS · Android · Responsive Web",
    year: "2026",
    summary:
      "A premium fitness and coaching platform connecting users with expert trainers, personalized workouts, meal plans, video consultations, booking, and progress tools.",
    shortLabel:
      "Personal training, nutrition, booking, and coaching in one connected platform.",
    tags: [
      "UI/UX",
      "Mobile App",
      "Website",
      "Full-Stack",
      "Fitness",
      "SaaS",
      "Product Design",
    ],
    overview:
      "CrunchTime Fitness brings training, nutrition, trainer booking, coaching communication, progress tracking, pricing, and support into one connected cross-platform experience.",
    challenge:
      "Unify complex coaching workflows across mobile and responsive web while keeping pricing, booking status, communication, and everyday fitness actions clear.",
    discovery:
      "Mapped member and trainer journeys across workout discovery, progress tracking, booking requests, approval, payment, consultation access, nutrition, and support.",
    strategy:
      "Structured the product around a focused mobile dashboard and a responsive website that explains value, features, pricing, booking, coaching, and support.",
    designDecisions:
      "Used a restrained black, charcoal, gold, and off-white system to communicate premium coaching while preserving legibility, status clarity, and responsive consistency.",
    developmentApproach:
      "Prepared responsive mobile and website interfaces, reusable states, and implementation-ready workflows. The supplied portfolio materials do not include the product source, so framework, backend, payment-provider, and video-provider details are not presented as verified implementation.",
    results:
      "A launch-preparation foundation connecting mobile product design, responsive website design, booking and coaching workflows, pricing, support, and implementation-ready product documentation.",
    technologies: [
      "Product implementation stack not verified from supplied source",
    ],
  },
  {
    id: "elan-fashion",
    slug: "elan-fashion",
    title: "ÉLAN",
    category: "Website · E-commerce · UI/UX",
    cardCategory: "Responsive E-commerce · UI/UX · Frontend",
    filterTags: ["UI/UX Design", "Web Development"],
    industry: "Fashion · Lifestyle · Retail",
    role: "UI/UX Designer and Frontend Developer",
    services: [
      "Product strategy",
      "E-commerce information architecture",
      "User-flow design",
      "Responsive website design",
      "Homepage UI/UX",
      "Collection-page UI/UX",
      "Product-detail UI/UX",
      "Product discovery",
      "Filtering experience",
      "Wishlist interactions",
      "Product-card system",
      "Color selection",
      "Size selection",
      "Cart-entry experience",
      "Responsive design system",
      "Interactive prototyping",
      "Frontend development planning",
      "Accessibility",
      "Performance optimization",
      "Testing",
      "Launch preparation",
    ],
    image: "/projects/elan-fashion/elan-cover.png",
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "ÉLAN responsive fashion e-commerce homepage shown across desktop, tablet, and mobile with a seasonal campaign hero and curated products.",
    platform: "Desktop · Tablet · Mobile Web",
    year: "2026",
    summary:
      "A refined responsive fashion store designed around editorial storytelling, clear product discovery, and a seamless journey from browsing to product selection.",
    shortLabel:
      "Editorial fashion storytelling with a focused shopping experience.",
    tags: [
      "UI/UX",
      "Website",
      "E-commerce",
      "Responsive Design",
      "Frontend Development",
      "Fashion",
      "Product Design",
    ],
    overview:
      "ÉLAN balances editorial fashion storytelling with practical product discovery across a responsive homepage, filtered collections, reusable product cards, and a purchase-focused product-detail experience.",
    challenge:
      "Preserve a premium editorial identity while keeping navigation, product discovery, filters, pricing, options, and purchase actions clear across desktop, tablet, and mobile.",
    discovery:
      "Mapped the store structure, collection browsing, filter groups, product-card behavior, product options, and responsive priorities visible in the supplied experience.",
    strategy:
      "Structured the journey from seasonal campaign to collection discovery and product decision, with imagery leading while commerce controls remain predictable.",
    designDecisions:
      "Used warm neutral surfaces, editorial typography, restrained controls, consistent product imagery, and responsive grids to keep the experience calm and commercially practical.",
    developmentApproach:
      "Prepared reusable responsive components and development-ready interaction states. The supplied materials do not include the storefront source, so framework, commerce API, wishlist persistence, cart state, checkout, and payment integrations are not presented as verified implementation.",
    results:
      "A complete responsive fashion-commerce foundation connecting product strategy, editorial UI/UX, reusable component planning, accessibility, performance, testing, and launch preparation.",
    technologies: [
      "Storefront implementation stack not verified from supplied source",
    ],
  },
  {
    id: "logo-branding-collection",
    slug: "logo-branding-collection",
    title: "Logo & Brand Identity Collection",
    category: "Graphic Design",
    cardCategory: "Branding · Logo Design",
    filterTags: ["Graphic Design", "Branding", "Logo Design"],
    industry:
      "Fashion · Technology · Skincare · Fitness · Coffee · Architecture",
    role: "Logo Designer and Brand Identity Designer",
    services: [
      "Logo strategy",
      "Brand naming concepts",
      "Monogram design",
      "Symbol development",
      "Typography selection",
      "Color direction",
      "Visual identity design",
      "Brand positioning",
      "Logo presentation",
      "Digital identity preparation",
    ],
    image: "/projects/logo-branding-collection/aureline-logo.png",
    imageWidth: 1254,
    imageHeight: 1254,
    imageAlt:
      "Logo and brand identity collection featuring Aureline, NovaForge, Verdelle, IronPeak, Soluna Roasters, and Atelier North.",
    detailPath: "/work/graphic-design/logo-branding-collection",
    homepageVisible: false,
    galleryImages: [
      {
        src: "/projects/logo-branding-collection/aureline-logo.png",
        alt: "Aureline luxury fashion AL monogram and wordmark in gold and black.",
      },
      {
        src: "/projects/logo-branding-collection/novaforge-logo.png",
        alt: "NovaForge technology logo with geometric NF symbol and circuit details.",
      },
      {
        src: "/projects/logo-branding-collection/verdelle-logo.png",
        alt: "Verdelle organic skincare botanical V logo in sage green and gold.",
      },
      {
        src: "/projects/logo-branding-collection/ironpeak-logo.png",
        alt: "IronPeak fitness logo combining an angular IP monogram and mountain peak.",
      },
      {
        src: "/projects/logo-branding-collection/soluna-roasters-logo.png",
        alt: "Soluna Roasters coffee identity with sun, moon, coffee plant, and landscape symbol.",
      },
      {
        src: "/projects/logo-branding-collection/atelier-north-logo.png",
        alt: "Atelier North architecture identity with building linework and north marker.",
      },
    ],
    platform: "Brand identity · Digital and print",
    year: "2026",
    summary:
      "A curated collection of six logo and visual identity concepts, each designed around a different audience, industry, personality, and positioning strategy.",
    shortLabel:
      "Six distinctive logo systems created for fashion, technology, skincare, fitness, coffee, and architecture brands.",
    tags: [
      "Graphic Design",
      "Branding",
      "Logo Design",
      "Visual Identity",
      "Typography",
      "Monogram",
      "Brand Strategy",
    ],
    overview:
      "A curated collection of six logo and visual identity concepts, each designed around a different audience, industry, personality, and positioning strategy.",
    challenge:
      "Create six immediately distinctive identities while giving every brand a clear strategic idea, ownable visual language, appropriate typography, and enough simplicity to work across modern digital touchpoints.",
    discovery:
      "Defined the audience, competitive tone, emotional qualities, naming cues, and practical identity requirements for luxury fashion, engineered technology, organic skincare, performance fitness, specialty coffee, and architecture.",
    strategy:
      "Built each direction around one memorable visual idea, then aligned symbol, monogram, typography, palette, spacing, and presentation with the brand’s intended position.",
    designDecisions:
      "Balanced expressive symbols with disciplined construction, pairing each mark with an industry-appropriate wordmark and a focused color system that remains recognizable at digital sizes.",
    developmentApproach:
      "Prepared presentation-ready raster assets and digital identity guidance for responsive portfolio display. Production vector masters, trademark review, and final brand-guideline documents would follow in a client delivery phase.",
    results:
      "Six differentiated identity systems demonstrating range across monogram, geometric, botanical, athletic, illustrative, and architectural logo directions.",
    technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
  },
  {
    id: "lumina-botanicals",
    slug: "lumina-botanicals",
    title: "Lumina Botanicals",
    category: "Graphic Design",
    cardCategory: "Branding · Packaging · Visual Identity",
    filterTags: [
      "Graphic Design",
      "Branding",
      "Packaging",
      "Visual Identity",
      "Skincare",
      "Premium Brand",
    ],
    industry: "Premium Skincare · Beauty · Wellness",
    role: "Brand Identity and Packaging Designer",
    services: [
      "Brand strategy",
      "Logo and monogram design",
      "Visual identity",
      "Color and typography direction",
      "Packaging design",
      "Stationery design",
      "Retail applications",
      "Campaign art direction",
      "Brand presentation",
    ],
    image: "/projects/lumina-botanicals/01-lumina-banner.png",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "Lumina Botanicals premium skincare identity banner featuring the botanical LB monogram, wordmark, serum bottle, and matching product box.",
    detailPath: "/work/graphic-design/lumina-botanicals",
    homepageVisible: false,
    platform: "Brand identity · Packaging · Print and digital",
    year: "2026",
    summary:
      "A refined visual identity concept for a premium organic skincare brand, built around calm luxury, botanical purity, and elevated packaging.",
    shortLabel:
      "Premium organic skincare identity shaped by botanical purity, calm luxury, and refined packaging.",
    tags: [
      "Branding",
      "Packaging",
      "Visual Identity",
      "Skincare",
      "Graphic Design",
      "Art Direction",
    ],
    overview:
      "Lumina Botanicals was designed as a premium skincare identity concept rooted in purity, elegance, and natural care. The branding balances soft editorial sophistication with a calm botanical character, creating a cohesive system across packaging, stationery, logo applications, and campaign visuals.",
    challenge:
      "Create a fictional skincare identity that feels premium and natural without relying on generic wellness cues, then extend it consistently across product, packaging, print, retail, and campaign touchpoints.",
    discovery:
      "Defined an audience that values premium natural skincare, beautiful packaging, quiet confidence, and transparent visual communication.",
    strategy:
      "Positioned Lumina around nature, radiance, calm, and purity, then translated those ideas into a botanical LB monogram, editorial typography, restrained color, and elevated packaging applications.",
    designDecisions:
      "Combined deep forest green, warm ivory, muted gold, elegant serif typography, botanical linework, and generous negative space to establish a calm luxury language.",
    developmentApproach:
      "Prepared a presentation-ready identity concept across logo variations, color and type, packaging, stationery, retail, and campaign art direction. Lumina Botanicals is an independent fictional portfolio concept, not a registered company or launched client brand.",
    results:
      "A cohesive premium skincare identity concept spanning logo, packaging, print collateral, retail application, and editorial campaign expression.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  },
  {
    id: "orphevia-branding",
    slug: "orphevia-branding",
    title: "ORPHEVIA",
    category: "Graphic Design",
    cardCategory: "Branding · Visual Identity · Technology",
    filterTags: [
      "Graphic Design",
      "Branding",
      "Logo Design",
      "Visual Identity",
      "Product Branding",
      "Technology Branding",
      "Packaging",
      "Digital Campaign",
    ],
    industry: "Audio Technology · Consumer Electronics · Digital Products",
    role: "Brand Identity Designer",
    services: [
      "Brand positioning",
      "Brand personality",
      "Brand naming concept",
      "Logo and symbol design",
      "Monogram design",
      "Wordmark design",
      "Visual identity system",
      "Color palette",
      "Typography system",
      "Brand guidelines",
      "Product identity",
      "Hardware branding",
      "Packaging direction",
      "Stationery design",
      "Digital experience direction",
      "Social campaign design",
      "Launch communication",
    ],
    image: "/projects/orphevia-branding/01-orphevia-portfolio-banner.png",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "ORPHEVIA spatial audio identity presentation featuring the luminous O symbol, premium headphones, brand typography, and violet-to-cyan visual system.",
    detailPath: "/work/graphic-design/orphevia-branding",
    homepageVisible: false,
    platform: "Brand identity · Product · Packaging · Digital campaign",
    year: "2026",
    summary:
      "A complete visual identity created for a fictional premium spatial-audio brand, extending from logo strategy and product hardware to packaging, stationery, and digital campaigns.",
    shortLabel:
      "A future-facing spatial-audio identity balancing immersive technology, precision, and emotional depth.",
    tags: [
      "Graphic Design",
      "Branding",
      "Logo Design",
      "Visual Identity",
      "Technology",
      "Product Branding",
      "Packaging",
      "Art Direction",
    ],
    overview:
      "ORPHEVIA is an independent fictional spatial-audio brand concept developed to explore how sound, depth, precision, and emotion can become one cohesive visual system across premium hardware, packaging, stationery, and digital communication.",
    challenge:
      "Build a technology identity that feels advanced without becoming cold, and expressive without losing the precision, clarity, and trust expected from premium audio hardware.",
    discovery:
      "Mapped the visual and verbal needs of spatial listening products, from compact digital marks and product engraving to retail packaging, setup touchpoints, campaign messaging, and responsive interface contexts.",
    strategy:
      "Positioned ORPHEVIA around dimensional listening: a precise but human experience where sound is not only heard, but placed, felt, and understood in space.",
    designDecisions:
      "Combined a radial O symbol, orbital geometry, deep midnight surfaces, violet-to-cyan light, editorial serif display type, and clear interface typography to balance emotion with engineered credibility.",
    developmentApproach:
      "Prepared a presentation-ready fictional identity system across vector logo assets, product concepts, packaging, stationery, digital applications, and campaign direction. The work is not presented as a launched company, registered trademark, or client-owned brand.",
    results:
      "A cohesive premium audio identity concept that scales from a compact app icon and hardware mark to packaging, editorial layouts, digital campaigns, and full brand presentations.",
    technologies: [
      "Vector identity system",
      "Responsive brand applications",
      "Print and digital presentation",
    ],
  },
];
