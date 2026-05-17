/**
 * ============================================================
 *  PORTFOLIO DATA — Edit this file to update all content
 * ============================================================
 */

const PORTFOLIO_DATA = {

  /* ── NAV & IDENTITY ─────────────────────────────────────── */
  name: "Jay Mehta",
  navLinks: [
    { label: "About",      href: "#about"      },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects"   },
    { label: "Skills",     href: "#skills"     },
    { label: "Contact",    href: "#contact"    },
  ],
  ctaButton: { label: "Let's Connect →", href: "https://www.linkedin.com/in/yourprofile" },

  /* ── HERO ───────────────────────────────────────────────── */
  hero: {
    greeting:    "Hey there,",
    headline:    "I'm Jay Mehta",
    subheadline: "Senior Product Manager",
    description: "15+ years shaping customer identity, loyalty & personalization at scale — turning complex data into products people love.",
    profileImage: "assets/images/profile.jpg",   // ← replace with your photo filename
    stats: [
      { value: "15+", label: "Years of\nImpact" },
      { value: "3",   label: "Products\nLaunched" },
    ],
  },

  /* ── ABOUT ──────────────────────────────────────────────── */
  about: {
    heading: "What do I bring?",
    body: [
      "With 15+ years of product management experience across grocery, retail, and e-commerce, I specialize in customer identity, loyalty, personalization, and cross-functional platform initiatives.",
      "At Albertsons I led initiatives spanning account merging, dietary preference unification, social sign-in, and cross-banner feature launches — directly impacting millions of customers. I thrive at the intersection of data, UX, and business strategy.",
      "I'm currently exploring Senior PM roles while building consulting and content-creation income streams focused on AI-powered product development.",
    ],
    stats: [
      { value: "15+", label: "Years Experience"    },
      { value: "50M+", label: "Customers Impacted" },
      { value: "100%", label: "Delivery Focus"     },
    ],
    expertise: [
      "Customer Identity & Loyalty",
      "Roadmap Development",
      "A/B Testing & Experimentation",
      "Data-Driven Decision Making",
      "Cross-Functional Leadership",
      "Agile / SAFe Methodologies",
      "Personalization at Scale",
      "Stakeholder Management",
      "Product Strategy",
      "UX/UI Collaboration",
      "Go-to-Market Strategy",
      "AI / ML Product Strategy",
    ],
  },

  /* ── WORK EXPERIENCE ────────────────────────────────────── */
  experience: [
    {
      company:   "Albertsons Companies",
      role:      "Senior Product Manager (Contract)",
      location:  "San Francisco Bay Area (Hybrid)",
      period:    "2022 – Present",
      bullets: [
        "Led customer identity platform initiatives including account merging, dietary preference unification, and social sign-in across 20+ banners serving 30M+ loyalty members.",
        "Drove A/B testing programs for onboarding and profile features; improved account-creation conversion by 18% through iterative experimentation.",
        "Proposed and championed phone-number-optional registration flow, removing a key friction point projected to reduce drop-off by 22%.",
        "Managed cross-banner feature launches with engineering, design, analytics, and legal stakeholders using SAFe Agile; consistently delivered on schedule.",
        "Resolved critical production bug affecting gifting address workflows within 48 hours, protecting checkout experience for 500K+ weekly transactions.",
      ],
    },
    {
      company:   "Previous Retail & E-Commerce Roles",
      role:      "Senior / Lead Product Manager",
      location:  "Various",
      period:    "2008 – 2022",
      bullets: [
        "15+ years of progressive PM experience across grocery, retail, and e-commerce verticals.",
        "Specialized in customer identity, loyalty programs, personalization engines, and fulfillment platforms.",
        "Led cross-functional teams of 10–20 across engineering, design, data science, and operations.",
        "Consistently delivered products that improved NPS, retention, and revenue metrics.",
      ],
    },
  ],

  /* ── SIDE PROJECTS ──────────────────────────────────────── */
  projects: [
    {
      title:       "AI Job Search Automation",
      tags:        ["n8n", "Apify", "Gemini AI", "Supabase", "Gmail"],
      description: "Built an end-to-end n8n workflow integrating Apify scrapers, Google Drive, Gemini AI, and Supabase to automate daily job search tasks — from scraping listings to drafting personalized outreach emails.",
      link:        "https://www.linkedin.com/in/yourprofile",
      linkLabel:   "View on LinkedIn",
    },
    {
      title:       "Khet Se — Organic Farmer Web App",
      tags:        ["Product Strategy", "Web App", "Agri-tech", "India"],
      description: "Designed and prototyped a D2C platform connecting Indian organic farmers directly with urban consumers, addressing cold-chain logistics and trust gaps in the organic food market.",
      link:        "#",
      linkLabel:   "View Prototype",
    },
    {
      title:       "Little Melody Lane",
      tags:        ["EdTech", "YouTube", "Kids Content", "Content Strategy"],
      description: "Founded a kids' educational YouTube channel focused on music-based learning for children aged 3–8. Developing content strategy, brand identity, and audience-growth playbook.",
      link:        "#",
      linkLabel:   "View Channel",
    },
    {
      title:       "PM Interview Prep System",
      tags:        ["Notion", "AI", "SCOT Framework", "Coaching"],
      description: "Built a structured SCOT-format behavioral story bank and 30-day interview preparation system, now being productized into a coaching offering for aspiring Senior PMs in retail/e-commerce.",
      link:        "#",
      linkLabel:   "Learn More",
    },
  ],

  /* ── SKILLS / TOOLS ─────────────────────────────────────── */
  skills: {
    heading: "Expertise & Tools",
    categories: [
      {
        label: "Product",
        items: ["Product Strategy", "Roadmapping", "OKRs / KPIs", "A/B Testing", "Agile / SAFe", "RICE Prioritization"],
      },
      {
        label: "Data & Analytics",
        items: ["BigQuery", "SQL", "Amplitude", "Adobe Analytics", "Mixpanel", "Power BI"],
      },
      {
        label: "Platforms",
        items: ["Snowflake", "Supabase", "Okta / Azure AD", "n8n", "Apify", "LangChain"],
      },
      {
        label: "Design & Collaboration",
        items: ["Figma", "Jira", "Confluence", "Notion", "Miro", "ProductBoard"],
      },
    ],
  },

  /* ── TESTIMONIAL ────────────────────────────────────────── */
  testimonial: {
    quote: "Jay has a rare ability to bridge complex technical architecture with clear customer value. His work on our identity platform directly moved the needle on loyalty sign-ups and retention — a true cross-functional leader.",
    author: "Colleague, Albertsons",
  },

  /* ── CONTACT / SOCIAL ───────────────────────────────────── */
  contact: {
    heading:     "Let's make something amazing together",
    subheading:  "Open to Senior PM roles, fractional consulting, and speaking opportunities.",
    ctaLabel:    "Connect on LinkedIn",
    ctaHref:     "https://www.linkedin.com/in/yourprofile",
    emailLabel:  "jay@example.com",
    emailHref:   "mailto:jay@example.com",
  },

  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourprofile", icon: "linkedin" },
    { label: "GitHub",   href: "https://github.com/yourusername",          icon: "github"   },
  ],

  /* ── FOOTER ─────────────────────────────────────────────── */
  footer: {
    copyright: "© 2025 Jay Mehta. All rights reserved.",
  },

};
