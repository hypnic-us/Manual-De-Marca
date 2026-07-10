export interface Project {
  id: string;
  name: string;
  logo: string;
  thumb: string;
  desc: string;
  category: string;
  segment: string;
  caseStudy?: {
    client: string;
    location: string;
    year: string;
    sector: string;
    service: string;
    role: string;
    title: string;
    goal_context: string;
    challenges: string[];
    metrics: { value: string; label: string }[];
    qualitative_achievement: string;
    manifesto: string;
    methodology?: string[];
    narrative: { title: string; content: string }[];
    tech_detail: string;
    conclusion: string;
    images: string[];
    video?: string;
    social_proof?: { quote: string; author: string; role: string };
    concept_doc?: string;
    before_after?: { before: string; after: string; metric: string };
  };
}

export const projectsData: Project[] = [
  { 
    id: "loreal",
    name: "L'OREAL", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Floreal_negro_transparent.webp?alt=media&token=84a9e73c-4006-4784-a2c2-ca06d0d4ea09",
    thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Interactive AR Campaign for L'OREAL's new product line.",
    category: "echo",
    segment: "cosmeticos",
    caseStudy: {
      client: "L'OREAL",
      location: "Paris, France",
      year: "2024",
      sector: "Cosmetics",
      service: "digital product",
      role: "Design Lead, Phygital Architect",
      title: "The beauty revolution",
      goal_context: "L'OREAL wanted to bridge the gap between their online campaigns and in-store physical experiences.",
      challenges: ["Reduce time to purchase by 20%", "Increase user engagement in-store", "Provide seamless AR try-on"],
      metrics: [
        { value: "45%", label: "increase in dwell time" },
        { value: "12M", label: "AR interactions" }
      ],
      qualitative_achievement: "First global AR rollout for the brand across 50 flagship stores.",
      manifesto: "Creating a seamless mirror between the physical product and digital augmentation.",
      methodology: ["Identify the physical touchpoints.", "Develop the AR overlay logic.", "Deploy to smart mirrors."],
      narrative: [
        { title: "Physical Anchors", content: "By anchoring AR experiences to physical product displays, we reduced friction and created a magical moment of discovery." },
        { title: "Smart Mirrors", content: "We integrated computer vision into store mirrors to allow zero-touch try-ons, preserving hygiene while boosting product trial rates." }
      ],
      tech_detail: "WebAR, custom computer vision models, smart mirror displays, local edge servers.",
      conclusion: "Brands are experienced, not just seen. The new beauty counter is an interactive canvas.",
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
        "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1512496015851-a1c848fe7189?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1571781526291-c477eb69c1ce?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  { 
    id: "yamaha",
    name: "Yamaha", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fyamaha_negro_transparent_1.webp?alt=media&token=faeb3f6a-5935-488b-aa24-ab2a6c5185ce",
    thumb: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Digital Showroom and 3D configuration tool for Yamaha motorcycles.",
    category: "stage",
    segment: "vehiculos"
  },
  { 
    id: "chevignon",
    name: "Chevignon", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fchevignon_negro_transparent.webp?alt=media&token=74c554ae-0b8a-4bdb-9fe7-f54b286388ba",
    thumb: "https://images.unsplash.com/photo-1523726491678-be8e62226347?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Immersive retail experience and brand activation.",
    category: "echo",
    segment: "fashion"
  },
  { 
    id: "tugo",
    name: "TUGO", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Ftugo_negro_transparent.webp?alt=media&token=122db7fd-256a-4c39-895a-6906023031bd",
    thumb: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "E-commerce redesign and interactive furniture placement app.",
    category: "amplify",
    segment: "hogar"
  },
  { 
    id: "leonisa",
    name: "Leonisa", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fleonisa_negro_transparent.webp?alt=media&token=38b394f4-5f11-4043-a602-0e86b0333240",
    thumb: "https://images.unsplash.com/photo-1515347619362-cb4526df774a?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Virtual fitting room and personalized styling algorithm.",
    category: "echo",
    segment: "fashion"
  },
  { 
    id: "alfa",
    name: "Alfa", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Falfa_negro_transparent.webp?alt=media&token=26d11fbc-812d-45ba-b072-bc088820fdb4",
    thumb: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Material visualization platform for architects.",
    category: "stage",
    segment: "construccion"
  },
  { 
    id: "totto",
    name: "Totto", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Ftotto_negro_transparent.webp?alt=media&token=86a63503-f667-4638-b769-6338b1f55a10",
    thumb: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Interactive flagship store displays and gamified loyalty app.",
    category: "amplify",
    segment: "fashion"
  },
  { 
    id: "studio-f",
    name: "Studio F", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fstudio_f_negro_transparent.webp?alt=media&token=dbccbaef-7f5b-4395-93df-40742f9b1c7a",
    thumb: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Omnichannel strategy and phygital pop-up stores.",
    category: "echo",
    segment: "fashion"
  },
  { 
    id: "postobon",
    name: "Postobón", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fpostobon_negro_transparent.webp?alt=media&token=acbc8d01-e97d-41a4-94e8-8a8f15d48a3d",
    thumb: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Transmedia campaign and AR packaging experiences.",
    category: "amplify",
    segment: "bebidas"
  },
  { 
    id: "bancolombia",
    name: "Bancolombia", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Fbancolombia_negro_transparent.webp?alt=media&token=c42cf1b1-bd23-4581-ba47-19ad0e060c2b",
    thumb: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Next-gen branch design and self-service kiosks UX.",
    category: "stage",
    segment: "banca"
  },
  { 
    id: "avianca",
    name: "Avianca", 
    logo: "https://firebasestorage.googleapis.com/v0/b/landing-tangible.firebasestorage.app/o/Proyectos%2FJM%2FArchivos%2Favianca_negro_transparent.webp?alt=media&token=2622dbce-ca38-4f51-b842-1eebbd7eb015",
    thumb: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=1000",
    desc: "Digital boarding experience and in-flight entertainment UI.",
    category: "amplify",
    segment: "aerolinea"
  }
];
