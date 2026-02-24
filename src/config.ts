// Hypnotic Nails & Beauty Heilbronn Configuration
// Professionelles Nagelstudio

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Hypnotic Nails & Beauty",
    tagline: "Deine Nails. Dein Style.",
    motto: "Perfektion bis in die Fingerspitzen.",
    description: "Dein professionelles Nagelstudio in Heilbronn. Hochwertige Maniküre, Pediküre, Nageldesign mit Acryl, Gel und Shellac - von zertifizierten Nail Designerinnen der HWK Frankfurt.",
    foundingYear: 2020,
    yearsExperience: 10,
    yearsInCenter: 4,
    satisfiedClients: "1.500+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131 123456",
    phoneLink: "tel:+497131123456",
    email: "info@hypnotic-nails-beauty.de",
    whatsapp: "+49 7131 123456",
    whatsappLink: "https://wa.me/497131123456",
    address: {
      street: "Bruchsaler Str. 2",
      city: "Heilbronn",
      district: "Heilbronn",
      zip: "74080",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sBruchsaler%20Str.%202%2C%2074080%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Bruchsaler+Str.+2,+74080+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/hypnotic_nails_lashes",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 09:00-19:00",
    saturday: "Sa 08:00-15:00",
    sunday: "Geschlossen",
    note: "Mittwoch: 09:00-13:00 & 14:00-19:00",
    display: "Mo-Fr 09:00-19:00",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://hypnotic-nails-beauty.de/termin",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.9,
    count: "150+",
    googleReviewLink: "https://www.google.com/maps/place/Hypnotic+Nails+%26+Beauty",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Joanna",
    fullName: "Joanna Lopes",
    image: "/beauty/nails1.jpg",
    bio: [
      "Als Junior Manager und Creative Lead von Hypnotic Nails & Beauty bringe ich Leidenschaft und Kreativitat in jedes Design.",
      "Unser Team besteht aus zertifizierten Nail Designerinnen der HWK Frankfurt, die mit hochsten Hygiene- und Qualitatsstandards arbeiten.",
      "Gemeinsam mit Ilenia Patti und Linnea Groper sorgen wir dafur, dass du dich bei uns wohl fuhlst und mit perfekten Nageln nach Hause gehst.",
    ],
    certifications: [
      { label: "HWK Frankfurt Zertifiziert", icon: "award" },
      { label: "Acryl & Gel Spezialistin", icon: "star" },
      { label: "Hygiene Garantie", icon: "shield" },
      { label: "Kreatives Nageldesign", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Melissa K.",
      rating: 5,
      text: "Die besten Nagel die ich je hatte! Das Team ist super freundlich und die Arbeit ist einfach perfekt. Komme immer wieder gerne!",
      service: "Gel Nagel",
      date: "vor 1 Woche",
    },
    {
      name: "Sandra M.",
      rating: 5,
      text: "Endlich ein Nagelstudio wo man sich wirklich wohl fuhlt. Die Madels verstehen ihr Handwerk und die Hygiene ist top!",
      service: "Shellac Manikure",
      date: "vor 2 Wochen",
    },
    {
      name: "Julia T.",
      rating: 5,
      text: "Meine Acrylnagel halten ewig und sehen mega aus! Das Design war genau so wie ich es mir vorgestellt habe. Absolute Empfehlung!",
      service: "Acryl Neumodellage",
      date: "vor 3 Wochen",
    },
    {
      name: "Christina H.",
      rating: 5,
      text: "Ich liebe meine neuen Nagel! Das Team nimmt sich wirklich Zeit und berat super. Die Zahnschmuck-Applikation war auch schmerzfrei.",
      service: "Nageldesign & Zahnschmuck",
      date: "vor 1 Monat",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Gel Nagelmodellage",
      description: "Hochwertige Gel-Nagel fur langanhaltende Schonheit. Naturlich verstarkend oder mit kreativem Design - ganz nach deinem Wunsch.",
      price: "ab 45 Euro",
      image: "/beauty/maniküre 3.png",
      benefits: ["Langanhaltend", "Naturlich"],
    },
    {
      title: "Acryl Nagelmodellage",
      description: "Professionelle Acryl-Nagel fur maximale Haltbarkeit. Perfekt fur starke, formstabile Nagel mit individuellem Design.",
      price: "ab 50 Euro",
      image: "/beauty/maniküre neu.png",
      benefits: ["Extra stabil", "Formbar"],
    },
    {
      title: "Shellac Manikure",
      description: "Der Klassiker fur gepflegte Hande. Shellac-Lack fur bis zu 2 Wochen Glanz ohne Absplittern.",
      price: "ab 35 Euro",
      image: "/beauty/behandlung 3.png",
      benefits: ["2 Wochen Halt", "Schnell trocknend"],
    },
    {
      title: "Naturnagelversta rkung",
      description: "Sanfte Verstarkung deiner naturlichen Nagel fur mehr Stabilitat ohne kunstliche Verlangerung.",
      price: "ab 30 Euro",
      image: "/beauty/pedicure.webp",
      benefits: ["Naturlich", "Schonend"],
    },
    {
      title: "Shellac Pedikure",
      description: "Verwohnprogramm fur deine Fusse. Professionelle Pedikure mit langanhaltendem Shellac-Lack.",
      price: "ab 40 Euro",
      image: "/beauty/pedicure1.jpg",
      benefits: ["Fusspflege", "Langanhaltend"],
    },
    {
      title: "Nageldesign & Kunst",
      description: "Kreative Nagelkunst von dezent bis extravagant. Strasssteine, Glitzer, French, Ombre und mehr.",
      price: "ab 5 Euro",
      image: "/beauty/nails2.jpg",
      benefits: ["Individuell", "Kreativ"],
    },
    {
      title: "Zahnschmuck",
      description: "Trendiger Zahnschmuck - professionell und sicher appliziert. Der besondere Hingucker fur dein Lacheln.",
      price: "ab 25 Euro",
      image: "/beauty/nails3.jpg",
      benefits: ["Trendy", "Schmerzfrei"],
    },
    {
      title: "Auffullung",
      description: "Regelma ssige Auffullung fur deine Gel- oder Acrylnagel. Halt deine Nagel perfekt in Form.",
      price: "ab 35 Euro",
      image: "/beauty/nails5.jpg",
      benefits: ["Pflege", "Formerhalt"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Gel Nagel",
      items: [
        { name: "Neumodellage Gel (90 Min)", price: "45 Euro" },
        { name: "Neumodellage mit Verlangerung (100 Min)", price: "55 Euro" },
        { name: "Auffullung Gel (60 Min)", price: "35 Euro" },
        { name: "Auffullung mit Korrektur (75 Min)", price: "40 Euro" },
        { name: "Nagelentfernung Gel", price: "15 Euro" },
      ],
    },
    {
      category: "Acryl Nagel",
      items: [
        { name: "Neumodellage Acryl (100 Min)", price: "50 Euro" },
        { name: "Neumodellage mit Verlangerung (110 Min)", price: "60 Euro" },
        { name: "Auffullung Acryl (70 Min)", price: "40 Euro" },
        { name: "Auffullung mit Korrektur (85 Min)", price: "45 Euro" },
        { name: "Nagelentfernung Acryl", price: "18 Euro" },
      ],
    },
    {
      category: "Shellac & Manikure",
      items: [
        { name: "Shellac Manikure (45 Min)", price: "35 Euro" },
        { name: "Klassische Manikure (30 Min)", price: "25 Euro" },
        { name: "Spa Manikure (60 Min)", price: "45 Euro" },
        { name: "Express Manikure (20 Min)", price: "18 Euro" },
        { name: "Naturnagelverstarkung (50 Min)", price: "30 Euro" },
      ],
    },
    {
      category: "Pedikure",
      items: [
        { name: "Shellac Pedikure (60 Min)", price: "40 Euro" },
        { name: "Klassische Pedikure (45 Min)", price: "30 Euro" },
        { name: "Spa Pedikure (75 Min)", price: "50 Euro" },
        { name: "Express Pedikure (30 Min)", price: "22 Euro" },
        { name: "Medizinische Fusspflege (60 Min)", price: "45 Euro" },
      ],
    },
    {
      category: "Nageldesign Extras",
      items: [
        { name: "French / Babyboomer", price: "ab 5 Euro" },
        { name: "Glitzer / Folien", price: "ab 3 Euro" },
        { name: "Strasssteine (pro Stuck)", price: "1 Euro" },
        { name: "Handbemaltes Design", price: "ab 8 Euro" },
        { name: "Ombre / Farbverlauf", price: "ab 5 Euro" },
        { name: "3D Nagelkunst", price: "ab 10 Euro" },
      ],
    },
    {
      category: "Extras",
      items: [
        { name: "Zahnschmuck Applikation", price: "25 Euro" },
        { name: "Zahnschmuck Entfernung", price: "10 Euro" },
        { name: "Paraffinbad Hande", price: "12 Euro" },
        { name: "Paraffinbad Fusse", price: "15 Euro" },
        { name: "Nagel Reparatur (pro Nagel)", price: "5 Euro" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/hero main.webp",
    heroAlt: "Hypnotic Nails & Beauty - Professionelles Nagelstudio Heilbronn",
    hygiene: "/beauty/contact.png",
    gallery: [
      { url: "/beauty/nails1.jpg", category: "Nageldesign" },
      { url: "/beauty/nails2.jpg", category: "Maniküre" },
      { url: "/beauty/nails3.jpg", category: "Gel Nägel" },
      { url: "/beauty/nails4.jpg", category: "Nagelkunst" },
      { url: "/beauty/nails5.jpg", category: "Shellac" },
      { url: "/beauty/nails6.jpg", category: "Acryl Nägel" },
      { url: "/beauty/nails7.jpg", category: "Nageldesign" },
      { url: "/beauty/pedicure1.jpg", category: "Pedikure" },
      { url: "/beauty/maniküre 3.png", category: "Maniküre" },
      { url: "/beauty/maniküre neu.png", category: "Nagelkunst" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant Purple/Plum for Nail Salon
  // ============================================
  colors: {
    primary: "#9B4D96", // Elegant Plum/Purple
    primaryRgb: "155, 77, 150",
    dark: "#2D2D2D",
    light: "#FDF8FC",
    lightAlt: "#F8F0F7",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Hygiene, Kompetenz & Liebe zum Detail",
    description: "Bei Hypnotic Nails & Beauty setzen wir auf hochste Hygienestandards und professionelle Qualitat. Unser Team ist von der HWK Frankfurt zertifiziert und arbeitet mit modernsten Materialien.",
    features: [
      {
        icon: "shield",
        title: "HWK Zertifiziert",
        description: "Alle Nail Designerinnen sind von der HWK Frankfurt zertifiziert.",
      },
      {
        icon: "star",
        title: "Premium Materialien",
        description: "Wir verwenden nur hochwertige, hautfreundliche Produkte.",
      },
      {
        icon: "award",
        title: "1.500+ Kundinnen",
        description: "Zufriedene Kundinnen vertrauen auf unsere Expertise.",
      },
      {
        icon: "check",
        title: "Sterilisierte Werkzeuge",
        description: "Alle Instrumente werden nach jedem Kunden sterilisiert.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "Hypnotic Nails & Beauty Heilbronn Logo",
  },
};

export type Config = typeof config;
